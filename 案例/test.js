Promise.resolve(Promise.reject(1)).then(err=>{
    console.log(err)
}).catch((err)=>{
    console.log(222);
    console.log(err)
})
