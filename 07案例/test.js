Function.prototype.myCall = function () {
  this();
}
function say(){
  console.log('hello tom')
}
say.myCall()