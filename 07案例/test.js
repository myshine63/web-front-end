function F(name) {
    this.name=name;
    this.sa=()=>{
        console.log(this.name);
    }
}
let a =new F(123);
a.sa();