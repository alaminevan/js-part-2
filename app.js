// control statement
// 1.conditional control statement
// 2. loop control statement
let num1 = 100;
let num2 = 50;
let num3 = 10;
// let num1 = prompt("enter first number : ");
// num1 = parseInt(num1);
// let num2 = prompt("enter second number : ");
// num1 = parseInt(num2);
// let num3 = prompt("enter enter third  number : ");
// num1 = parseInt(num3);

if (num1 > num2) {
  console.log(" largest number 1 ");
} else if (num1 > num3) {
  console.log(" largest number 1");
} else if (num2 > num1) {
  console.log("Number 2 is large");
} else if (num2 > num3) {
  console.log("number 2 is large");
} else {
  console.log("number 3 is large");
}
console.log(num1, num2, num3);
if (num1 > num2 && num1 > num3) {
  console.log("largest number 1");
}

// array
let name = "alamin";
let friends = ["jony", "rahim", "karim"];
console.log(friends);
const books = ["comedy", "love", "philosophy"];
console.log(books);
console.log(typeof books);
console.log(Array.isArray(books));
const birthyear = 2003;
const alamin = ["alamin", 2024 - birthyear];
console.log(2024 - birthyear);
const ages = [12, 24, 34, 45, 50];
console.log(ages[ages.length - 1]);
console.log(ages.indexOf(45));

const fruits = ["papaya", "mango", "banana", "onion"];
fruits[2] = "avacado";
fruits.push("potato");
fruits.pop();
fruits.pop();
fruits.pop();
console.log(fruits);
const numbers = [100, 20, 39, 39, 46, 65, 88];
console.log(numbers);
numbers.unshift(230);
console.log(numbers);
numbers.shift();
console.log(numbers);
