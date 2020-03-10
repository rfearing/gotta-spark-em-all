// require('dotenv').config();
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const aliases = require('./aliases');

module.exports = withCSS(withSass({
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: '[local]___[hash:base64:10]',
  },
  webpack: (config) => {
    const newConfig = { ...config };
    newConfig.module.rules = [
      ...newConfig.module.rules,
      // this allows us to have mixins and variables in every .scss file
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'sass-resources-loader',
            options: {
              resources: ['./base/scss/mixins.scss', './base/scss/variables.scss'],
            },
          },
        ],
      },
    ];
    newConfig.resolve.alias = {
      ...config.resolve.alias,
      ...aliases.absoluteAliases,
    };
    return newConfig;
  },
}));
