const fs = require('fs');
let a = new Promise(((resolve, reject) => {
  fs.readFile('./1.txt', function (err, data) {
    if (err) {
      reject(err)
    }
    resolve(data);
  })
}))
a.then(data=>{
  console.log(data.toString())
})