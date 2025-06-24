//callback function
// let f1 = () => {
//   console.log("This is function f1");
// };
// let main = (x) => {
//   x();
// };
// main(f1);

// let main = (x) => {
//   x();
// };
// main(() => {
//   console.log("Hello World");
// });

function f1(x) {
    console.log(x);
  }
  const main = () => f1(5);
  main();
  
  