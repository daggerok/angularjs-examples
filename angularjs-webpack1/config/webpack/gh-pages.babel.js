import { BaseHrefWebpackPlugin } from 'base-href-webpack-plugin';
import config from './prod.babel';

config.output.publicPath = '/angularjs-examples/';
config.plugins = [
  ...config.plugins,
  new BaseHrefWebpackPlugin({
    baseHref: config.output.publicPath
  }),
];

export default config;
