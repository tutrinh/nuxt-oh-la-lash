---
title: Image
position: 4
---

Image is a little tricky. Is lazy loading and is inside a placeholder div to scale accordingly to the parent container.

Can position with `position` prop with value of `object-position-top`, `object-position-bottom`, center is default

```html
<tu-img
  img="images/lashes/atikh-bana-zPFws4toKhg-unsplash.jpg"
  :height="75"
  position="object-position-top"
></tu-img>
```

Height is actually the padding-bottom in %.
Should be `50` | `75` | `100`

![image info](../images/components/image.png)

This is using the div with class `grid-three`

<div class="spacer"></div>

```html
<div class="grid-three">
  <div class="has-shadow">
    <tu-img
      img="images/lashes/atikh-bana-zPFws4toKhg-unsplash.jpg"
      :height="75"
    ></tu-img>
  </div>
  ... repeat next 2
</div>
```
