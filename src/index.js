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
        const newRequest = new Request(request);
        newRequest.headers.delete("Accept-Encoding");
        let response = await fetch(newRequest);

        const url = new URL(request.url);
        const domain = url.hostname;

        if (domain === "redirect.gordonbeeming.com" || domain === "www.gordonbeeming.com") {
            return new Response(null, {
                status: 301,
                headers: { 'Location': 'https://gordonbeeming.com/' }
            });
        }

        let newHeaders = new Headers(response.headers);
        newHeaders.set("Feature-Policy", "accelerometer 'none'; camera 'none'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; payment 'none'; usb 'none'");
        newHeaders.set("Permissions-Policy", "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()");

        newHeaders.set("X-Origin-Content-Encoding", response.headers.get("Content-Encoding") || "none");
        const contentType = newHeaders.get("Content-Type") || "";
        
        // --- NEW DEBUG STEP: Check if the body is readable ---
        // A response body can only be read once, so we must clone it first.
        if (contentType.includes("text/html")) {
            const body = await response.clone().text();
            newHeaders.set("X-Debug-Body-Length", body.length);
        }

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
                "sandbox allow-forms allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-popups allow-popups-to-escape-sandbox;",
                "base-uri 'self';"
            ];

            if (contentType.includes("text/html")) {
                nonce = crypto.randomUUID();
                csp = [
                    ...baseCspParts,
                    `script-src 'nonce-${nonce}' 'strict-dynamic' static.cloudflareinsights.com giscus.app cdn.jsdelivr.net;`,
                    `style-src 'self' 'unsafe-inline' cdn.jsdelivr.net;`,
                ].join(' ');
            } else {
                csp = [
                    ...baseCspParts,
                    "script-src 'self' static.cloudflareinsights.com giscus.app cdn.jsdelivr.net;",
                    "style-src 'self' 'unsafe-inline' cdn.jsdelivr.net;",
                ].join(' ');
            }
            
            newHeaders.set("Content-Security-Policy", csp);
            newHeaders.set("X-Content-Security-Policy", csp);

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