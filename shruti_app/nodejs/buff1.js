var x = new Buffer('I am an indian')
var y = new Buffer(x.length)

x.copy(y,0,7,15)

console.log('The value is '+y.toString());