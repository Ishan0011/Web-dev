# Grid Template in CSS

Grid templates are used to define the structure of a CSS grid by specifying rows and columns.

They control the size of grid tracks and help create a well-defined layout.

---

## grid-template-rows

The `grid-template-rows` property defines the number and size of rows in a grid container.

It sets the height of each row and creates horizontal grid lines.

---

## grid-template-columns

The `grid-template-columns` property defines the number and size of columns in a grid container.

It sets the width of each column and creates vertical grid lines.

---
---

# Grid Template with repeat() in CSS

The `repeat()` function is used in CSS Grid to divide available space efficiently by repeating grid tracks.

It helps reduce repetitive code and makes grid layouts cleaner and more readable.

---

## repeat() Function

The `repeat()` function takes two values:
- **count** – Number of times the track should repeat
- **size** – Size of each track

---

## grid-template-rows

The `grid-template-rows` property defines the number and size of rows in a grid.

Using repeat:
grid-template-rows: repeat(count, 1fr);

Example:
grid-template-rows: repeat(2, 1fr);

This is equivalent to:
grid-template-rows: 1fr 1fr;

---

## grid-template-columns

The `grid-template-columns` property defines the number and size of columns in a grid.

Using repeat:
grid-template-columns: repeat(count, 1fr);

---

The `repeat()` function is commonly used with the `fr` unit to divide space equally in grid layouts.

