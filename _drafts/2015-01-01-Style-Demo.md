---
layout: photo_post
title:  "Style Guide"
date:   2015-01-01 11:18:12 -0700
author: Max Fronek
excerpt: Reference for Creation of Case Studies
categories: design branding packaging
cover_color: sage
order: 100
images:
  - img_url: images/page_images/about-menu.jpg
    invert: invert
---

To make case studies with the correct style, you need to use the following syntax at the top of your posts .md file:

~~~
---
layout: photo_post
title: "title goes here" // must be in quotes
date: YYYY-MM-DD HOUR:MINUTE:SECOND -GMTADJUSTMENT
author: Max Fronek // it's always my name
excerpt: Short text that goes on homepage slideshow and hero image of case study
categories: categories this post belongs to
cover_color: the color for the title underline and archive hover.
order: 1 // accepts any number. Determines the order shown in the homepage slideshow. Decimals are OK, goes from smallest to largest i.e. 1 will be shown before 2.
images: // see below for specific syntax
---
~~~

Reference: when adding images in a photo post, syantax is key. After the opening <code style="display: inline;">images:</code> line, you must indent each <code style="display: inline;">- img_url</code> by 2 spaces and start with a hyphen; this indicates a new image is starting. For each piece of information included with that image, the start of the line must be indented by 2 additional spaces (so that vertically, the new information lines up with the words "img_url". here are your available options:

~~~images:
  - img_url: images/subfolders // This is required. Nothing else is. Accepts video and image file urls.
    caption: text
    heading: title // Creates a title before the image, to indicate a new section or chapter
    blockquote: This is text that will make a large block of text. Keep it snappy.
    paragraph: |
      This is where you can enter the main text blocks of the case studies. it will appear below images and blockquotes.
    poster: indicates a backup image for when videos are unable to be played // only works with video urls.
    width: determines the width of the image. Accepts the following values: half, onethird, twothirds, onequarter, threequarters
    offset: offset // only accepts value of offset. Used when placing images less than full width that you want to appear on the right side instead of left.
    invert: invert // only accepts value of invert. Makes the little expand hover icon white instead of black
    change_bg: enter a color that the background will smoothly transition to. accepts the following values: pink, grey, powder-blue, sage, teal, dark-blue, yellow, sand, red, orange, amethyst

~~~