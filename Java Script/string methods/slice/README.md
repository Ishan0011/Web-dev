# slice() Method in JavaScript

The `slice()` method is used to return a part of the original string as a new string[cite: 1].

It extracts portions of text based on specified starting and ending positions[cite: 1].

---

## Key slice() Usages

- **Start Index Only** `str.slice(5)`  
  Extracts from the given index to the end of the string (e.g., returns `"Coding"`)[cite: 1].

- **Start and End Indices** `str.slice(1, 4)`  
  Extracts a substring from the start index up to, but not including, the end index (e.g., returns `"love"`)[cite: 1].

- **Negative Indexing** `str.slice(-num)`  
  Counts backward from the end of the string, which is evaluated as `str.slice(length - num)`[cite: 1].

---

`slice()` allows you to efficiently handle and extract precise substrings from strings[cite: 1].