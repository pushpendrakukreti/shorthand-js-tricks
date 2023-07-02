// Nullish Coalescing Assignment (??=) Operator
// Syntax: x ??= y  ---> [Means : x ?? (x = y)]
console.log("======= Nullish Coalescing Assignment (??=) Operator =======")

let x = 12;
let y = null;
let z = 13;

// The value of x will become unchanged because x is not nullish.
x ??= z;

// The value of y will be changed because y is nullish.
y ??= z;
console.log(x)  // 12
console.log(y)  // 13


let objX = {
    name: "Ram"
}

// The value of name will remain unchanged because x.name is not nullish
objX.name ??= "Shyam";

// There is no any property named age in object x.
// So the value of x.age will be undefined and undefined means nullish. that's why the value of age will be assigned.
objX.age ??= 18;

console.log(objX.name)  // Ram
console.log(objX.age)   // 18


// Logical OR assignment (||=) Operator
// Syntax: x ||= y  ---> [Means : x || (x = y)]
console.log("======= Nullish Coalescing Assignment (??=) Operator =======")
let objY = {
    firstName: "Ram",
    lastName: "",
};

console.log(objY.firstName);

// Changing the value using logical
// OR assignment operator
objY.firstName ||= "Shyam";

// But value does not change because
// name.firstName is truthy
console.log(objY.firstName);

console.log(objY.lastName);

// Changing the value using logical
// OR assignment operator
objY.lastName ||= "Kumar";

// The value changes because name.lastName is falsy
console.log(objY.lastName);