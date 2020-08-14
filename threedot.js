// জাভাস্ক্রিপ্ট থ্রি ডটস

const ages = [23,35,22,11];
const ages2 = [12,43,53,33];
const totalAges = ages.concat(ages2);
console.log(totalAges);

// আমরা চাইলে নতুন Arreo  ও যোগ করতে পারি

const totalAges2 = ages.concat(ages2).concat([4]);
console.log(totalAges2);


// থ্রি ডটস দিয়ে আমরা সহজে এই কাজ টি করতে পারি

const totalAges3 = [...ages, ...ages2,4];

console.log(totalAges3);



const minister = 444;
const police = 222;
const sochib = 111;
const maximum = Math.max(minister,police,sochib);
console.log(maximum);

// max number ও আমরা সহজে বের করতে পারি three dots  দিয়ে

const max = [548,222,333];
const maximumNumber = Math.max(...max);
console.log(maximumNumber);
