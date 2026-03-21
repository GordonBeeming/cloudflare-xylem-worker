// src/index.js

// Permanent redirect rules for gordonbeeming.com (migrated from xylem next.config.ts)
const xylemRedirects = {
  "/:path*.mdx": "/:path*",
  "/blog/tags/:slug*": "/tags/:slug*",
  "/blog/sitemap.xml": "/sitemap.xml",
  "/blog/tymhkon-how-do-i-follow-what-s-happening-with-azure-devops": "/blog/2018-09-24/tymhkon-how-do-i-follow-what-s-happening-with-azure-devops",
  "/blog/tymhkon-public-projects-in-azure-devops": "/blog/2018-09-15/tymhkon-public-projects-in-azure-devops",
  "/blog/tymhkon-what-is-it": "/blog/2018-09-08/tymhkon-what-is-it",
  "/blog/code-snippet-jsonpropertyconvertercs": "/blog/2020-07-30/code-snippet-jsonpropertyconvertercs",
  "/blog/2020-journey-to-120": "/blog/2020-05-20/2020-journey-to-120",
  "/blog/a-hello-world-for-vso-extensions": "/blog/2015-06-18/a-hello-world-for-vso-extensions",
  "/blog/a-journey-worth-taking": "/blog/2018-05-21/a-journey-worth-taking",
  "/blog/activating-your-windows-10": "/blog/2014-10-06/activating-your-windows-10",
  "/blog/add-work-item-links-from-check-in-comments": "/blog/2013-11-16/add-work-item-links-from-check-in-comments",
  "/blog/adding-routes-to-strava-and-then-to-garmin-devices": "/blog/2019-02-16/adding-routes-to-strava-and-then-to-garmin-devices",
  "/blog/allow-project-users-to-manage-permissions-groups-in-azure-devops": "/blog/2021-07-22/allow-project-users-to-manage-permissions-groups-in-azure-devops",
  "/blog/application-insights-for-windows-store-apps-in-azure-portal": "/blog/2014-12-10/application-insights-for-windows-store-apps-in-azure-portal",
  "/blog/assign-a-azure-subscription-to-a-existing-user": "/blog/2014-12-17/assign-a-azure-subscription-to-a-existing-user",
  "/blog/battling-to-join-insider-preview": "/blog/2017-06-20/battling-to-join-insider-preview",
  "/blog/benchmarkdotnet-isboolean-method": "/blog/2017-12-28/benchmarkdotnet-isboolean-method",
  "/blog/blazor-server-events-not-triggering-when-hosted-behind-cloudflare": "/blog/2023-08-15/blazor-server-events-not-triggering-when-hosted-behind-cloudflare",
  "/blog/browsing-localhost-with-the-microsoft-edge-browser": "/blog/2015-07-04/browsing-localhost-with-the-microsoft-edge-browser",
  "/blog/building-basic-azure-infrastructure-using-terraform": "/blog/2022-08-04/building-basic-azure-infrastructure-using-terraform",
  "/blog/building-libraries-that-target-multiple-frameworks": "/blog/2018-07-30/building-libraries-that-target-multiple-frameworks",
  "/blog/bulk-import-git-repositories-into-vststfs": "/blog/2017-07-25/bulk-import-git-repositories-into-vststfs",
  "/blog/changing-the-theme-in-windows-10": "/blog/2014-10-06/changing-the-theme-in-windows-10",
  "/blog/cleaning-up-the-taskbar-on-windows-10": "/blog/2015-03-26/cleaning-up-the-taskbar-on-windows-10",
  "/blog/configuring-a-chocolatey-install": "/blog/2014-10-28/configuring-a-chocolatey-install",
  "/blog/connecting-agents-to-tfs-using-integrated-security-on-http-from-external-domain": "/blog/2017-08-06/connecting-agents-to-tfs-using-integrated-security-on-http-from-external-domain",
  "/blog/connecting-test-manager-to-vso": "/blog/2015-05-22/connecting-test-manager-to-vso",
  "/blog/connecting-visual-studio-to-vso": "/blog/2015-05-18/connecting-visual-studio-to-vso",
  "/blog/converting-html-to-pdf-using-c-and-magic": "/blog/2017-05-22/converting-html-to-pdf-using-c-and-magic",
  "/blog/create-a-new-vso-account": "/blog/2015-05-11/create-a-new-vso-account",
  "/blog/create-pfx-certificate-file-for-azure-web-apps-from-cloudflare-origin-cert-using-openssl": "/blog/2020-03-24/create-pfx-certificate-file-for-azure-web-apps-from-cloudflare-origin-cert-using-openssl",
  "/blog/creating-fake-tfs-builds": "/blog/2014-07-18/creating-fake-tfs-builds",
  "/blog/creating-a-checkpoint-vpn-connection-on-windows-81": "/blog/2014-01-16/creating-a-checkpoint-vpn-connection-on-windows-81",
  "/blog/creating-a-new-azure-active-directory-user": "/blog/2014-12-17/creating-a-new-azure-active-directory-user",
  "/blog/creating-a-new-branch-in-vsts": "/blog/2018-03-10/creating-a-new-branch-in-vsts",
  "/blog/creating-a-vso-account-for-demos": "/blog/2014-09-26/creating-a-vso-account-for-demos",
  "/blog/creating-an-asynchronous-authorizeattribute-in-mvc": "/blog/2018-01-26/creating-an-asynchronous-authorizeattribute-in-mvc",
  "/blog/creating-an-azure-dashboard-for-application-insights-in-1-2-3": "/blog/2018-12-12/creating-an-azure-dashboard-for-application-insights-in-1-2-3",
  "/blog/creating-iterations-in-vso": "/blog/2015-05-25/creating-iterations-in-vso",
  "/blog/creating-your-first-vso-team-project": "/blog/2015-05-15/creating-your-first-vso-team-project",
  "/blog/cryptographic-failure-while-signing-assembly": "/blog/2014-01-03/cryptographic-failure-while-signing-assembly",
  "/blog/deploying-net-templates-using-github-actions": "/blog/2023-11-05/deploying-net-templates-using-github-actions",
  "/blog/developing-software-for-the-modern-world-using-only-your-browser-and-github": "/blog/2021-05-19/developing-software-for-the-modern-world-using-only-your-browser-and-github",
  "/blog/do-you-know-optional-parameters": "/blog/2014-07-07/do-you-know-optional-parameters",
  "/blog/download-msva-content-with-powershell": "/blog/2014-01-24/download-msva-content-with-powershell",
  "/blog/download-brian-kellers-vm-with-powershell": "/blog/2014-01-10/download-brian-kellers-vm-with-powershell",
  "/blog/easily-adding-auditing-to-a-entity-framework-code-first-project": "/blog/2017-01-05/easily-adding-auditing-to-a-entity-framework-code-first-project",
  "/blog/easily-download-ch9-videos": "/blog/2014-04-10/easily-download-ch9-videos",
  "/blog/failover-or-restart-results-in-reseed-of-identity-fix": "/blog/2015-01-07/failover-or-restart-results-in-reseed-of-identity-fix",
  "/blog/find-organizations-linked-to-your-aad-tenant-in-azure-devops": "/blog/2019-12-10/find-organizations-linked-to-your-aad-tenant-in-azure-devops",
  "/blog/first-post-here": "/blog/2013-10-22/first-post-here",
  "/blog/fixing-the-process-cannot-access-the-file-because-it-is-being-used-by-another-process-exception-from-hresult-0x80070020": "/blog/2015-01-21/fixing-the-process-cannot-access-the-file-because-it-is-being-used-by-another-process-exception-from-hresult-0x80070020",
  "/blog/generating-code-documentation-using-ghost-doc-enterprise": "/blog/2017-04-30/generating-code-documentation-using-ghost-doc-enterprise",
  "/blog/getting-start-with-a-team-explorer-plugin-for-vs-2013": "/blog/2014-01-16/getting-start-with-a-team-explorer-plugin-for-vs-2013",
  "/blog/getting-start-with-a-team-explorer-plugin-for-vs-2013-part-2": "/blog/2014-01-09/getting-start-with-a-team-explorer-plugin-for-vs-2013-part-2",
  "/blog/getting-start-with-a-team-explorer-plugin-for-vs-2013-part-3": "/blog/2014-01-16/getting-start-with-a-team-explorer-plugin-for-vs-2013-part-3",
  "/blog/getting-start-with-a-team-explorer-plugin-for-vs-2013-part-4": "/blog/2014-01-16/getting-start-with-a-team-explorer-plugin-for-vs-2013-part-4",
  "/blog/github-actions-ci-in-5-clicks": "/blog/2019-08-19/github-actions-ci-in-5-clicks",
  "/blog/github-projects-and-issues": "/blog/2022-05-23/github-projects-and-issues",
  "/blog/goodbye-microsoft-teams-bar-hello-productivity": "/blog/2024-05-16/goodbye-microsoft-teams-bar-hello-productivity",
  "/blog/having-fun-with-github-codespaces-docker-swagger-codegen-cli": "/blog/2021-02-02/having-fun-with-github-codespaces-docker-swagger-codegen-cli",
  "/blog/how-do-i-fix-http-error-5025-process-failure-when-hosting-in-iis-with-dotnet-core": "/blog/2018-05-13/how-do-i-fix-http-error-5025-process-failure-when-hosting-in-iis-with-dotnet-core",
  "/blog/how-to-create-a-team-project-in-azure-devops": "/blog/2020-09-21/how-to-create-a-team-project-in-azure-devops",
  "/blog/how-to-delete-a-team-project-in-azure-devops": "/blog/2020-09-22/how-to-delete-a-team-project-in-azure-devops",
  "/blog/how-to-enable-alternate-credentials-in-visual-studio-online-vso": "/blog/2015-01-16/how-to-enable-alternate-credentials-in-visual-studio-online-vso",
  "/blog/how-to-enforce-check-in-policies": "/blog/2014-01-10/how-to-enforce-check-in-policies",
  "/blog/how-to-get-your-identity-tokens": "/blog/2014-06-02/how-to-get-your-identity-tokens",
  "/blog/how-to-lower-the-real-cost-of-a-sql-server-virtual-machine-in-azure": "/blog/2020-03-27/how-to-lower-the-real-cost-of-a-sql-server-virtual-machine-in-azure",
  "/blog/how-to-migrate-git-repositories-to-azure-devops": "/blog/2020-09-23/how-to-migrate-git-repositories-to-azure-devops",
  "/blog/how-to-migrate-svn-and-tfvc-repositories-to-git-repositories-in-azure-devops": "/blog/2020-09-24/how-to-migrate-svn-and-tfvc-repositories-to-git-repositories-in-azure-devops",
  "/blog/how-to-move-work-items-between-projects-in-azure-devops": "/blog/2020-09-23/how-to-move-work-items-between-projects-in-azure-devops",
  "/blog/how-to-recovery-a-deleted-team-project-in-azure-devops": "/blog/2020-09-22/how-to-recovery-a-deleted-team-project-in-azure-devops",
  "/blog/how-to-tweet-azure-pipeline-activity-easily": "/blog/2018-09-20/how-to-tweet-azure-pipeline-activity-easily",
  "/blog/how-to-use-the-same-editor-as-visual-studio-code-in-your-sites": "/blog/2020-08-12/how-to-use-the-same-editor-as-visual-studio-code-in-your-sites",
  "/blog/hubstt-will-save-your-life": "/blog/2014-04-24/hubstt-will-save-your-life",
  "/blog/implementing-a-dynamic-robotstxt": "/blog/2017-04-12/implementing-a-dynamic-robotstxt",
  "/blog/improving-your-git-efficiency-using-git-alias": "/blog/2024-03-21/improving-your-git-efficiency-using-git-alias",
  "/blog/increase-the-value-of-your-dashboard-with-tfs-2013-update-2": "/blog/2014-03-03/increase-the-value-of-your-dashboard-with-tfs-2013-update-2",
  "/blog/setting-up-nginx-on-azure-vms-behind-cloudflare-using-terraform": "/blog/2022-08-17/setting-up-nginx-on-azure-vms-behind-cloudflare-using-terraform",
  "/blog/introduction-to-dotnet-pretty": "/blog/2014-07-17/introduction-to-dotnet-pretty",
  "/blog/is-this-thing-on": "/blog/2023-10-20/is-this-thing-on",
  "/blog/know-it-prove-it-28-days-to-rock-your-skills": "/blog/2015-01-13/know-it-prove-it-28-days-to-rock-your-skills",
  "/blog/load-testing-using-azure": "/blog/2015-10-08/load-testing-using-azure",
  "/blog/making-a-cake-day": "/blog/2016-05-02/making-a-cake-day",
  "/blog/managing-github-secrets-using-terraform": "/blog/2022-08-11/managing-github-secrets-using-terraform",
  "/blog/migrating-pipelines-and-releases-in-azure-devops": "/blog/2020-09-29/migrating-pipelines-and-releases-in-azure-devops",
  "/blog/migrating-test-artifacts-and-all-other-work-item-types-using-the-azure-devops": "/blog/2020-09-27/migrating-test-artifacts-and-all-other-work-item-types-using-the-azure-devops",
  "/blog/missing-ctrl-enter-in-visual-studio-to-commit-changes-here-s-how-you-can-add-it": "/blog/2019-03-18/missing-ctrl-enter-in-visual-studio-to-commit-changes-here-s-how-you-can-add-it",
  "/blog/moving-application-insights-resources-between-subscriptions-in-azure": "/blog/2018-01-03/moving-application-insights-resources-between-subscriptions-in-azure",
  "/blog/moving-repos-to-github-from-azure-devops-github-quick-tips": "/blog/2022-01-17/moving-repos-to-github-from-azure-devops-github-quick-tips",
  "/blog/msb4019-microsoft-data-tools-schema-sqltasks-targets-was-not-found": "/blog/2020-11-20/msb4019-microsoft-data-tools-schema-sqltasks-targets-was-not-found",
  "/blog/my-experience-with-codealike": "/blog/2014-11-13/my-experience-with-codealike",
  "/blog/one-year-as-alm-ranger-and-first-day-as-alm-mvp": "/blog/2014-07-02/one-year-as-alm-ranger-and-first-day-as-alm-mvp",
  "/blog/opening-apps-from-the-directory-you-in-as-administrator": "/blog/2016-12-13/opening-apps-from-the-directory-you-in-as-administrator",
  "/blog/organize-your-music-collection": "/blog/2014-07-16/organize-your-music-collection",
  "/blog/packt-publishing-celebrating-2000-titles": "/blog/2014-03-24/packt-publishing-celebrating-2000-titles",
  "/blog/playing-with-azure-and-terraform": "/blog/2022-09-01/playing-with-azure-and-terraform",
  "/blog/profile-readme-github-quick-tips": "/blog/2021-08-11/profile-readme-github-quick-tips",
  "/blog/publish-aspnet-core-sites-to-azure-easily-using-github-actions": "/blog/2020-03-23/publish-aspnet-core-sites-to-azure-easily-using-github-actions",
  "/blog/pushing-a-new-project-to-chocolatey": "/blog/2014-10-28/pushing-a-new-project-to-chocolatey",
  "/blog/raising-awareness-and-reliable-information-sources-for-covid19-by-adding-a-banner-to-your-websites": "/blog/2020-03-26/raising-awareness-and-reliable-information-sources-for-covid19-by-adding-a-banner-to-your-websites",
  "/blog/rethink-your-application-boundary-and-use-cloudflare": "/blog/2020-10-21/rethink-your-application-boundary-and-use-cloudflare",
  "/blog/scanning-infrastructure-as-code-iac-for-vulnerabilities": "/blog/2022-08-24/scanning-infrastructure-as-code-iac-for-vulnerabilities",
  "/blog/searching-in-vststfs": "/blog/2017-08-06/searching-in-vststfs",
  "/blog/set-which-chrome-profile-for-visual-studio-to-use": "/blog/2018-03-26/set-which-chrome-profile-for-visual-studio-to-use",
  "/blog/setting-up-net-core-continuous-integration-build-with-vststfs": "/blog/2017-04-23/setting-up-net-core-continuous-integration-build-with-vststfs",
  "/blog/setting-up-2-factor-authentication-and-email-verification-with-net-core-20": "/blog/2018-02-15/setting-up-2-factor-authentication-and-email-verification-with-net-core-20",
  "/blog/setting-up-a-standard-continuous-integration-build-with-vststfs": "/blog/2017-04-23/setting-up-a-standard-continuous-integration-build-with-vststfs",
  "/blog/setting-up-commit-signature-verification-for-github": "/blog/2022-03-21/setting-up-commit-signature-verification-for-github",
  "/blog/setting-up-tfs-build-agents-fast": "/blog/2015-10-16/setting-up-tfs-build-agents-fast",
  "/blog/setting-wild-card-branch-policies-in-vsts": "/blog/2018-03-10/setting-wild-card-branch-policies-in-vsts",
  "/blog/sharing-code-that-uses-application-insights": "/blog/2014-05-14/sharing-code-that-uses-application-insights",
  "/blog/so-i-installed-vs-enterprise-2017-and-have-no-mtm-where-is-it": "/blog/2017-03-08/so-i-installed-vs-enterprise-2017-and-have-no-mtm-where-is-it",
  "/blog/sql-prompt-64-release": "/blog/2014-09-23/sql-prompt-64-release",
  "/blog/ssms-2016-where-have-my-line-breaks-gone": "/blog/2016-07-25/ssms-2016-where-have-my-line-breaks-gone",
  "/blog/start-bitstransfer-object-reference-not-set-to-an-instance-of-an-object": "/blog/2014-01-04/start-bitstransfer-object-reference-not-set-to-an-instance-of-an-object",
  "/blog/sys-internals-updater": "/blog/2014-05-15/sys-internals-updater",
  "/blog/tf400324-team-foundation-services-are-not-available-from-server": "/blog/2014-01-21/tf400324-team-foundation-services-are-not-available-from-server",
  "/blog/tf400917-the-current-configuration-is-not-valid-for-this-feature-this-feature-cannot-be-used-until-you-correct-the-configuration": "/blog/2014-03-27/tf400917-the-current-configuration-is-not-valid-for-this-feature-this-feature-cannot-be-used-until-you-correct-the-configuration",
  "/blog/tfs-work-item-visualizers": "/blog/2014-07-28/tfs-work-item-visualizers",
  "/blog/the-importance-of-regression-testing-and-real-world-security-consequences": "/blog/2020-03-18/the-importance-of-regression-testing-and-real-world-security-consequences",
  "/blog/they-said-select-was-bad-but": "/blog/2015-04-09/they-said-select-was-bad-but",
  "/blog/turning-on-local-cache-for-nuget": "/blog/2014-09-25/turning-on-local-cache-for-nuget",
  "/blog/turning-on-the-new-navigation-for-visual-studio-team-services": "/blog/2018-07-15/turning-on-the-new-navigation-for-visual-studio-team-services",
  "/blog/typescript-emit-error-write-to-file-failed": "/blog/2013-11-15/typescript-emit-error-write-to-file-failed",
  "/blog/upgradepublish-tfs-2013-process-templates-with-powershell": "/blog/2014-09-12/upgradepublish-tfs-2013-process-templates-with-powershell",
  "/blog/using-application-insights-with-a-new-windows-store-app": "/blog/2014-02-18/using-application-insights-with-a-new-windows-store-app",
  "/blog/using-application-insights-with-an-existing-windows-store-app": "/blog/2014-05-12/using-application-insights-with-an-existing-windows-store-app",
  "/blog/using-azure-resource-manager": "/blog/2014-12-17/using-azure-resource-manager",
  "/blog/using-c-6-to-make-bad-sql-awesome": "/blog/2017-02-09/using-c-6-to-make-bad-sql-awesome",
  "/blog/using-ngrok-to-test-web-apps-on-mobile-while-developing": "/blog/2017-05-18/using-ngrok-to-test-web-apps-on-mobile-while-developing",
  "/blog/visual-studio-2012-paste-special-feature": "/blog/2013-10-29/visual-studio-2012-paste-special-feature",
  "/blog/visual-studio-2013-update-1-released": "/blog/2014-01-21/visual-studio-2013-update-1-released",
  "/blog/visual-studio-hangs-systemcertificates-fiddler": "/blog/2014-02-25/visual-studio-hangs-systemcertificates-fiddler",
  "/blog/visual-studio-item-templates-vs-net-templates-in-2023": "/blog/2023-10-29/visual-studio-item-templates-vs-net-templates-in-2023",
  "/blog/visual-studio-team-services-overview-video-series": "/blog/2016-05-03/visual-studio-team-services-overview-video-series",
  "/blog/vsts-widget-for-github-badges": "/blog/2016-01-28/vsts-widget-for-github-badges",
  "/blog/webinar-performance-tuning-net-sql-code-using-ants-profiler": "/blog/2014-12-03/webinar-performance-tuning-net-sql-code-using-ants-profiler",
  "/blog/windows-insider-program-changes-to-terms-of-use": "/blog/2015-01-15/windows-insider-program-changes-to-terms-of-use",
  "/blog/work-around-for-net-framework-47-or-a-later-update-is-already-installed-on-this-computer": "/blog/2017-12-07/work-around-for-net-framework-47-or-a-later-update-is-already-installed-on-this-computer",
  "/blog/20250813/guide-to-mastering-github-copilot-on-github-com": "/blog/2025-08-13/guide-to-mastering-github-copilot-on-github-com",
  "/blog/2026-09-15/the-conprism-the-illusion-of-precision-in-estimates-and-star-ratings": "/blog/2025-09-15/the-conprism-the-illusion-of-precision-in-estimates-and-star-ratings",
  "/blog/2025-11-30/copilot-cli-in-docker-november-2025-updates-arm64-dotnet-10-and-flexible-mounts": "/blog/2025-11-28/copilot_here-november-2025-updates-arm64-dotnet-10-and-flexible-mounts",
  "/blog/2025-10-28/copilot-cli-in-docker-october-2025-updates-auto-updates-cross-platform-support-and-more": "/blog/2025-10-28/copilot_here-october-2025-updates-auto-updates-cross-platform-support-and-more",
  "/blog/2025-11-28/copilot-cli-in-docker-november-2025-updates-arm64-dotnet-10-and-flexible-mounts": "/blog/2025-11-28/copilot_here-november-2025-updates-arm64-dotnet-10-and-flexible-mounts",
};

/**
 * Match a request path against a redirect pattern.
 * Supports :param* wildcard patterns (e.g. "/:path*.mdx" matches "/foo/bar.mdx").
 * Returns the destination path with captured segments substituted, or null if no match.
 */
function matchRedirect(requestPath) {
  for (const [pattern, destination] of Object.entries(xylemRedirects)) {
    if (pattern === requestPath) {
      return destination;
    }
    // Handle patterns with :param* wildcards
    if (pattern.includes(":")) {
      const regex = pattern
        .replace(/:[a-zA-Z]+\*/g, "(.*)")
        .replace(/\./g, "\\.");
      const match = requestPath.match(new RegExp(`^${regex}$`));
      if (match) {
        let result = destination;
        let i = 1;
        const wildcards = destination.match(/:[a-zA-Z]+\*/g) || [];
        for (const wc of wildcards) {
          result = result.replace(wc, match[i] || "");
          i++;
        }
        return result;
      }
    }
  }
  return null;
}

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
      } else {
        // Check for xylem redirect rules before proxying
        const redirectDest = matchRedirect(path);
        if (redirectDest) {
          return new Response(null, {
            status: 301,
            headers: { Location: `https://gordonbeeming.com${redirectDest}` },
          });
        }

        // Default: proxy to xylem GitHub Pages site
        const newUrl = new URL(request.url);
        newUrl.hostname = "gordonbeeming.github.io";
        newUrl.pathname = `/xylem${path}`;
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
        "img-src 'self' data: assets.tina.io;",
        "font-src 'self' data: fonts.googleapis.com fonts.gstatic.com;",
        "object-src 'none';",
        "frame-src 'self' www.youtube.com giscus.app;",
        "worker-src 'self' blob:;",
        "frame-ancestors 'self';",
        "sandbox allow-forms allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-popups allow-popups-to-escape-sandbox;",
        "base-uri 'self';",
        "connect-src 'self' www.google-analytics.com analytics.google.com stats.g.doubleclick.net identity.tinajs.io content.tinajs.io assets.tinajs.io;",
      ];

      if (contentType.includes("text/html")) {
        nonce = crypto.randomUUID();
        csp = [
          ...baseCspParts,
          `script-src 'nonce-${nonce}' 'strict-dynamic' static.cloudflareinsights.com giscus.app www.googletagmanager.com;`,
          `style-src 'self' 'unsafe-inline' giscus.app;`,
        ].join(" ");
      } else {
        csp = [
          ...baseCspParts,
          "script-src 'self' static.cloudflareinsights.com giscus.app www.googletagmanager.com;",
          "style-src 'self' 'unsafe-inline' giscus.app;",
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
