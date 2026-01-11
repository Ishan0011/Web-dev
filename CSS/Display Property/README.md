# Display Property in CSS

The `display` property defines how an element is displayed on a webpage.

It controls the layout behavior of elements and how they interact with surrounding elements.

---

## Common Display Values

- **block**  
  Elements start on a new line and take up the full width available.

- **inline**  
  Elements do not start on a new line and only take up as much width as needed.

- **inline-block**  
  Elements behave like inline elements but allow width and height to be set.

- **none**  
  Removes the element from the layout and hides it completely.

---
# Block vs Inline Elements (Conclusion)

## Block Elements

- Always start on a new line.
- Take up the full available width of the container.
- `width` and `height` CSS properties effect the space.
- Horizontal and vertical margins work as expected.
- Padding works on all sides without issues.

---

## Inline Elements

- Do not start on a new line.
- Take up only as much width as required by the content.
- `width` and `height` CSS properties are uneffective.
- Margins work only horizontally, not vertically.
- Padding works on all sides, but top and bottom padding may overlap other elements buts elemnt in same line are sifted.

---

