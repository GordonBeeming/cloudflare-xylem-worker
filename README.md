# cloudflare-xylem-worker

This cloudflare worker will be used for requests for some domains like gordonbeeming.com

This Cloudflare Worker modifies HTTP headers for various domains. It adds security headers, removes unwanted headers, and implements domain-specific redirects and Content Security Policy.

## Deployment

This worker is designed to be deployed via Cloudflare's GitHub integration. Ensure `wrangler.toml` is configured with the correct `account_id`.

## Functionality

- Redirects specific hostnames (e.g., `redirect.gordonbeeming.com`) to `https://gordonbeeming.com/`.
- Adds security headers like `X-Xss-Protection`, `X-Frame-Options`, etc.
- Removes headers like `Public-Key-Pins`, `X-Powered-By`.
- Applies a Content Security Policy for `*gordonbeeming.com/*`.
- Applies a Feature-Policy.
- Skips header modifications for non-HTML content.

