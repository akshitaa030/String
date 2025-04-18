/**
Write a JavaScript function that hides email addresses to prevent unauthorized access.

Test Data :

console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"


 */

function hideEmail(input){
    let avg,splitted, part1,part2;

    // spllit the string into array using @ as delimiter
    splitted=input.split("@");
    
    // store index0 in part 1 & index1 in part2
    part1=splitted[0];
    part2=splitted[1];

    // now take only half of part1 in the final result so that we can maintain privacy 
    part1=part1.substring(0,(part1.length/2));

    return part1+"...@"+part2;
}

console.log(hideEmail("robin_singh@example.com"));
console.log(hideEmail("akshitasharma@example.com"));