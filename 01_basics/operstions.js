let v=10
let x=-v
console.log(x);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(2%2);
console.log(2%3);
console.log(2%4);
console.log(4%3);
let str1="Hello"
let str2="World"
console.log(str1+str2);
console.log(str1+" "+str2);
console.log("1"+2);
console.log(1+"2");
console.log("1"+2+3);
console.log(1+"2"+3);
console.log(1+2+"3");
console.log(1+2-3/1%2); //don't forget the order of operations and main is to use parentheses to make it clear code without parentheses is hard to read and understand .Code is read more often than it is written so make it easy to read and understand for others and for yourself in the future. otherwise it's considered a trash in Big software house and you will not be hired if you write code like this. 
console.log((1+2-3)*5/1%2);
console.log("5"+5*2); //the multiplication operator has higher precedence than the addition operator so it will be evaluated first and then the result will be concatenated with the string "5" to produce the final result "510".
console.log(+ true);// that all are considered a very bad paractise.
console.log(true +" ");
console.log(+"");
console.log(+"Hello");//operating presidence is good to study but only for exams but no for real life work or production


let num1,num2,num3
num1=num2=num3=10
console.log(num1,num2,num3); // not a good practice to write code like this

let counter=0

++counter
console.log(counter); // study postfix and prefix increment and decrement operators.
counter++
console.log(counter);





