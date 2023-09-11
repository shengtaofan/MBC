import path from 'path'
import { writeFile } from 'fs/promises'
import ghpages from 'gh-pages'
;(async function () {
  console.log('Start deploying to https://github.com/shengtaofan/MBC.git.')
  await writeFile(path.resolve('dist', 'CNAME'), 'masterbuilder.com.tw', 'utf-8')
  await writeFile(path.resolve('dist', '.nojekyll'), 'content', 'utf-8')
  ghpages.publish('dist', {
      repo: 'https://github.com/shengtaofan/MBC.git',
      user: { name: 'ShengTao', email: 'fanst@ntnu.edu.tw' },
      message: 'Updated ' + new Date().toISOString(),
      dotfiles: true,
      history: false
    },
    function (err) {
      if (err) console.log(err)
    }
  )
})()