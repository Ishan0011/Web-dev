# Flexible Box Layout

It is a one-dimensional layout method for arranging items in rows and columns.

It allows elements inside a container to be aligned, spaced, and distributed efficiently, even when their size is unknown or dynamic.

Flexbox works in one direction at a time, either as a row or a column, making it ideal for aligning items and building simple layouts.

---

# The Flex Model in CSS

The Flexbox layout model is based on two axes that control the alignment and distribution of items inside a flex container.

## Main Axis

The **main axis** is the primary direction in which flex items are laid out.

Its direction is determined by the `flex-direction` property.
- `row` → main axis runs horizontally
- `column` → main axis runs vertically

Properties like `justify-content` work along the main axis.

## Cross Axis

The **cross axis** runs perpendicular to the main axis.

It is used to control alignment across the container.

Properties like `align-items` and `align-content` work along the cross axis.

---

