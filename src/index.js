// src/index.js

const securityHeaders = {
    "X-Xss-Protection": "1; mode=block",
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "X-DNS-Prefetch-Control": "on",
};

const sanitiseHeaders = {
    "Vary": "*",
};

const removeHeaders = [
    "Public-Key-Pins",
    "X-Powered-By",
    "X-AspNet-Version",
    "Accept-Encoding",
    "Content-Encoding",
];

export default {
    /**
     * @param {Request} request
     * @param {object} env
     * @param {object} ctx
     * @returns {Promise<Response>}
     */
    async fetch(request, env, ctx) {
        let response = await fetch(request);

        const url = new URL(request.url);
        const domain = url.hostname;

        if (domain === "redirect.gordonbeeming.com" || domain === "www.gordonbeeming.com") {
            return new Response(null, {
                status: 301,
                headers: { 'Location': 'https://gordonbeeming.com/' }
            });
        }

        let newHeaders = new Headers(response.headers);
        const contentType = newHeaders.get("Content-Type") || "";

        for (const [name, value] of Object.entries(securityHeaders)) {
            if ((domain === "iframe.gordonbeeming.com") && name === "X-Frame-Options") {
                continue;
            }
            newHeaders.set(name, value);
        }

        for (const [name, value] of Object.entries(sanitiseHeaders)) {
            newHeaders.set(name, value);
        }

        for (const headerName of removeHeaders) {
            newHeaders.delete(headerName);
        }

        // --- NEW: Apply a dynamic CSP to the main and preview domains ---
        if (domain === "preview.gordonbeeming.com" || domain === "gordonbeeming.com") {
            let csp;
            let nonce = null;

            const baseCspParts = [
                "default-src 'self';",
                "img-src 'self' data:;",
                "font-src 'self' cdn.jsdelivr.net;",
                "object-src 'none';",
                "frame-src www.youtube.com giscus.app;",
                "worker-src 'self' blob:;",
                "frame-ancestors 'none';",
                "sandbox allow-forms allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-popups;",
                "base-uri 'self';"
            ];

            if (contentType.includes("text/html")) {
                // For HTML, generate a nonce and a strict dynamic policy
                nonce = crypto.randomUUID();
                csp = [
                    ...baseCspParts,
                    `script-src 'nonce-${nonce}' 'strict-dynamic' static.cloudflareinsights.com giscus.app cdn.jsdelivr.net;`,
                    `style-src 'nonce-${nonce}' 'self' cdn.jsdelivr.net;`,
                ].join(' ');
            } else {
                // For non-HTML, create a static policy without a nonce or 'unsafe-inline'
                csp = [
                    ...baseCspParts,
                    "script-src 'self' static.cloudflareinsights.com giscus.app cdn.jsdelivr.net;",
                    "style-src 'self' cdn.jsdelivr.net;",
                ].join(' ');
            }
            
            newHeaders.set("Content-Security-Policy", csp);
            newHeaders.set("X-Content-Security-Policy", csp);

            // If a nonce was created, it's an HTML page that needs rewriting
            if (nonce) {
                const rewriter = new HTMLRewriter()
                    .on('script', {
                        element(element) {
                            element.setAttribute('nonce', nonce);
                        },
                    })
                    .on('style', {
                        element(element) {
                            element.setAttribute('nonce', nonce);
                        },
                    });

                const transformedResponse = rewriter.transform(response);

                return new Response(transformedResponse.body, {
                    status: response.status,
                    statusText: response.statusText,
                    headers: newHeaders
                });
            }
        }

        const featurePolicy = "accelerometer 'none'; camera 'none'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; payment 'none'; usb 'none'";
        newHeaders.set("Feature-Policy", featurePolicy);
        newHeaders.set("Permissions-Policy", featurePolicy);

        if (response.status === 404) {
            console.warn(`404 Not Found: ${request.url}`);
        }

        return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: newHeaders
        });
    }
};