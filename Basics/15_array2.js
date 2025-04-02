const marval_heros=["thor","Ironman","Spiderman"]
const dc_heros=["superman","flash","batman"]
// marval_heros.push(dc_heros);

let allHero=marval_heros.concat(dc_heros)
// console.log(allHero);

let newhero=[...marval_heros,...dc_heros]
// console.log(newhero);

const arr=[1,2,[3,4],[5,6,[7,8]]]
// const arrAdd=arr.flat(Infinity);
// console.log(arrAdd);

// console.log(Array.isArray("Aditya"));
// console.log(Array.from("Adiya"))

console.log(Array.from({name:"Aditya"}))//impotent:-[]

let a=12
let b=5
let c=52
console.log(Array.of(a,b,c));


