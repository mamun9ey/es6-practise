class student {
    constructor (stdId,stdName) {
        this.id = stdId;
        this.name = stdName;
        this.school = "Feni Govt. College";
    }
}

const student1 = new student (1,'Mojibur Rahman');
const student2 = new student (2,'Shahadat Hossain');

console.log(student1.name,student2.name);


// ক্লাস দিয়ে আমরা একি প্রোপার্টি দিয়ে অনেক ভ্যাল্যু একসাথে এক জায়গায় রাখতে পারি।


class teacher {
    constructor(sirId,sirName) {
        this.id = sirId;
        this.name = sirName;
    }
}

const teacher1 = new teacher(1,'Faruk Sir');
const teacher2 = new teacher(1,'Selim Sir');

console.log(teacher1.name);