// const coding=["js","ruby","java","pyothn","cpp"]
// const value=coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })
// console.log(value);// undefined


//filter()
const num=[1,2,3,4,5,6,7,8,9,10]
// let nums=num.filter((num)=>num>4);
// console.log(nums);

//return [] array
// const nums=num.filter((n)=>{
//     n>4
// })
// console.log(nums);//[]


//{} return keyword use karte hain
// const nums=num.filter((n)=>{
//     return n>4
// })
// console.log(nums);//[ 5, 6, 7, 8, 9, 10 ]

// const newNum=[]
// num.forEach((nums)=>{
//     if(nums>4){
//         newNum.push(nums)
//     }
// })
// console.log(newNum);

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
    },
    {
      title: "Zero to One",
      author: "Peter Thiel",
      genre: "Startup",
      price: 370,
      year: 2014
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      genre: "History",
      price: 450,
      year: 2011
    },
    {
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      genre: "Self-Help",
      price: 330,
      year: 2016
    },
    {
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      genre: "Motivational",
      price: 310,
      year: 1937
    },
    {
      title: "Can't Hurt Me",
      author: "David Goggins",
      genre: "Autobiography",
      price: 499,
      year: 2018
    }
  ];
  
// const user=books.filter((bk)=>bk.year===2018)
const user=books.filter((bk)=>bk.year>=2000)


console.log(user);
