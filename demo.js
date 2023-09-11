const a = new Promise(resolve => resolve(1));
a.then(data=>{console.log(data)}).then(data=>{console.log(data)})
a.then(data=>a).then(data=>console.log(data))