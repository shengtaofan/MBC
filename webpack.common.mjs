import path from 'path'
import webpack from 'webpack'
import SVGSpritePlugin from 'svg-sprite-loader/plugin.js'
import Server from 'webpack-dev-server'
import { cachePlugins, langs, defaultLocale } from './import.mjs'
const { DefinePlugin } = webpack

export const primary = '#003366'
const EXT = process.env.EXTENSION
const common = {
  context: path.resolve('src'),
  entry: { script: '/js/script.js' },
  output: {
    path: path.resolve('dist'),
    filename: 'js/[name][contenthash:4].js',
    chunkFilename: 'js/[name].js' // name保留 /* webpackChunkName:'name' */
  },
  module: {
    noParse: /jquery/,
    rules: [
      {
        test: /\.js$/i,
        use: {
          loader: 'babel-loader',
          options: { cacheDirectory: true }
        },
        exclude: /node_modules/,
        include: [path.resolve('src', 'js')]
      },
      // {
      //   test: /.(eot|svg|ttf|woff|woff2)$/i,
      //   type: 'asset/resource',
      //   include: [path.resolve('src', 'font')],
      //   generator: { filename: 'font/[name][ext]' }
      // },
      {
        test: /\.pug$/i,
        include: /src/,
        use: {
          loader: 'pug-loader',
          options: {
            doctype: 'html',
            pretty: process.env.NODE_ENV === 'development' || EXT === '.cshtml'
          }
        }
      },
      {
        test: /\.svg$/,
        include: /spriteSVG/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              publicPath: './img/',
              symbolId: '[name]'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        include: /inlineSVG|embedSVG/,
        use: ['svg-url-loader'],
        type: 'javascript/auto'
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      env: JSON.stringify(process.env.NODE_ENV),
      ext: JSON.stringify(EXT),
      langs: JSON.stringify(langs),
      defaultLocale: JSON.stringify(defaultLocale),
      isProd: `${process.env.NODE_ENV === 'production'}`,
      isDev: `${process.env.NODE_ENV === 'development'}`,
      primary: "'"+primary+"'",
      project: '"MBC"',
      baseDir: '""',
      projectName: '"創業家"',
      staticDomain: '"https://masterbuilder.com.tw"',
      testingDomain: '""',
      staticURL: '"https://shengtaofan.github.io/MBC"',
      externalIP: JSON.stringify('http://' + Server.internalIPSync('v4'))
    }),
    new SVGSpritePlugin({
      plainSprite: true,
      spriteAttrs: {
        'xmlns:xlink': null,
        'stroke-': null,
        id: null
      }
    })
  ],
  stats: 'minimal',
  optimization: {
    splitChunks: {
      chunks: 'initial',
      minChunks: 1,
      automaticNameDelimiter: '~',
      cacheGroups: {
        ...cachePlugins({
          axios: 'axios',
          bootstrap: 'bootstrap|bs5',
          popper: '@popperjs'
        }),
       /*  vendors: {
          name: 'vendors',
          test: /\.m?js$/,
          priority: -10
        }, */
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
}

if(!Boolean(+process.env.OPTIMIZE)){
  common.entry.demo = '/js/demo.js'
}
export default common
