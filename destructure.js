const person = {
    name : 'Mojibur Rahman',
    dob : "1994",
    graduation: 'M.Sc',
    friends: ['Shahadat','Regan','Ashik'],
    phone:"01644217699"
};

const {name,dob,graduation,phone} = person;

console.log(name,dob,graduation,phone);

// এখানে আমরা শিখলাম Destructure কী।

// Destructure হচ্ছে কোন বিশাল object থেকে কিছু সংখ্যাক property নেয়া।


// আমরা চাইলে object ভেতর আরেকটা object কে নিতে পারি।

const complexObject = {
    name:'shawon',
    dob: "1998",
    info: {
        address: "Shantidhara R/A 89,B/Gha,Feni"
    }
}

const {address} = complexObject.info;
console.log(address);