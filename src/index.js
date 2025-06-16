// src/index.js

const securityHeaders = {
    "X-Xss-Protection": "1; mode=block",
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
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

        if (domain === "redirect.gordonbeeming.com") {
            return new Response(null, {
                status: 301,
                headers: { 'Location': 'https://gordonbeeming.com/' }
            });
        }

        let newHeaders = new Headers(response.headers);

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

        let csp = "";
        if (domain === "preview.gordonbeeming.com") {
            csp = "default-src 'self'; script-src 'self' 'unsafe-inline' static.cloudflareinsights.com giscus.app; style-src 'self' 'unsafe-inline'; img-src 'self' data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAHqADAAQAAAABAAAAHgAAAADKQTcFAAAHY0lEQVRIDY1XDXBUxR3f3fdx716+SHLXAA04apEW2qRDEixSahzqyMeEGjRpbMG2ttNOtQzoOCO1imSYVqhtlRma6giOLVamUceMpIqCU0IyRdQElUIh06oxxOTydXe5u/exu2+3+y68yztyV3g3c/vf//5+/9/+/7vvdg+APM+GSKTizuGx+jzDV3TfGYnc1Dg2dkM+IPIPcM7hT99/X3F9Eudhogd3f2dq6iY/5mrsNVNTK3AgeD90UJmL/+EnXGviXPJzs4Q3jow/OLng2od3co7kiYp+QskhANHLtw0OpgP4ifnshs+nQgih...pm6mWboaQz4jZXpDFGnY844DhrZukbkvC6RCht1cLrVmW4PmOWsBJaXwMl+UmBERK+VF3HtKjBudWYGn0tYsWOfModZ4MYEaubTlmYl1qBF+KiouqRgvC6r/s002Z2qcvWFqtIPSoKVZke9d3v0qKuMKOPWBOv/9UL5Jj9H8vBRVSU372FzkpE+BQx4xVa8XWv4OR/DI/nA9YoGlLczfQlN9F0id3ZCzFPVOynP5sTnWI3Zz3ixDz8a3EXPCy4WQPpjpi8uKZXO47ynOhnABlhLfRFdzPd6K6N+/FI6daFc2cwQM2t0wOzv03OfwA4e9cXexrkbTgurQ2G1u3xmG5IFAw1tIj/Dn8RmEuln1mnaSAbQiBemxo7PuIRc7VqWcNShKST4n0Xr1N6jUW1Mkm6Hgo5bjTGX++EoGh1eUDVdgpAqZdoVtA0z3nWGn+jK8ufp6PMua1aktQHhYhf8RI6vYDYKkrd9z/mwFu11wHvHgAAAABJRU5ErkJggg==; object-src 'none'; frame-ancestors 'none'; sandbox allow-forms allow-same-origin allow-scripts; base-uri 'self';";
        }
        if (csp.length > 0) {
            newHeaders.set("Content-Security-Policy", csp);
            newHeaders.set("X-Content-Security-Policy", csp);
        }

        const featurePolicy = "accelerometer 'none'; camera 'none'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; payment 'none'; usb 'none'";
        newHeaders.set("Feature-Policy", featurePolicy);
        newHeaders.set("Permissions-Policy", featurePolicy);

        return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: newHeaders
        });
    }
};