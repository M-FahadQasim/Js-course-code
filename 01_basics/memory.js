// There are two types of memory in JavaScript: Stack and Heap
// Stack memory is used to store primitive data types and function calls. It is a last-in-first-out (LIFO) data structure, which means that the last item added to the stack is the first one to be removed. When a function is called, a new stack frame is created for that function, and when the function returns, the stack frame is removed from the stack. Stack memory is faster than heap memory because it is organized in a way that allows for quick access and deallocation of memory.

// Primitive data types include numbers, strings, booleans, null, and undefined. When a primitive value is assigned to a variable, it is stored directly in stack memory. For example:

let x = 10;
let y = "Hello";
let z = true;
let a = null;
let b = undefined;
let c = Symbol("symbol");
let d = 123n; // BigInt
// // In this example, the value 10 is stored in stack memory for the variable x, and the string "Hello" is stored in stack memory for the variable y. When we access these variables, we can quickly retrieve their values from the stack.
//example Functions store in stack memory:
function add(a, b) {
  return a + b;
}  
// In this example, the function add is stored in stack memory, and when it is called, a new stack frame is created for that function. The parameters a and b are also stored in stack memory, and when the function returns, the stack frame is removed from the stack. When we access the variables x, y, z, a, b, c, and d, we can quickly retrieve their values from the stack.

//example Functions store in variable in stack memory:
 let addFunction = (a, b) => a + b 
 // In this example, the arrow function (a, b) => a + b is stored in stack memory for the variable addFunction. When we call addFunction(2, 3), a new stack frame is created for that function call, and the parameters a and b are stored in stack memory. When the function returns, the stack frame is removed from the stack, and we can retrieve the result of the function call from the stack memory.



// On the other hand, when we create an object or an array, it is stored in heap memory. For example:

let obj = { name: "Alice", age: 30 };
let arr = [1, 2, 3];

// In this example, the object { name: "Alice", age: 30 } is stored in heap memory, and a reference to that memory location is stored in stack memory for the variable obj. Similarly, the array [1, 2, 3] is stored in heap memory, and a reference to that memory location is stored in stack memory for the variable arr. When we access these variables, we need to follow the reference from stack memory to heap memory to retrieve the actual data.

// The main difference between stack and heap memory is how they are organized and accessed. Stack memory is organized in a linear fashion, while heap memory is organized in a more complex way. Stack memory is faster than heap memory because it allows for quick access and deallocation of memory, while heap memory requires more complex algorithms for memory management and access. Understanding the differences between stack and heap memory is important for writing efficient and optimized code in JavaScript.


// Heap memory is used to store reference data types, such as objects and arrays. It is a more complex data structure than the stack, and it allows for dynamic memory allocation. When an object or array is created, it is stored in heap memory, and a reference to that memory location is stored in stack memory. When the reference is no longer needed, the memory in the heap can be deallocated by the garbage collector. Heap memory is slower than stack memory because it requires more complex algorithms for memory management and access.

//Example of heap memory:

let person = { name: "Bob", age: 25 };
let numbers = [1, 2, 3, 4, 5 ];
let anotherPerson = person; // anotherPerson is a reference to the same object in heap memory
let anotherNumbers = numbers; // anotherNumbers is a reference to the same array in heap memory
let newPerson = { name: "Charlie", age: 35 }; // newPerson is a new object in heap memory


// In this example, the object { name: "Bob", age: 25 } is stored in heap memory, and a reference to that memory location is stored in stack memory for the variable person. Similarly, the array [1, 2, 3, 4, 5] is stored in heap memory, and a reference to that memory location is stored in stack memory for the variable numbers. When we access these variables, we need to follow the reference from stack memory to heap memory to retrieve the actual data.

// In summary, stack memory is used for primitive data types and function calls, while heap memory is used for reference data types. Stack memory is faster than heap memory because it is organized in a way that allows for quick access and deallocation of memory, while heap memory requires more complex algorithms for memory management and access. Understanding the differences between stack and heap memory is important for writing efficient and optimized code in JavaScript.

// In JavaScript, memory management is handled automatically by the garbage collector. The garbage collector is responsible for freeing up memory that is no longer being used by the program. When an object or array is created in heap memory, it is allocated a certain amount of memory based on its size. If the program creates many objects or arrays, it can lead to memory leaks if they are not properly deallocated. A memory leak occurs when a program continues to allocate memory without releasing it, which can eventually lead to performance issues and crashes. To avoid memory leaks, it is important to ensure that any references to objects or arrays that are no longer needed are set to null or undefined, allowing the garbage collector to free up the memory they occupy.
