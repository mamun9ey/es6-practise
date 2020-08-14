function add (num1, num2) {
    return num1 + num2;
}
// 
const total = add(12,14);
console.log(total);

const totalNum = add (12);
console.log(totalNum);
// 
// এখানে ডিফল ভ্যালু নেই তাই NaN দেখাচ্ছে।

// 
function add2 (num3, num4 = 0) {
    return num3 + num4;
}

const total2 = add2(12);
console.log(total2);



//  এখানে আমরা num4 এর ডিফল্ট ভ্যালু দিয়েছি তাই আর NaN দেখাই নি
// 