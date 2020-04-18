class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.schoolName = "BMSC bogura";
    }
}

const student1 = new Student(5, "ali");
const student2 = new Student(6, "sad");
console.log(student1, student2);