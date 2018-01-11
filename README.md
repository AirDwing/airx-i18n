# @airx/i18n

[![npm](https://img.shields.io/npm/v/@airx/i18n.svg?style=plastic)](https://npmjs.org/package/@airx/i18n) [![npm](https://img.shields.io/npm/dm/@airx/i18n.svg?style=plastic)](https://npmjs.org/package/@airx/i18n) [![npm](https://img.shields.io/npm/dt/@airx/i18n.svg?style=plastic)](https://npmjs.org/package/@airx/i18n)

## 安装及使用

```bash
yarn add @airx/i18n
# or
npm i --save @airx/i18n
```

示例：

```js
const Vue = require('vue');
const VueI18n = require('vue-i18n');
const { zhCN, enUS } = require('@airx/i18n');

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'zh-CN',
  fallbackLocale: 'zh-CN',
  messages: {
    'en-US': enUS,
    'zh-CN': zhCN
  }
});

module.exports = i18n;
```
