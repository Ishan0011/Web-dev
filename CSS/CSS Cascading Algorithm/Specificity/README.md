# Selector Specificity in CSS

Selectors with higher specificity override selectors with lower specificity.

its an algorithm that caalculate the weight that is applied to a given CSS decleration.  

---

## Specificity Order (Low → High)

__(id), __(class,attribute,pesudio-class), __(element & pesudio-element)     
   
# id > class > element

---
### eg:-
h2{   
    background-color: black;   
}   

**HERE** 0(id),0(class),1(element)  = 001 -priority.  