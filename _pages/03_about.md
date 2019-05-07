---

layout: page
title: About Me
permalink: /about/
alt_title: I'm Max.
images:
  - img_url: images/page_images/about.jpg
    alt: This is me in 2018, but I still look like this. Just with longer hair now.
---

{% for image in page.images %}
<img class="about-image" src="{{ image.img_url | prepend: site.photourl }}{{ site.img_sizes.small }}" srcset="{{ image.img_url | prepend: site.photourl }}{{ site.img_sizes.small }} 300w, {{ image.img_url | prepend: site.photourl }}{{ site.img_sizes.medium }} 480w, {{ image.img_url | prepend: site.photourl | append: site.img_sizes.grande }} 600w" sizes="80vw" alt="{{ image.alt }}" />
{% endfor %}
I've had a passion for design and photography for as long as I can remember. I love finding the perfect way to present information and solve problems creatively. I work with various clients to achieve their short- and long-term needs, focusing mainly on product branding, product and packaging development, marketing, and corporate identity. [Let’s chat about how we can elevate your brand together](mailto:mf@maxfronek.com?subject=Design%20Inquiry). 


---

My photography has been featured in numerous press outlets, and has been presented for advertising content in formats from magazines to billboards. Some places you may have seen my product photos include The Wall Street Journal, Vogue, GQ, Esquire, Playboy, Gizmodo, Forbes, and more. It has been used in everything from product packaging to billboards.

---

### Skills &<br /> Software

##### Adobe Creative Suite
Photoshop, Lightroom, Illustrator, InDesign, Premiere, After Effects, Audition
##### Graphic Design
Figma / Sketch Mockups, Packaging, Product Design and Development
##### Front-End Web Design / CMS
HTML 5, CSS 3 (SCSS, Sass), Javascript (jQuery), Wordpress, Shopify, Jekyll, Git
##### Photography
Product / Ecommerce, Landscape, Documentary / Event, Portraits, Video