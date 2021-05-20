class Parent{
    constructor(){
        this.fatherName = "Shajahan";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFulName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Arnod");
const baby2 = new Child ("siam")
console.log(baby.getFulName());
console.log(baby2.getFulName());