// The OR operator || uses the right value if left is falsy,
// while the nullish coalescing operator ?? uses the right value if left is null or undefined.

// These operators are often used to provide a default value if the first one is missing.
// But the OR operator || can be problematic if your left value might contain "" or 0 or false 
// (because these are falsy values):

console.log("============Nullish Coalescing Operator (??)=============")
// Nullish Coalescing Operator (??)
console.log(12 ?? "not found") // 12
console.log(0  ?? "not found") // 0

console.log("jane" ?? "not found") // "jane"
console.log(""     ?? "not found") // ""

console.log(true  ?? "not found") // true
console.log(false ?? "not found") // false

console.log(undefined ?? "not found") // "not found"
console.log(null      ?? "not found") // "not found"

console.log("============Logical OR operator (||)=============")
// Logical OR operator (||)
console.log(12 || "not found") // 12
console.log(0  || "not found") // "not found"

console.log("jane" || "not found") // "jane"
console.log(""     || "not found") // "not found"

console.log(true  || "not found") // true
console.log(false || "not found") // "not found"

console.log(undefined || "not found") // "not found"
console.log(null      || "not found") // "not found"