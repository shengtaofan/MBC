import path from 'path'
import { readFile, writeFile } from 'fs/promises'
import HtmlPlugin from 'html-webpack-plugin'
import { primary } from './webpack.common.mjs'
import glob from 'glob'
export const defaultLocale = 'zh'
export const langs = {
  zh: 'zh-Hant-TW',
  en: 'en'
}

async function importStyle() {
  const mergeStyles = [
    'bootstrap-base.scss',
    'bootstrap-utilities.scss',
    'style.scss'
  ]
  const indexJS = path.resolve('src', 'sass', 'index.js')
  if (process.env.NODE_ENV === 'production') {
    const readStyles = mergeStyles.map(scss =>
      readFile(path.resolve('src', 'sass', scss), 'utf-8')
    )

    const styles = await Promise.all(readStyles)
    const styleSheet = path.resolve('src', 'sass', 'merge.scss')

    let first = true
    let content = styles.join('')
    content = content
      .replace(/\/\/.+;\n/g, '')
      .replace(/\/\*!\n(.+\n)+\s\*\/\n+/gm, '')
      .replace(/@import '.\/bootstrap-configuration';\n/g, match => {
        if (first) {
          first = false
          return match
        }
        return ''
      })
    await writeFile(styleSheet, content, 'utf-8')
    await writeFile(indexJS, `import './merge.scss'`, 'utf-8')
    return
  }

  const importSCSS = mergeStyles.map(scss => `import './${scss}'`).join('\n')
  await writeFile(indexJS, importSCSS, 'utf-8')
}

export async function importInlineSVG() {
  let importStr = ''
  const placeholder = '// sass-lint:disable-line /* injectImportInlineSVG */\n'
  glob.sync('src/img/inlineSVG/*').forEach(svg => {
    importStr += `$url-${path.basename(svg).slice(0, -4)}: url('../../${svg}');\n`
  })
  const inlineSVG = path.resolve('src', 'sass', 'helper', '_inlineSVG.scss')
  let content = await readFile(inlineSVG, 'utf-8')
  const insertLine = content.indexOf(placeholder)
  importStr += content.substring(insertLine)
  await writeFile(inlineSVG, importStr, 'utf-8')
}

export async function importSpriteSVG() {
  let importStr = ''
  glob.sync('src/img/spriteSVG/*').forEach(svg => {
    if (svg.match(/\.svg$/)) {
      importStr += `import '.${svg.replace('src/img/spriteSVG', '')}'\n`
    }
  })
  const scriptjs = path.resolve('src', 'img', 'spriteSVG', 'index.js')
  await writeFile(scriptjs, importStr, 'utf-8')
}

export function importPugFiles() {
  let importStr = ''
  const scriptjs = path.resolve('src', 'js', 'script.js')

  return {
    add(pug) {
      if (process.env.NODE_ENV === 'production') {
        return
      }
      importStr += `import '../${pug}'\n`
    },
    async write(cb) {
      let content = await readFile(scriptjs, 'utf-8')
      const placeholder = '/* injectImportScript */\n'
      const insertLine = content.indexOf(placeholder)
      if (content.includes(placeholder)) {
        importStr += content.substring(insertLine)
      } else {
        importStr += placeholder + content
      }
      await writeFile(scriptjs, importStr, 'utf-8')
      cb()
    }
  }
}

export function htmlPlugins(outputExt) {
  const pugs = glob.sync('src/*').filter(file => file.endsWith('.pug') && !file.match(/demo|sitemap/))
  const scriptFile = importPugFiles()
  const ext = '.pug'.length
  const isMutiLang = Object.keys(langs).length > 1

  const createPlugins = pugs
    .map(pug => {
      const template = path.basename(pug)
      scriptFile.add(template)
      const basename = template.slice(0, -ext)

      return Object.entries(langs).map(([locale, lang]) => {
        return new HtmlPlugin({
          // base: 'http://localhost',
          minify: Boolean(+process.env.OPTIMIZE) && {
            removeComments: outputExt !== '.cshtml',
            collapseWhitespace: outputExt !== '.cshtml',
            useShortDoctype: false
          },
          basename,
          filename: `${isMutiLang && defaultLocale !== locale ? locale + '/' : ''}${basename + outputExt}`,
          inject: false,
          chunks: ['script'],
          meta: {
            viewport: 'width=device-width, initial-scale=1.0',
            'og:image:type': { property: 'og:image:type', content: 'image/jpeg' },
            'og:image:width': { property: 'og:image:width', content: '600' },
            'og:image:height': { property: 'og:image:height', content: '315' },
            'og:locale': { property: 'og:locale', content: 'zh-Hant-TW' },
            'og:type': { property: 'og:type', content: 'website' },
            // 'twitter:site': '@username for the website used in the card footer.',
            // 'twitter:creator': '@username for the content creator / author.',
            // 'twitter:card': 'summary',
            'google-site-verification': 'LxBWdZimplzUi_BC5CI_viwhDeu60s3NiQefBsrrCg8',
            'msvalidate.01': 'F511A6E2A2C8EACFE4DA1C9972150F6B',
            'theme-color': primary,
            'msapplication-navbutton-color': primary,
            'apple-mobile-web-app-status-bar-style': primary,
            robots: 'index, nofollow',
            distribution: 'Taiwan'
          },
          favicon: path.resolve('src', 'img', 'favicon.ico'),
          template,
          locale,
          lang
        })
      })
    })
    .flat()

  scriptFile.write(() => {
    importStyle()
    importSpriteSVG()
    importInlineSVG()
  })

  const isCSHTML = outputExt === '.cshtml'
  // 打包 html 不產出 demo.html
  if(!Boolean(+process.env.OPTIMIZE) || process.env.EXTENSION === '.cshtml'){
    createPlugins.push(
      new HtmlPlugin({
        basename: isCSHTML ? 'layout' : 'demo',
        filename: (isCSHTML ? 'Views/layout' : 'demo') + outputExt,
        template: 'demo.pug',
        chunks: [isCSHTML ? 'script' : 'demo'],
        inject: false,
        favicon: path.resolve('src', 'img', 'favicon.ico'),
      })
    )
  }
  createPlugins.push(new HtmlPlugin({
    template: 'sitemap.pug',
    filename: 'sitemap.xml',
    inject: false,
    langs,
    minify: true
  }))
  return createPlugins
}

export function cachePlugins(plugins) {
  const vendors = []
  for (const [name, plugin] of Object.entries(plugins)) {
    const pattern = `/node_modules/${plugin}/(.+/)?`.replace(/\//g, '[\\\\/]')
    const test = new RegExp(pattern)
    vendors[name + 'Vendor'] = { test, name }
  }
  return vendors
}
