//Destructuring
let array = [1, 2, 3, 4, 5, 6]
let [a, b, c, ...rest] = array;
console.log(a, b, c, rest)

let array1 = [2, 4, 6, 8, 10, 12,14]
let [x,,, ...rest1] = array1
console.log(a, rest1)

//spread operartor-- converting array into object
let arr = [1, 2, 3, 4]
let object = {...arr}
console.log(object)