//Array:-Array is a cantaner That is store data in [].
const myArr=[1,2,3,4,5,6];
// console.log(myArr);
// console.log(myArr[2]);
// console.log(myArr.length);

//Array Methods

// add element in the last index
// myArr.push(7)
// console.log(myArr);

//remove element in the last index
// myArr.pop()
// console.log(myArr);

// add element in the start index
// myArr.unshift(9)

//remove element in the start index
// myArr.shift()
// console.log(myArr);

//join():-biend and convert String
const newArr=myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


//slice, splice
//slice range ko nahi late.
console.log("A",myArr);

const myn1=myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);
//splice range to late hai but orginal array se us element ko bhe remove kar deta hai.
const myn2=myArr.splice(1,3)
console.log("c",myArr);
console.log(myn2);










