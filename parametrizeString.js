// Write a JavaScript function to parameterize a string.

// Test Data :

// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"


function parametrizeString(input){
    input=input.trim().toLowerCase().replaceAll(" ","-");
    return input;
}

console.log(parametrizeString("Robin Singh from USA."));
console.log(parametrizeString("  Hello World From Akshita  "));