# Copilot Instructions for Cloudflare Xylem Worker

## Project Overview

This is a Cloudflare Worker that acts as a security and redirect layer for multiple domains under gordonbeeming.com. It modifies HTTP headers, implements Content Security Policies (CSP), and handles domain-specific redirects.

## Architecture & Technology Stack

- **Platform**: Cloudflare Workers (Edge Computing)
- **Runtime**: Cloudflare Workers Runtime (V8-based)
- **Language**: JavaScript (ES Modules)
- **Entry Point**: `src/index.js`
- **Configuration**: `wrangler.jsonc`
- **Deployment**: Cloudflare GitHub integration

## Code Style & Conventions

### JavaScript Style
- Use ES6+ module syntax (`export default`)
- Use `const` for all declarations unless reassignment is needed
- Use template literals for string interpolation
- Use arrow functions in callbacks
- Maintain consistent indentation (4 spaces)
- Keep JSDoc comments for function signatures

### Naming Conventions
- Use camelCase for variable and function names
- Use descriptive names for objects (e.g., `securityHeaders`, `removeHeaders`)
- Use UPPERCASE for CSP directive constants if extracted

### Code Organization
- Keep header definitions at the top as constants
- Group related functionality (security headers, CSP policies, domain-specific logic)
- Use early returns for redirects and special cases
- Process headers in logical order: security, sanitization, removal, CSP

## Domain-Specific Requirements

### Domains Handled
1. **redirect.gordonbeeming.com** - 301 redirect to main domain
2. **www.gordonbeeming.com** - 301 redirect to main domain  
3. **gordonbeeming.com** - Main blog with strict CSP and nonce injection
4. **preview.gordonbeeming.com** - Preview environment (same CSP as main)
5. **recipes.gordonbeeming.com** - Recipe site with TinaCMS integration
6. **iframe.gordonbeeming.com** - Allows iframe embedding (no X-Frame-Options)

### Security Headers Applied
- `X-Xss-Protection`: XSS protection enabled
- `X-Frame-Options`: DENY (except iframe.gordonbeeming.com)
- `X-Content-Type-Options`: nosniff
- `Referrer-Policy`: strict-origin-when-cross-origin
- `X-DNS-Prefetch-Control`: on
- `Feature-Policy` and `Permissions-Policy`: Restrict all features

### Headers Removed
- `Public-Key-Pins` (deprecated)
- `X-Powered-By` (security through obscurity)
- `X-AspNet-Version` (information disclosure)
- `Content-Encoding` (handled by worker)

## Content Security Policy (CSP)

### Main Site (gordonbeeming.com, preview.gordonbeeming.com)
- **Nonce-based CSP**: For HTML responses, generate random nonce and inject into all `<script>` and `<style>` tags
- **strict-dynamic**: Used for script-src with nonce
- **Allowed Origins**:
  - Scripts: static.cloudflareinsights.com, giscus.app, cdn.jsdelivr.net
  - Styles: 'unsafe-inline', cdn.jsdelivr.net
  - Frames: www.youtube.com, giscus.app
  - Images: 'self', data:
  - Fonts: 'self', cdn.jsdelivr.net

### Recipe Site (recipes.gordonbeeming.com)
- **Nonce-based CSP**: For HTML responses only
- **TinaCMS Integration**:
  - Connect: identity.tinajs.io, content.tinajs.io, assets.tinajs.io
  - Images: assets.tina.io
  - Fonts: fonts.googleapis.com, fonts.gstatic.com

### CSP Implementation Rules
- Only inject nonces for HTML content (`text/html`)
- Use HTMLRewriter to add nonce attributes to script and style elements
- Apply both `Content-Security-Policy` and `X-Content-Security-Policy` headers
- Maintain sandbox directives for defense in depth

## Key Implementation Patterns

### Request Processing Flow
1. Clone request and remove `Accept-Encoding` header
2. Fetch origin response
3. Check for domain redirects (early return)
4. Create new headers object from response
5. Add security and permission headers
6. Apply domain-specific CSP
7. For HTML + CSP with nonce: Transform response with HTMLRewriter
8. Return modified response

### HTML Rewriting
- Use Cloudflare's HTMLRewriter API for stream processing
- Add nonce to both `<script>` and `<style>` elements
- Transform response body while preserving status and headers
- Only rewrite HTML content types

### Error Handling
- Log 404 responses with `console.warn`
- Preserve original response status and statusText
- Handle edge cases gracefully

## Development Guidelines

### When Adding New Domains
1. Determine if domain needs custom CSP or uses default security headers
2. Add domain-specific logic in the main fetch handler
3. Define base CSP parts as array for readability
4. Consider whether X-Frame-Options should be excluded
5. Test with both HTML and non-HTML content types

### When Modifying CSP
1. Keep base CSP parts separate from nonce-specific directives
2. Test with Content Security Policy violation reports
3. Ensure 'strict-dynamic' is used with nonce for modern browsers
4. Maintain backward compatibility with fallback directives
5. Document any third-party domains being whitelisted

### When Adding Security Headers
1. Add to `securityHeaders` object at top of file
2. Consider domain-specific exceptions (like iframe domain)
3. Verify header is supported by modern browsers
4. Document the purpose of the header

### Testing Considerations
- Test redirects return 301 with correct Location header
- Verify nonces are unique per request (using crypto.randomUUID())
- Check that non-HTML responses skip HTMLRewriter
- Validate CSP doesn't break third-party integrations (YouTube, Giscus, TinaCMS)
- Ensure removed headers are actually removed

## Performance Considerations

- Avoid reading response body unless necessary (only for HTML with nonce)
- Use `response.clone()` before reading body to avoid consumption
- HTMLRewriter processes streams efficiently (no full body buffering)
- Early returns for redirects avoid unnecessary processing

## Debugging Tips

- Check `X-Debug-Body-Length` header for HTML content verification
- Check `X-Origin-Content-Encoding` for encoding information
- Use browser DevTools Network tab to inspect CSP headers
- Check Console for CSP violation reports
- Verify nonce attributes in rendered HTML source

## Important Notes

- Accept-Encoding is removed from requests to ensure predictable responses
- Response bodies can only be read once - always clone before reading
- HTMLRewriter is stream-based and memory-efficient
- CSP with 'strict-dynamic' means whitelisted hosts are ignored if nonce is present
- The worker runs on Cloudflare's edge, so changes deploy globally

## Common Pitfalls to Avoid

- Don't read response body without cloning first
- Don't apply HTMLRewriter to non-HTML content
- Don't forget to set both Content-Security-Policy headers
- Don't remove security headers without understanding implications
- Don't hardcode nonces (must be unique per request)
- Don't add unnecessary domains to CSP whitelist

## Deployment

This worker deploys automatically via Cloudflare's GitHub integration. No manual wrangler commands are needed for deployment.

## CLI Task Documentation

When creating documentation files (MD files) during CLI tasks, follow these guidelines to avoid unnecessary documentation noise:

### When to Create New Documentation

**DO create new documentation for**:
- Significant architectural changes or new features
- Major refactorings that affect multiple modules
- New patterns or conventions being established
- Implementation guides that will be referenced by others
- Complex changes that need detailed explanation for future reference

**DO NOT create new documentation for**:
- Minor bug fixes or corrections
- Small adjustments to existing code
- Clarifications or improvements to existing implementations
- Changes that can be adequately explained in commit messages

**When unsure**: Ask if documentation should be created before writing it. It's better to update existing documentation than create redundant files.

### Documentation File Naming Format
All documentation files created during CLI tasks should be saved to `docs/cli-tasks/` with the following format:

```
yyyyMMdd-II-XX-description.md
```

Where:
- `yyyyMMdd` = Current date (e.g., 20251002)
- `II` = Author's initials from git config (e.g., GB for Gordon Beeming)
- `XX` = Sequential number starting at 01 for the day (01, 02, 03, etc.)
- `description` = Kebab-case description of the task/document

### Examples
- `20251002-GB-01-graceful-row-failure-implementation-summary.md`
- `20251002-GB-02-graceful-row-failure-refactoring-guide.md`
- `20251002-GB-03-graceful-row-failure-changes-summary.md`

### Process
1. **Determine if documentation is needed** - Is this a significant change?
2. Get current date: `date +%Y%m%d`
3. Get author initials from git config: `git config user.name`
4. Check existing files in `docs/cli-tasks/` for today's date to determine next sequence number
5. **Check if existing documentation should be updated instead** of creating new
6. Create file with proper naming format only if genuinely needed
7. If multiple related documents, use sequential numbers to maintain order

### Updating Existing Documentation

Prefer updating existing documentation when:
- The change is related to a recent task documented today
- It's a bug fix or improvement to something recently implemented
- It adds clarification or correction to existing docs
- The change is minor and fits within the scope of existing documentation

### Purpose
This approach:
- Reduces documentation noise and clutter
- Keeps related information together
- Makes documentation easier to navigate and maintain
- Ensures only significant changes are documented separately
- Maintains high signal-to-noise ratio in documentation

## Git Commit Guidelines

### Commit Frequently
Commit changes incrementally as you complete logical units of work.

**Why commit frequently:**
- ✅ Creates small, focused commits that are easy to review and understand
- ✅ Enables vertical slicing - each commit represents a single logical change
- ✅ Avoids one giant commit at the end of a session with dozens of unrelated changes
- ✅ Makes it easier to track progress and document work in task documentation
- ✅ Allows reverting specific changes without losing other work
- ✅ Provides clear checkpoints during development

**When to commit:**
- ✅ After adding a new feature or component
- ✅ After fixing a bug
- ✅ After updating documentation (including task documentation in `docs/cli-tasks/`)
- ✅ After refactoring code
- ✅ Before making major changes (safety checkpoint)
- ✅ After successful test runs

**Exception:** Do not commit when working on the `gitbutler/workspace` branch - GitButler manages commits on this branch.

### Commit Message Format
Follow conventional commit format:

```
[Type]: Brief description

Examples:
- feat: Add recipe search functionality
- fix: Correct dark mode toggle behavior
- docs: Update Tina CMS setup guide
- refactor: Simplify recipe card component
- style: Fix accessibility contrast issues
- test: Add keyboard navigation tests
```

### Co-Author Attribution

**ALWAYS add the requester as a co-author on commits** to ensure proper attribution.

**How to identify the requester:**
1. **Git config**: Check `git config user.name` and `git config user.email`
2. **GitHub user**: If running in GitHub Codespaces, use the logged-in GitHub user
3. **GitHub Actions**: When triggered by a comment/issue, use the comment author's details
4. **Manual request**: When someone asks you to make changes, use their information

**Co-Author Format:**
```bash
git commit -m "Type: Brief description

Co-authored-by: Name <email@example.com>"
```

**Example:**
```bash
git commit -m "feat: Add authentication module

Co-authored-by: Gordon Beeming <me@gordonbeeming.com>"
```

**Multiple co-authors:**
```bash
git commit -m "feat: Add authentication module

Co-authored-by: Gordon Beeming <me@gordonbeeming.com>
Co-authored-by: Daniel Mackay <daniel@example.com>"
```

**When to add co-authors:**
- ✅ When implementing a requested feature
- ✅ When fixing a reported bug
- ✅ When making changes based on feedback
- ✅ When pair programming or collaborating
- ❌ Not needed for automated updates (dependency bumps, etc.)
- ❌ Not needed for your own self-initiated refactoring (unless requested)

## Working Directory and File Management

### Repository Boundaries
All work, including temporary files, must be done within the repository boundaries:

**DO**:
- Create temporary files/directories within the repository root
- Use `/tmp/` directory at repository root for temporary work files
- Add temporary directories to `.gitignore` if they shouldn't be committed
- Clean up temporary files after completing tasks

**DO NOT**:
- Create files outside the repository directory
- Work in system temp directories or home directory
- Leave temporary files scattered throughout the repository

### Temporary Files
- Use `/tmp/` at the repository root for scratch work
- This directory is already in `.gitignore`
- Always clean up temporary files when done
- Document any temporary files that need to persist

### Purpose
This approach:
- Keeps all work contained within the project
- Prevents pollution of system directories
- Makes cleanup easier and more predictable
- Ensures proper git ignore handling
