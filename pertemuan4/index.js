//variabel
// let firstName ;
// firstName = "John Doe";  //String
// let age = 30; //Number
// age = "tiga puluh tahun"; 
// let isMarried = true; // Boolean

// console.log(firstName);
// console.log(age);
// console.log(isMarried);
// console.log(" Hallo nama saya " + firstName + " umur saya " + age + " saya belum menikah " + isMarried);
// const gender = "male"; 



//Operator
// let x = 20;
// let y = "20";

// console.log(x == y);
// console.log(x === y);



//ternary operator
// let age = 15;
// let result = age >= 17 ? "bisa buat KTP" : "belum bisa buat KTP";

// console.log(result);


//Function
// function greetings (){
//     console.log("Hello World");
// }
// const greetings2 = function () {
//     console.log("Hello World 2");
// }

// greetings();
// greetings2();






//Variabel
// let firstName;
// firstName = "John Doe"; //String
// let age = 30; //Number
// age = "tiga puluh tahun";
// let isMarried = true; //Boolean
// let grade = 90.6;

// console.log(firstName);
// console.log(age);
// console.log(isMarried);
// console.log("Hallo nama saya " + firstName + " umur saya " + age + " tahun");

// const gender = "male";

//Operators

// let x = 10;
// let y = 20;

// x++;
// console.log(x); // 11
// x = x + 2;
// console.log(x); // 13
// x += 2;
// console.log(x); // 15

// x = 20;
// console.log(x == y); //true

// let x = 20;
// let y = "20";

// console.log(x == y); //true
// console.log(x === y); //false

//ternary operator
// let age = 17;
// let result = age >= 17 ? "Bisa buat KTP" : "Belum bisa buat KTP";
// console.log(result);

// console.log(greetings("John Doe", 30)); //argument

// //Function
// function greetings(fullName, age) {
//   //parameter
//   return "My name is " + fullName + ". I'm " + age + " years old";
// }

// const greetings2 = function () {
//   console.log("hello world 2");
// };

// greetings2();

let firstName = "John Doe"; //Global

function greetings() {
  let age = 30; //Local Function
  console.log(firstName);
  if (age === 30) {
    let isEligible = true; //Local Blok
  }
  console.log(isEligible);
}

greetings();