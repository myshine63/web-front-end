class User {
    name: string;
    private readonly age: number; // 不能在子类中访问，不能通过obj.prop访问
    protected sex: boolean; // 可以在子类访问，但是不能通过obj.prop访问

    constructor(username: string, age: number, sex: boolean) {
        this.name = username;
        this.age = age;
        this.sex = sex;
    }

    print() {
        console.log('this age is ' + this.age)
    }
}

class SuperUser extends User {
    constructor(name: string, age: number, sex: boolean) {
        super(name, age, sex);
    }

    print() {
        console.log('this is ' + this.name);
        super.print();
        console.log('this sex is ' + this.sex);
    }
}

