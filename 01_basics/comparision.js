console.log(1<2); //true
console.log(1>2); //false
console.log(1<=2); //true
console.log(1>=2); //false
console.log(1==1); //true
console.log(1==2); //false
console.log(1!=1); //false
console.log(1!=2); //true
console.log(1==="1"); //false because === is strict equality operator and it checks for both value and type so 1 is a number and "1" is a string so they are not equal.
console.log(1!=="1"); //true because !== is strict inequality operator and it checks for both value and type so 1 is a number and "1" is a string so they are not equal.
// In JavaScript, the comparison of null with numbers can yield unexpected results due to type coercion. When you compare null with a number, JavaScript converts null to 0 before performing the comparison. 

//null means no value or empty value and it is a primitive datatype and it is falsy value but it is not equal to 0 because null is only equal to undefined and itself. when you compare null with a number, JavaScript converts null to 0 before performing the comparison. This can lead to some unexpected results when comparing null with numbers.
// Therefore:

 null > 0 // false, because 0 is not greater than 0
 null == 0 // false, because null is only equal to undefined and itself
 null >= 0 // true, because 0 is equal to 0 JavaScript converts null to 0 before performing the comparison.
 null < 0 // false, because 0 is not less than 0
 null <= 0 // true, because 0 is equal to 0. JavaScript converts null to 0 before performing the comparison.This behavior can lead to confusion, so it's important to be cautious when comparing null with numbers in JavaScript.
 console.log(undefined == 0);// false, because undefined is only equal to null and itself
 console.log(undefined === 0); // false, because undefined is a different type than number
 console.log(undefined != 0); // true, because undefined is not equal to 0
 console.log(undefined !== 0); // true, because undefined is a different type than number
 console.log(undefined > 0);// false, because undefined is not a number and cannot be compared to a number
 console.log(undefined < 0);// false, because undefined is not a number and cannot be compared to a number
 console.log(undefined >= 0);// false, because undefined is not a number and cannot be compared to a number
 console.log(undefined <= 0);// false, because undefined is not a number and cannot be compared to a number
  //Avoid using null and undefined in comparisons with numbers.because == and comparisons with null and undefined work differently especially with null and 0.

// NOTE: If you want to master the javascript language and become a proficient developer, You Just need to Understand objects and in web/browser events and how they work and how to use them effectively. because everything in javascript is an object and events are the backbone of web development. if you understand these two concepts you will be able to understand the language and its features and you will be able to write better code and you will be able to solve problems more effectively. so focus on these two concepts and you will be able to master the language.


  //there are two datatypes based on how the value is stored in memory and how it is accessed and compared. primitive datatypes they are call by values it is not refered intstead when you cooy it it is copied from orignal instead of referencing it and reference datatypes or non-primitive datatypes it is also known as reference datatype becouse it stores reference (memory adderess) in objects rather than actual value. primitive datatypes are compared by value and reference datatypes are compared by reference. primitive datatypes are immutable and reference datatypes are mutable. primitive datatypes are stored in stack memory and reference datatypes are stored in heap memory.
   //primitive datatypes => number, string, boolean, null, undefined, symbol, bigint
   //reference datatypes => object, array, function
   //primitive datatypes are stored in stack memory and reference datatypes are stored in heap memory.
   //primitive datatypes are immutable and reference datatypes are mutable.
   //primitive datatypes are compared by value and reference datatypes are compared by reference.

   //ALSO javaScript is a dynamically typed language and it is a loosely typed language because you can change the type of a variable at runtime and you don't need to declare the type of a variable when you declare it. this is one of the reasons why JavaScript is a popular language because it is easy to learn and use but it can also lead to some unexpected results if you are not careful with the types of variables and how you use them in your code. so it's important to be aware of the types of variables and how they work in JavaScript to avoid any unexpected results in your code.