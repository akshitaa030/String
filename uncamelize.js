// Write a JavaScript function to uncommelize a string.

// Test Data :

// console.log(uncamelize('helloWorld'));
// console.log(uncamelize('helloWorld','-'));
// console.log(uncamelize('helloWorld','_'));
// "hello world"
// "hello-world"
// "hello_world"

function uncamelize(input,chr){
  let str= input.split('')
  .map((ch)=>{
    if(isUpperCase(ch)){
        ch=chr+ch.toLowerCase();
    }
    return ch;
   })
   .join('');
   return str;
}

function isUpperCase(ch){
    return ch===ch.toUpperCase()&& ch !== ch.toLowerCase();
}

console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));
console.log(uncamelize("", "-")); 
// ""

console.log(uncamelize("alreadylower", "-")); 
// "alreadylower"

console.log(uncamelize("ALLCAPS", "-")); 
// "-a-l-l-c-a-p-s"

console.log(uncamelize("helloW", "-")); 
// "hello-w"

console.log(uncamelize("HelloWorld", "-")); 
// "-hello-world"

console.log(uncamelize("helloWorldX", "-")); 
// "hello-world-x"

console.log(uncamelize("getHTTPResponseCode", "-")); 
// "get-h-t-t-p-response-code"

console.log(uncamelize("camelCaseText", "_")); 
// "camel_case_text"

console.log(uncamelize("test2Case3Value", "-")); 
// "test2-case3-value"

console.log(uncamelize("getURL_withExtra$", "-")); 
// "get-u-r-l_with-extra$"

