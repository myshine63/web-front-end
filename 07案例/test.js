let arr = [1,2,3]

arr.reduce((current,count)=>{
  return current+count
}, 0)

Array.prototype.myReduce= function(callback,num){
  let count=num;
  this.forEach(val=>{
    count = callback(val,count)
  })
  return count
}
console.log(arr.myReduce((current,count)=>{
  return current+count
}, 0))