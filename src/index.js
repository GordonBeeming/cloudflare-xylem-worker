// src/index.js

const securityHeaders = {
  "X-Xss-Protection": "1; mode=block",
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-DNS-Prefetch-Control": "on",
};

const sanitiseHeaders = {
  Vary: "*",
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
    const url = new URL(request.url);
    const domain = url.hostname;
    const path = url.pathname;

    if (
      domain === "redirect.gordonbeeming.com" ||
      domain === "www.gordonbeeming.com"
    ) {
      return new Response(null, {
        status: 301,
        headers: { Location: "https://gordonbeeming.com/" },
      });
    }

    if (domain === "hardphasetracker.gordonbeeming.com" && path === "/") {
      return new Response(null, {
        status: 301,
        headers: { Location: "https://gordonbeeming.com/hardphasetracker" },
      });
    }

    if (domain === "copilot_here.gordonbeeming.com" && path === "/") {
      return new Response(null, {
        status: 301,
        headers: { Location: "https://gordonbeeming.com/copilot_here" },
      });
    }

    if (domain === "scribe.gordonbeeming.com" && path === "/") {
      return new Response(null, {
        status: 301,
        headers: { Location: "https://gordonbeeming.com/scribe" },
      });
    }

    if (domain === "recipes.gordonbeeming.com" && path === "/") {
      return new Response(null, {
        status: 301,
        headers: { Location: "https://gordonbeeming.com/personal-recipes" },
      });
    }

    let fetchUrl = request.url;
    if (domain === "gordonbeeming.com") {
      if (
        path === "/hardphasetracker" ||
        path.startsWith("/hardphasetracker/")
      ) {
        if (path === "/hardphasetracker") {
          return new Response(null, {
            status: 301,
            headers: { Location: "https://gordonbeeming.com/hardphasetracker/" },
          });
        }
        const newUrl = new URL(request.url);
        newUrl.hostname = "hardphasetracker.gordonbeeming.com";
        newUrl.pathname = path.replace("/hardphasetracker", "") || "/";
        fetchUrl = newUrl.toString();
      } else if (
        path === "/copilot_here" ||
        path.startsWith("/copilot_here/")
      ) {
        if (path === "/copilot_here") {
          return new Response(null, {
            status: 301,
            headers: { Location: "https://gordonbeeming.com/copilot_here/" },
          });
        }
        const newUrl = new URL(request.url);
        newUrl.hostname = "copilot_here.gordonbeeming.com";
        newUrl.pathname = path.replace("/copilot_here", "") || "/";
        fetchUrl = newUrl.toString();
      } else if (
        path === "/scribe" ||
        path.startsWith("/scribe/")
      ) {
        const newUrl = new URL(request.url);
        newUrl.hostname = "gordonbeeming.github.io";
        if (path === "/scribe") {
          return new Response(null, {
            status: 301,
            headers: { Location: "https://gordonbeeming.com/scribe/" },
          });
        } else {
          newUrl.pathname = path.replace("/scribe/", "/Scribe-site/");
        }
        fetchUrl = newUrl.toString();
      } else if (
        path === "/personal-recipes" ||
        path.startsWith("/personal-recipes/")
      ) {
        const newUrl = new URL(request.url);
        newUrl.hostname = "gordonbeeming.github.io";
        if (path === "/personal-recipes") {
          return new Response(null, {
            status: 301,
            headers: { Location: "https://gordonbeeming.com/personal-recipes/" },
          });
        }
        fetchUrl = newUrl.toString();
      }
    }

    const newRequest = new Request(fetchUrl, request);
    newRequest.headers.delete("Accept-Encoding");
    let response = await fetch(newRequest);

    let newHeaders = new Headers(response.headers);

    // Add X-Source header to show the origin URL for debugging
    newHeaders.set("X-Source", fetchUrl);
    newHeaders.set(
      "Feature-Policy",
      "accelerometer 'none'; camera 'none'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; payment 'none'; usb 'none'",
    );
    newHeaders.set(
      "Permissions-Policy",
      "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()",
    );

    const contentType = newHeaders.get("Content-Type") || "";

    for (const [name, value] of Object.entries(securityHeaders)) {
      if (domain === "iframe.gordonbeeming.com" && name === "X-Frame-Options") {
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

    if (
      domain === "recipes.gordonbeeming.com" ||
      (domain === "gordonbeeming.com" && path.startsWith("/personal-recipes"))
    ) {
      let csp;
      let nonce = null;

      const baseCspParts = [
        "default-src 'self';",
        "img-src 'self' data: assets.tina.io;",
        "font-src 'self' data: fonts.googleapis.com fonts.gstatic.com;",
        "object-src 'none';",
        "frame-src 'self';",
        "worker-src 'self' blob:;",
        "frame-ancestors 'self';",
        "sandbox allow-forms allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-popups allow-popups-to-escape-sandbox;",
        "base-uri 'self';",
        "connect-src 'self' identity.tinajs.io content.tinajs.io assets.tinajs.io;",
      ];

      if (contentType.includes("text/html")) {
        nonce = crypto.randomUUID();
        csp = [
          ...baseCspParts,
          `script-src 'nonce-${nonce}' 'strict-dynamic' static.cloudflareinsights.com;`,
          `style-src 'self' 'unsafe-inline' fonts.googleapis.com;`,
        ].join(" ");
      } else {
        csp = [
          ...baseCspParts,
          "script-src 'self' static.cloudflareinsights.com;",
          "style-src 'self' 'unsafe-inline' fonts.googleapis.com;",
        ].join(" ");
      }

      newHeaders.set("Content-Security-Policy", csp);
      newHeaders.set("X-Content-Security-Policy", csp);

      if (nonce) {
        const rewriter = new HTMLRewriter()
          .on("script", {
            element(element) {
              element.setAttribute("nonce", nonce);
            },
          })
          .on("style", {
            element(element) {
              element.setAttribute("nonce", nonce);
            },
          })
          .on("link", {
            element(element) {
              const rel = (element.getAttribute("rel") || "").toLowerCase();
              const as = (element.getAttribute("as") || "").toLowerCase();
              if (
                (rel === "preload" && as === "script") ||
                rel === "modulepreload"
              ) {
                element.setAttribute("nonce", nonce);
              }
            },
          });

        const transformedResponse = rewriter.transform(response);

        return new Response(transformedResponse.body, {
          status: response.status,
          statusText: response.statusText,
          headers: newHeaders,
        });
      }
    } else if (
      domain === "preview.gordonbeeming.com" ||
      domain === "gordonbeeming.com"
    ) {
      let csp;
      let nonce = null;

      const baseCspParts = [
        "default-src 'self';",
        "img-src 'self' data: www.google.com www.google-analytics.com;",
        "font-src 'self' cdn.jsdelivr.net;",
        "object-src 'none';",
        "frame-src www.youtube.com giscus.app;",
        "worker-src 'self' blob:;",
        "frame-ancestors 'none';",
        "sandbox allow-forms allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-popups allow-popups-to-escape-sandbox;",
        "base-uri 'self';",
        "connect-src 'self' api.github.com www.google-analytics.com analytics.google.com stats.g.doubleclick.net;",
      ];

      if (contentType.includes("text/html")) {
        nonce = crypto.randomUUID();
        csp = [
          ...baseCspParts,
          `script-src 'nonce-${nonce}' 'strict-dynamic' static.cloudflareinsights.com giscus.app cdn.jsdelivr.net;`,
          `style-src 'self' 'unsafe-inline' cdn.jsdelivr.net;`,
        ].join(" ");
      } else {
        csp = [
          ...baseCspParts,
          "script-src 'self' static.cloudflareinsights.com giscus.app cdn.jsdelivr.net;",
          "style-src 'self' 'unsafe-inline' cdn.jsdelivr.net;",
        ].join(" ");
      }

      newHeaders.set("Content-Security-Policy", csp);
      newHeaders.set("X-Content-Security-Policy", csp);

      if (nonce) {
        const rewriter = new HTMLRewriter()
          .on("script", {
            element(element) {
              element.setAttribute("nonce", nonce);
            },
          })
          .on("style", {
            element(element) {
              element.setAttribute("nonce", nonce);
            },
          })
          .on("link", {
            element(element) {
              const rel = (element.getAttribute("rel") || "").toLowerCase();
              const as = (element.getAttribute("as") || "").toLowerCase();
              if (
                (rel === "preload" && as === "script") ||
                rel === "modulepreload"
              ) {
                element.setAttribute("nonce", nonce);
              }
            },
          });

        const transformedResponse = rewriter.transform(response);

        return new Response(transformedResponse.body, {
          status: response.status,
          statusText: response.statusText,
          headers: newHeaders,
        });
      }
    }

    if (response.status === 404) {
      console.warn(`404 Not Found: ${request.url}`);
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  },
};
