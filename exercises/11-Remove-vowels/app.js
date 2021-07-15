const rapid = (string) => {
    let vowels = ['a','e','i','o','u'] ;
    let newString = ""
    for(let position in string){
        if (vowels.includes(string[position])){
            continue
        } else{
            newString+=string[position]
        }
        
    }
    return newString.toUpperCase()
    
}
// From this line up Do not change code below
let str = "John";
console.log(rapid(str));

