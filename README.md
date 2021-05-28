### @chatwoot/docusaurus-plugin

This plugin enables Chatwoot in Docusaurus powered websites.

#### Install the plugin

1. Add the plugin to your project.

```
yarn add @chatwoot/docusaurus-plugin
```

or

```
npm install @chatwoot/docusaurus-plugin --save
```

2. Configure the plugin in `docusaurus.config.js`

```js
// docusaurus.config.js
module.exports = {
  plugins: ["@chatwoot/docusaurus-plugin"],
  themeConfig: {
    chatwoot: {
      websiteToken: "Your website inbox token",
      baseURL: "https://app.chatwoot.com",  // optional
      enableInDevelopment: false,  // optional
    }
  }
};
```
