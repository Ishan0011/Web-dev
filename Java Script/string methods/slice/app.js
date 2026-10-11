let mes = "hello world";
console.log(mes.slice(0, 4)); // Output: "hell" from index 0 to 4 (not including 4)

console.log(mes.slice(6)); // Output: "world" from index 6 to the end of the string

console.log(mes.slice(-5)); // Output: "world" from the last 5 characters of the string

console.log(mes.slice(7, mes.length)); // Output: "orld" from index 7 to the end of the string 