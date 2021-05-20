class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Dm Acadamy"
    }
}

const student1 = new Student(12, "Shuvo");
const student2 = new Student(22, "Siam");
console.log(student1.name, student2.name);