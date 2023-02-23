const path = require("path");

module.exports = function(context) {
  const { siteConfig } = context;
  const { themeConfig } = siteConfig;
  const { chatwoot } = themeConfig || {};

  if (!chatwoot) {
    throw new Error(
      `You need to specify 'chatwoot' object in 'themeConfig'`
    );
  }

  const {
    websiteToken,
    baseURL = "https://app.chatwoot.com",
    enableInDevelopment = false,
    chatwootSettings = {}
  } = chatwoot;

  if (!websiteToken) {
    throw new Error(
      "Website Token is missing. Please add a website token to continue."
    );
  }

  const chatwootEnabled =
    process.env.NODE_ENV === "production" || enableInDevelopment;

  return {
    name: "@chatwoot/docusaurus",

    injectHtmlTags() {
      if (!chatwootEnabled) {
        return {};
      }

      return {
        headTags: [
          {
            tagName: "script",
            innerHTML: `
              window.chatwootSettings = ${JSON.stringify(chatwootSettings || {})};

              (function(d,t) {
                var BASE_URL="${baseURL}";
                var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
                g.src=BASE_URL+"/packs/js/sdk.js";
                g.async=!0;
                s.parentNode.insertBefore(g,s);
                g.onload=function(){
                  window.chatwootSDK.run({ websiteToken: '${websiteToken}', baseUrl: BASE_URL })
                }
              })(document,"script");
            `
          }
        ]
      };
    }
  };
};
