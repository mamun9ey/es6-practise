class Parent {
    constructor() {
        this.fatherName = "Rahman";
    }
}

class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }

    getFullName() {
        return this.name + " " + this.fatherName;
    }
}
const baby1= new Child ("Mizanur");
const baby2 = new Child ("Azizur");
const baby3 = new Child ("Ziaur");
const baby4 = new Child ("Mojibur");





console.log(baby1.getFullName());
console.log(baby2.getFullName());
console.log(baby3.getFullName());
console.log(baby4.getFullName());


// নোটঃ ক্লাস এর নাম Uppercase দিয়ে শুরু করতে হয়। যেমনঃ Child ।

// এখানে আমরা  inheritance, Extends class ,super ,method নিয়ে আলোচনা করেছি।

// Child এবং Parent এর মধ্যে কানেকশন দিতে হলে আমাদের Child extends Parent দিতে হবে।

// পাশাপাশি constructor এর মধ্যে super() কে কল করতে হবে ।

// আমরা চাইলে method ও কল করতে পারি। মেথড হচ্ছে ফাংশন। এখানে আলাদা ব্যাপার হচ্ছে আমাদের function keyword টি লিখতে হবে না।শুধু ফাংশন Name লিখলেই হবে।
