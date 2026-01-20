# z-index in CSS

`z-index` controls the **stacking order (stack level)** of overlapping elements along the **Z-axis**.

Elements with a **higher z-index value appear on top** of elements with a lower value.

---

## How z-index Works

- z-index applies **only to positioned elements**
  - position: relative
  - position: absolute
  - position: fixed
  - position: sticky
- It does **not work on static elements**

---

## z-index Values

- `auto` → default stacking order (treated as 0)
- Positive numbers → element comes **forward**
- Negative numbers → element goes **behind**

Examples:
- `z-index: auto (0)`
- `z-index: 1, 2, 3, ...`
- `z-index: -1, -2, ...`

---

## Overlapping Rule

When elements overlap:
- **Higher z-index covers lower z-index**
- If z-index is the same, **HTML order matters** (later element appears on top)

---

## Important Notes

- z-index works **within the same stacking context**
- A new stacking context is created by:
  - position + z-index
  - opacity < 1
  - transform
  - filter
  - etc.

---

## Common Use Cases

- Dropdown menus
- Modals & popups
- Tooltips
- Sticky headers
- Overlapping UI components
