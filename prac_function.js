function calculatesquare(num){
let value= num * num;
return value;}
//calculatesquare(5);
//console.log("Square of 5 is: " + calculatesquare(5));
//result = calculatesquare(10);
//console.log("Square of 10 is: " + result);
console.log("This is a test file for the fortest.js path.");
function sum(a, b,c) {
    return a + b+ c;
}
sumResult = sum(5,10,15);
console.log("Sum of 5, 10, and 15 is: " + sumResult);
//variable parameters in a function
function addNumbers(){
    let result= 0;
    for (let i= 0; i < arguments.length; i++) {
        result=result+ arguments[i];
    }
    return result;
}
addNumbersResult = addNumbers(1, 2, 3, 4, 5);
console.log("Sum of 1, 2, 3, 4, and 5 is: " + addNumbersResult);