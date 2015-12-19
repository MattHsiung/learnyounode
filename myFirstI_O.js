var fs = require('fs')

var buffer = fs.readFileSync(process.argv[2])

bufferArray = buffer.toString().split('\n')

bufferArray.pop()

console.log(bufferArray.length)

