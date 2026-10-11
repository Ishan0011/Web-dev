let arr = ["apple", 1 ,2, 3, "banana", "orange"];
let emptyArr = [];
console.log("array length: " + arr.length + "; array: " + arr); // Output: 6, the length of the array is 6
console.log("empty array length: " + emptyArr.length); // Output: 0, the length of the empty array is 0

console.log("First element: " + arr[0]); // Output: "apple", the first element of the array 
console.log("Last element: " + arr[arr.length - 1]); // Output: "orange", the last element of the array

console.log(arr[4][2]); // Output: "n", the third character of the fifth element of the array (which is "banana")