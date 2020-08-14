---

layout: page
title: About Me
permalink: /about/
alt_title: I'm Max.
images:
  - img_url: images/page_images/about.jpg
    alt: A picture of Max Fronek.
---
{% for image in page.images %}<img class="about-image" src="{{ image.img_url | prepend: site.photourl }}{{ site.img_sizes.small }}" srcset="{{ image.img_url | prepend: site.photourl }}{{ site.img_sizes.small }} 300w, {{ image.img_url | prepend: site.photourl }}{{ site.img_sizes.medium }} 480w, {{ image.img_url | prepend: site.photourl | append: site.img_sizes.grande }} 600w" sizes="80vw" alt="{{ image.alt }}" data-sal="fade" data-sal-delay="250"  data-sal-duration="250" data-sal-easing="ease-in" />{% endfor %}
<!-- <p data-sal="fade" data-sal-delay="450"  data-sal-duration="250" data-sal-easing="ease-in">
I've had a passion for design and photography for as long as I can remember. I love finding new and innovative methods of presenting information, creating behavior changes and addressing market and client challenges creatively. My primary areas of expertise are branding, product and packaging development, and corporate identity. <a href="mailto:mf@maxfronek.com?subject=Design%20Inquiry" target="_blank" title="Email Me for a Quote">Let’s chat about how we can elevate your brand together</a>.</p> -->


I'm currently working full-time as the Creative Lead for Small Dog Creative in Santa Clarita, CA. As such, my availability for freelance projects is limited. However, I encourage you to reach out about your project, as I'm always happy to offer advice, recommendations, and mentorship, even if we're unable to work together.

My photography has been featured in numerous press outlets, and has been presented for advertising content in formats from magazines to billboards. Some places you may have seen my product photos include The Wall Street Journal, Vogue, GQ, Esquire, Playboy, Gizmodo, Forbes, and more.

<div class="contact-me">

<a href="{{ site.photourl }}images/pdfs/MFRONEK-Resume-2020.pdf">Resume</a>
<a href="https://www.linkedin.com/in/maxfronek/" target="_blank">LinkedIn</a>
<a href="mailto:mf@maxfronek.com" target="_blank">Contact Me Directly</a>

</div>



{% comment %}
---

### Proficiencies

##### Adobe Creative Suite
Photoshop, Lightroom, Illustrator, InDesign, Premiere, After Effects, Dimension Audition
##### Graphic Design
Figma / Sketch Mockups, Packaging, Product Design and Development, 3d Renders (Blender)
##### Front-End Web Design / CMS
HTML 5, CSS 3 (SCSS, Sass), Javascript (jQuery), Wordpress, Shopify, Jekyll, Git
##### Photography
Product / Ecommerce, Landscape, Documentary / Event, Portraits, Video

{% endcomment %}