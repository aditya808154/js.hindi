// reduce()
const myNum=[1,2,3]


// const total=myNum.reduce(function(a,c){

//     console.log(`acc: ${a} and currval ${c}`);
//     return a+c
    
// },0)


// const total=myNum.reduce((a,c)=>(a+c),0)
// console.log(total);


const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Self-Help",
      price: 350,
      year: 2018
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Fiction",
      price: 299,
      year: 1988
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      genre: "Finance",
      price: 399,
      year: 1997
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      genre: "Productivity",
      price: 420,
      year: 2016
    },
    {
      title: "Ikigai",
      author: "Francesc Miralles",
      genre: "Philosophy",
      price: 280,
      year: 2017
    }
]

const total=books.reduce((a,item)=>a+item.price,0)
console.log(total);







