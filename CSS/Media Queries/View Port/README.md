# min-width and max-width in Media Queries

CSS Media Queries use `min-width` and `max-width` to apply styles based on the viewport width.

They are commonly used to build responsive layouts.

---

## min-width

The `min-width` media query applies styles when the viewport width is **greater than or equal to** the specified value.

It is commonly used in **mobile-first design**.

Example behavior:
Styles apply when the screen width is 400px or larger.

---

## max-width

The `max-width` media query applies styles when the viewport width is **less than or equal to** the specified value.

It is commonly used to target **smaller screens**.

Example behavior:
Styles apply when the screen width is 400px or smaller.

---

## Key Difference

- **min-width** → styles apply from a certain size and above  
- **max-width** → styles apply up to a certain size  

Both are based on the **viewport width**, not device width.

---

# Media Query Range (min-width and max-width)

CSS Media Queries can be combined using logical operators like `and` to target a **specific range of viewport widths**.

This is useful when styles should apply **only between two screen sizes**.

## How It Works `@media (min-width: 300px) and (max-width: 400px)`

- `min-width` sets the **lower limit**
- `max-width` sets the **upper limit**
- `and` ensures **both conditions must be true**

