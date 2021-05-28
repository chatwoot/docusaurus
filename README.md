### @chatwoot/docusaurus

This plugin enables Chatwoot in Docusaurus powered websites.

#### Install the plugin

1. Add the plugin to your project.

```
yarn add @chatwoot/docusaurus
```

or

```
npm install @chatwoot/docusaurus --save
```

2. Configure the plugin in `docusaurus.config.js`

```js
// docusaurus.config.js
module.exports = {
  plugins: ["@chatwoot/docusaurus"],
  themeConfig: {
    chatwoot: {
      websiteToken: "Your website inbox token",
      baseURL: "https://app.chatwoot.com",  // optional
      enableInDevelopment: false,  // optional
    }
  }
};
```
