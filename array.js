let fruits = ["Mango", "Jackfruits", "Banana", "Apple", "Orange", "Lichi"];

// Array find() method
// let result = fruits.find((f) => f === "Orange" );


// Array findIndex() method 

// let result = fruits.findIndex((f)=> f === "Orange")


// Filter method()

// let result = fruits.filter((f)=> f === "Orange" || f === "Jackfruits");

// Slice() method

// let result = fruits.slice(4,6)


// Splice() method

let result = fruits.splice(2, 3, "Fruit1", "Fruit2", "Fruit3");
console.log(result);
console.log(fruits);