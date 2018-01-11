
module.exports = langs => langs.map(lang => `exports['${lang.replace(/-\w+$/, x => x.toUpperCase())}'] = require('./${lang}')`);
