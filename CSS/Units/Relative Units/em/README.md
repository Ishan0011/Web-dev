# em Unit in CSS

The `em` unit is a relative unit that is based on the font size of the parent element.

It allows text and elements to scale proportionally according to their parentes,like width etc.

---

## Disadvantage of em (Snowballing Effect)

The main disadvantage of using `em` is the **snowballing effect**.

When `em` units are nested inside multiple elements, each level inherits and multiplies the font size from its parent.  
This can cause sizes to grow or shrink unexpectedly and make layouts harder to manage.

Due to this behavior, excessive use of `em` can lead to inconsistent sizing in complex layouts.
