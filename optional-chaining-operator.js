/*
The optional chaining operator ?. is a feature introduced in 
JavaScript (ECMAScript 2020) that allows you to safely access properties and 
methods of an object even if one or more intermediate properties are null or undefined.
It helps to simplify and shorten the code when dealing with nested object structures.
*/

// Basic Usage
console.log("----- Basic Usage -----");
const person = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      zipcode: '10001',
    },
  };
  
  // Accessing nested properties using optional chaining
  const cityName = person.address?.city;
  console.log(cityName); // Output: 'New York'
  
  const country = person.address?.country;
  console.log(country); // Output: undefined

  console.log("\n----- Method Invocation -----");
  //Method Invocation
  const user = {
    name: 'Alice',
    greet: function () {
      return `Hello, ${this.name}!`;
    },
  };
  
  // Accessing a method using optional chaining
  const greeting = user?.greet?.(); // Equivalent to user.greet?.()
  console.log(greeting); // Output: 'Hello, Alice!'
  
  const missingUser = null;
  const missingGreeting = missingUser?.greet?.();
  console.log(missingGreeting); // Output: undefined

  console.log("\n----- Array Access -----");
  //Array access
  const data = {
    records: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ],
  };
  
  // Accessing elements in an array using optional chaining
  const itemName = data.records?.[0]?.name;
  console.log(itemName); // Output: 'Item 1'
  
  const missingRecords = null;
  const missingItemName = missingRecords?.[0]?.name;
  console.log(missingItemName); // Output: undefined

  console.log("\n-----------------------");