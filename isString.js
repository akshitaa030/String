// checks whether the input is a string
function isString(str){
    return typeof str==="string" || str instanceof String;
}

console.log(isString("abc"));
console.log(isString(222));
console.log(isString(null));
console.log(isString(undefined));
console.log(isString(NaN));
console.log(isString("0"));
