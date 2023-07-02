// -------------------------------------- //

let age = 22;
let keyS = "salary";
const key1 = "ageIsMoreThan20"
const key2 = "ageIsMoreThan10"

const obj = {
    name: "Pushpendra",
    [age > 20 ? key1 : key2]: true,
    [keyS]: 2000
}

console.log("Log object - ", obj);

// -------------------------------------- //

const prefix = 'prop';
const obj1 = {
    [`${prefix}1`]: 'value1',
    [`${prefix}2`]: 'value2',
};

console.log("Log object 1 - ", obj1);

// -------------------------------------- //

const obj2 = { name: 'John', age: 30 };
const propertyName = 'name';
const { [propertyName]: personName } = obj2; // personName will be 'John'

console.log("Log object 2 - ", personName);