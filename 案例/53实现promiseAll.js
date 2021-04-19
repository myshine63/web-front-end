function All(arr) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i]).then(data => {
        count++;
        res.push(data);
        if (count === arr.length) {
          resolve(res);
        }
      }, err => {
        reject(err)
      })
    }
  })
}