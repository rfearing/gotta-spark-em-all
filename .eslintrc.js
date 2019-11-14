const aliases = require('./aliases');

module.exports = {
//   extends: '@chiedolabs/eslint-config-nextjs',
  plugins: [ 'jest' ],
  env: { 'jest/globals': true },
  settings: {
    'import/resolver': {
      alias: {
        map: aliases.relativeAliases,
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
};