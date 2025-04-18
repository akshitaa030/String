// Write a JavaScript function to extract a specified number of characters from a string.

function extractCharacters(input,k){
    if(k>input.length) return input;
    let result="";
    for(let i=0;i<k;i++){
        let ch=input.charAt(i);
        result+=ch;
    }
    return result;
}

console.log(extractCharacters("Camella",3)); //Cam
console.log(extractCharacters("Camella",10)); //Camella

function truncateChar(input,k){
    return input.substring(0,k);
}

console.log(truncateChar("Camella",3)); //Cam
console.log(truncateChar("Camella",10)); //Camella

/*
str.substring(startIndex, endIndex)

Time Complexity: O(k)
Where k = endIndex - startIndex → because it creates a new string of that length.

Space Complexity: O(k)
Because a new string is created in memory for the extracted portion.

 Notes:
If start > end, JavaScript swaps them automatically.

javascript
Copy
Edit
str.substring(5, 2) === str.substring(2, 5)
Negative values are treated as 0.

It's faster than manually looping and concatenating.
*/