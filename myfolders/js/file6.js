//arrow function
// function greet() {
//   console.log("This is Regular Function");
// }
// greet()
// const greet = 10
//greet() - error because hoisting not applied
// const greet = () => {
//   console.log("This is Arrow Function");
// };
// greet()

// const add = (a,b) => {
//   return a + b;
// };
// const result = add(4, 5);
// console.log(result)

const add = (...args) => {
    console.log(args)
  };
  add(4, 5, 6, 7, 4, 3);