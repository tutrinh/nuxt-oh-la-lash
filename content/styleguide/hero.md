---
title: Hero
position: 4
---

Hero takes up 100% height if is-fullheight is set to true. Can include top navigation.
Can position the background image to top, bottom, center is default.
Pass in prop `bg-position="bg-position-top"` or `bg-position="bg-position-bottom"`.

### With Background

```html
<Hero
  :has-nav="true"
  :is-fullheight="true"
  bg-img="images/lighthouse.jpg"
  bg-position="bg-position-top"
>
  <!-- slot -->
</Hero>
```

<div class="spacer">

### Solid Color & No Background

```html
<Hero class="color-bg-red" :has-nav="true" :is-fullheight="true" bg-img>
  <!-- slot -->
</Hero>
```
