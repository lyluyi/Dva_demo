const context = require.context('./', false, /\.js$/)

console.log(context)
//  ["./example.js", "./index.js", "./product.js"]
console.log(context.keys()) 
// ["keys", "resolve", "id"] ????
console.log(Object.keys(context)) 
// ["./example.js", "./product.js"]
console.log(context.keys().filter(item => item !== './index.js')) 
// map(key => context(key)) 相当于 return 每一个 require('./product.js')
console.log(context.keys().filter(item => item !== './index.js').map(key => context(key)))

export default  context.keys().filter(item => item !== './index.js').map(key => context(key))
