
// export default {
//   ...require('./mock/product'),
//   ...require('./mock/user')
// };

// 重复处理的替代流方案  这个文件是在node的环境中执行

import fs from 'fs'
import path from 'path'

const mock = {}

console.log(fs)
console.log(path)

fs.readdirSync(path.join(__dirname + '/mock')).forEach(function(file) {
  console.log(file)
  console.log(typeof file)
  if (file.match(/\.js$/)) {
    Object.assign(mock, require('./mock/' + file))
  }
})

console.log(mock)
console.log("*************************************")
export default mock
