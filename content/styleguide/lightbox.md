---
title: Vue Lightbox
position: 5
---

https://fslightbox.com/vue/download

```html
<!-- Button to open lightbox, no specific slide number -->
<!-- <button @click="toggler = !toggler">Toggle Lightbox</button> -->
<button @click="openLightboxOnSlide(1)">Open lightbox on first slide</button>

<button @click="openLightboxOnSlide(2)">Open lightbox on second slide</button>

<FsLightbox
  :toggler="toggler"
  :slide="slide"
  :sources="[
'images/lighthouse.jpg',
'images/lashes/alexander-krivitskiy-PoogTvXLv8U-unsplash.jpg'
]"
/>
```

<div class="spacer"></div>

## Script

```js
<script>
import FsLightbox from "fslightbox-vue";
export default {
  layout: "home",
  components: { FsLightbox },
  data() {
    return {
      toggler: false,
      slide: 1,
    };
  },
  methods: {
    openLightboxOnSlide: function (number) {
      this.slide = number;
      this.toggler = !this.toggler;
    },
  },
};
</script>
```

<div class="spacer"></div>

### Data

```js
data() {
    return {
      toggler: false,
      slide: 1,
    };
  },
```

<div class="spacer"></div>

### Methods

```js
methods: {
    openLightboxOnSlide: function (number) {
      this.slide = number;
      this.toggler = !this.toggler;
    },
  },
```
