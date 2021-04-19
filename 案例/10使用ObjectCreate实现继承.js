class Father{
  constructor(name) {
    this.name=name
  }
  logName(){
    console.log(this.name)
  }
}

let obj = Object.create(new Father('tom'));
obj.logName('tom')
