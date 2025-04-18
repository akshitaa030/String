
function StringToArray(str){
 return  str.trim(). split(" ");
}
console.log(StringToArray("Amy funds"));
console.log(StringToArray("Akshi loves to travel across the world"));
// console.log(StringToArray(54)); gives error
console.log(StringToArray("54 33 22"));


/**
 * split will create an array no matter what!
 * The split() method divides a string into an array of substrings based on a specified separator.
 * string.split(separator, limit);
 * let str = "Akshita Sharma";

// split by space
let words = str.split(" ");
console.log(words); // ["Akshita", "Sharma"]

// split by each character
let chars = str.split("");
console.log(chars); // ["A", "k", "s", "h", "i", "t", "a", " ", "S", "h", "a", "r", "m", "a"]

// split by a specific letter
let parts = str.split("a");
console.log(parts); // ["Akshit", " Sh", "rm", ""]

// split with a limit
let limited = str.split(" ", 1);
console.log(limited); // ["Akshita"]


 Time & Space Complexity:
Let n be the length of the string and k the number of splits.

Time Complexity: O(n) → You scan the whole string once.

Space Complexity: O(k) → Depends on how many substrings you create.

"".split(",") // [""] — returns array with one empty string

 */