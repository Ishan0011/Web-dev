# Media Queries – Orientation

CSS Media Queries can detect the **orientation of the viewport** and apply styles accordingly.

Orientation depends on whether the screen is wider than it is tall, or vice-versa.

---

## Orientation Types

There are **two possible values** for orientation:

- **portrait** → height is greater than width  
- **landscape** → width is greater than height  

---

## Orientation Media Query

The `orientation` media feature checks the **current orientation of the viewport**.

Styles inside the media query apply **only when the specified orientation is active**.

---

## Key Points

- Orientation is based on **viewport dimensions**, not device type
- Commonly used for **mobile and tablet layouts**
- Frequently combined with width-based media queries
- Especially useful for handling **screen rotation**

---

## When to Use Orientation

- Different layouts for mobile portrait vs landscape
- Adjusting spacing, font sizes, or layout on rotation
- Improving user experience on tablets and phones
