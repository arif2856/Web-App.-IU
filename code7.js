const parser = new DOMParser();
const xmlString = <books><book id="1">JavaScript Basics</book></books>;
const xmlDoc = parser.parseFromString(xmlString, "application/xml");

// Accessing the book element
const book = xmlDoc.querySelector("book");
console.log(book.textContent); // Output: JavaScript Basics

// Modifying the book element
book.textContent = "Advanced JavaScript";
console.log(book.textContent); // Output: Advanced JavaScript
