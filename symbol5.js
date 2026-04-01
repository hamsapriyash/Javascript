/*Imagine you are building a library system. You have a "Book" object, and you want to add a unique Internal ID to it that won't accidentally get overwritten by someone else adding a property called id.*/
// 1. Create two Symbols with the exact same description
const internalID = Symbol("id");
const publicID = Symbol("id");

// 2. Create an object
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald"
};

// 3. Assign the symbols as keys
book[internalID] = "SECRET_123";
book[publicID] = "PUBLIC_999";

// 4. Check the results
console.log(book[internalID]); // Result: "SECRET_123"
console.log(book[publicID]);   // Result: "PUBLIC_999"

// 5. THE CLARITY MOMENT: Are they the same?
console.log(internalID === publicID); // Result: false