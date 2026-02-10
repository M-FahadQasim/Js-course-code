"use strict";//state that we are using latest js
//alert(3+3)
/* couldn't use in node like in brower or in html
bind file*/
// Also code readablity and future poof in is piority
console.log(3
    +3 //could be written but not a good practice
);
console.log("Fahad");

let name = "Fahad"
let age = 5
let login = true
//NUMBER limit in 2^51 or 53
// BigInt 
// string =>""
// boolean => True/False
// null => stand alone values
// undefined => no defined
//symbol => unique
//object 
console.log(typeof age); //number
console.log(typeof undefined); //undefined
console.log(typeof null); //object

// how to use symbols
let sym1 = Symbol("sym1")
let sym2 = Symbol("sym1")
console.log(sym1 === sym2); // false because symbols are unique and they are not equal even if they have the same description.
console.log(sym1 == sym2);// false because symbols are unique and they are not equal even if they have the same description.
let sym3 = Symbol("sym2")// it is not the same as sym2 and sym3 because it has a different description but it is still a unique symbol and it is not equal to sym1 and sym2.

let sym4 = Symbol.for("sym1")
let sym5 = Symbol.for("sym1")
console.log(sym4 === sym5); // true because Symbol.for() creates a symbol in the global symbol registry and it returns the same symbol for the same key, so sym4 and sym5 are the same symbol because they have the same key "sym1".
console.log(sym4 == sym5);// true because Symbol.for() creates a symbol in the global symbol registry and it returns the same symbol for the same key, so sym4 and sym5 are the same symbol because they have the same key "sym1".


//NOTE: One more important thing to note is that using long name to declare variables that makes sense instead of using short name or single letter like x, y, z, a, b, c etc.

//Array
let arr = [1, 2, 3, 4, 5]
console.log(arr);
console.log(typeof arr); // object because arrays are objects in JavaScript and they are a special type of object that has some additional properties and methods to work with arrays. but they are still objects and they are not a primitive datatype. so the typeof operator returns "object" for arrays in JavaScript. to check if a variable is an array you can use Array.isArray() method or you can use instanceof operator to check if the variable is an instance of the Array constructor function.
// example of using Array.isArray() method
console.log(Array.isArray(arr));    // true because arr is an array
// example of using instanceof operator
console.log(arr instanceof Array); // true because arr is an instance of the Array constructor function 



//Objects are a collection of key-value pairs and they are used to store data in a structured way. they are also used to create complex data structures and to represent real-world entities in code. objects can have properties and methods and they can be created using object literals, constructor functions, or classes in JavaScript. objects are mutable and they are compared by reference, which means that two objects are considered equal if they reference the same object in memory, not if they have the same properties and values.
let obj = {
    name: "Fahad",
    age: 5,
    login: true
}//EXAMPLE of an object literal in JavaScript
console.log(obj);
console.log(typeof obj); // object
//EXAMPLE of using constructor function to create an object in JavaScript
function Person(name, age, login) {
    this.name = name;
    this.age = age;
    this.login = login;
}
let person1 = new Person("Fahad", 5, true);
console.log(person1);
console.log(typeof person1); // object
//EXAMPLE of using class to create an object in JavaScript
class PersonClass {
    constructor(name, age, login) {
        this.name = name;
        this.age = age;
        this.login = login;
    }
}
let person2 = new PersonClass("Fahad", 5, true);
console.log(person2);
console.log(typeof person2); // object  
//NOTE: In JavaScript, functions are also objects and they can have properties and methods just like any other object. functions are first-class citizens in JavaScript, which means that they can be assigned to variables, passed as arguments to other functions, and returned from functions. functions can be created using function declarations, function expressions, or arrow functions in JavaScript. functions are also mutable and they are compared by reference, which means that two functions are considered equal if they reference the same function in memory, not if they have the same code or behavior.
function greet() {
    console.log("Hello, World!");
} 
console.log(greet);//EXAMPLE of using function declaration to create a function in JavaScript
console.log(typeof greet); // function



//EXAMPLE of using function expression to create a function in JavaScript
let greet2 = function() {
    console.log("Hello, World!");
}  
console.log(greet2);
console.log(typeof greet2); // function



//EXAMPLE of using arrow function to create a function in JavaScript
let greet3 = () => {
    console.log("Hello, World!");
}
console.log(greet3);
console.log(typeof greet3); // function