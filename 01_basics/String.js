const name = "John Doe";
const age = 30;
console.log(name + " is " + age + " years old."); // Output: John Doe is 30 years old. that not a good practice.
// Template literals (ES6) - better way to concatenate strings
console.log(`${name} is ${age} years old.`); // Output: John Doe is 30 years old.
// String methods
const message = "Hello, World!";
console.log(message.length); // Output: 13
console.log(message.toUpperCase()); // Output: HELLO, WORLD!
console.log(message.toLowerCase()); // Output: hello, world!
console.log(message.includes("World")); // Output: true
console.log(message.startsWith("Hello")); // Output: true
console.log(message.endsWith("!")); // Output: true
console.log(message.indexOf("o")); // Output: 4
console.log(message.slice(0, 5)); // Output: Hello
console.log(message.replace("World", "JavaScript")); // Output: Hello, JavaScript!  
const strobj = new String("Hello");
console.log(strobj);
console.log(strobj.valueOf()); // Output: Hello
console.log(typeof strobj); // Output: object
console.log(strobj[0]); // Output: H
//console.log(message[0]); 
// no output becouse message is a primitive string, not an object.objects have properties and methods, while primitive values do not. However, JavaScript automatically wraps primitive strings in String objects when you try to access properties or methods on them, which is why you can use string methods on primitive strings. This is called "autoboxing". So when you do message.length, JavaScript creates a temporary String object from the primitive string "Hello, World!" and then accesses the length property on that object. After the operation is complete, the temporary object is discarded.
// but the string that was made as an object use key value pair . Each character in the string is stored as a property of the String object, with the index of the character as the key and the character itself as the value. For example, in the string "Hello", the character 'H' is stored at index 0, 'e' at index 1, 'l' at index 2, 'l' at index 3, and 'o' at index 4. So when you access strobj[0], it returns 'H', which is the value of the property with key '0' in the String object.
// we can use different methods or apply different prototypes to the string object, but we cannot do that with primitive strings. For example, we can add a custom method to the String prototype like this:
console.log(strobj.reverse = function() { 
    return this.split('').reverse().join('');
});
console.log(strobj.reverse()); // Output: olleH
console.log(strobj.split('').reverse().join('')); // Output: olleH
