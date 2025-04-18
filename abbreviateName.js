var abbrev_name=function(input){
    let split_name=input.trim().split(" ");
    if(split_name.length>1){
        return (split_name[0]+" "+split_name[1].charAt(0)+".");
    }
    return split_name[0];
}
console.log(abbrev_name("Robin Singh"));
console.log(abbrev_name("Akshita Sharma"));
console.log(abbrev_name("Robin Singh Saluja"));