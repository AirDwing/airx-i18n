# @airx/i18n

[![npm](https://img.shields.io/npm/v/@airx/i18n.svg?style=plastic)](https://npmjs.org/package/@airx/i18n) [![npm](https://img.shields.io/npm/dm/@airx/i18n.svg?style=plastic)](https://npmjs.org/package/@airx/i18n) [![npm](https://img.shields.io/npm/dt/@airx/i18n.svg?style=plastic)](https://npmjs.org/package/@airx/i18n) [![codebeat badge](https://codebeat.co/badges/d5ecdf05-a337-43f5-81bb-fe42aa110556)](https://codebeat.co/projects/github-com-airdwing-airx-i18n-master)

## 贡献指南

English Version: [Contributing Guide](./.github/CONTRIBUTING.md)

- `src` 目录下，各语言建立单独的文件夹，命名规则采用纯小写，短破折号`-`连接，如`zh-cn`
- 使用 [YAML](http://www.yaml.org/) 语言进行翻译维护
- 原则：
  1. 根据专业术语分类或功能模块（如禁飞区`nofly`）进行区分汇总
  2. 相同翻译单词（如 `org: 组织`）不重复出现
  3. 日常用于翻译统一归放于`common`下

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

## LICENSE

[Apache-2.0](./LICENSE)
