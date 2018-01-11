// eslint-disable-next-line import/no-extraneous-dependencies
const yaml = require('js-yaml');
const path = require('path');
const { readdirSync, readFileSync, writeFileSync } = require('fs');

const ROOT = path.join(__dirname, '../src');
const DIST = path.join(__dirname, '../dist');

exports.LANGUAGES = readdirSync(ROOT);

exports.scanLangModules = lang => readdirSync(path.join(ROOT, lang)).filter(x => x.endsWith('.yml')).map(x => x.replace(/.yml$/, ''));

exports.getLangModuleFile = (lang, mod) => yaml.safeLoad(readFileSync(path.join(ROOT, lang, `${mod}.yml`), 'utf8'));

exports.saveLangFile = (lang, content) => writeFileSync(path.join(DIST, `${lang}.js`), content);

exports.saveIndex = () => writeFileSync(
  path.join(DIST, 'index.js'),
  exports.LANGUAGES.map(lang => `exports.${lang.replace(/-(\w+$)/, (_, x) => x.toUpperCase())} = require('./${lang}');\n`).join('')
);
