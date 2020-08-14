function doubleIt (num) {
    return num * 2;

}

const result1 = doubleIt(5);
console.log(result1);


// এটা হচ্ছে স্বাভাবিক ফাংশন । আমরা Es6 এর মাধ্যমের আরো সহজে এটি করতে পারবো।

const doubltIt = num => num * 2;
const result2 = doubleIt(3);
console.log(result2);


// আমরা চাইলে  একাধিক প্যারামিটার নিয়েও করতে পারি

const parameter = (num1,num2) => num1 + num2;
const result3 = parameter(4,5);
console.log(result3);

// আমরা চাইলে কোন প্যরামিটার ছাড়াই করতে  পারি।

const withoutParameter = () =>  5;
const result4 = withoutParameter();
console.log(result4);


// আমরা চাইলে একসাথে কয়েকটা কাজ করতে পারি।

const sum = (x,y) => {
    const add = x + y;
    const diff = x - y;
    const total = add * diff;
    return total;
};

const totalResult = sum(5,3);
console.log(totalResult);