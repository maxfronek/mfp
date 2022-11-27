---

layout: page-about
title: About Me
permalink: /about/
alt_title: I'm Max.
sub_title: I love creating beautiful, functional designs that resonate with&nbsp;people.
images:
  - img_url: images/page_images/about-menu.jpg
    alt: Max Fronek Design Logo
  - img_url: images/page_images/about-knockout.png
    alt: A picture of Max Fronek.
---
<section class="about-hero">
<h2 class="title" data-sal="slide-up" data-sal-delay="50"  data-sal-duration="250" data-sal-easing="ease-in">{% if page.alt_title %}{{ page.alt_title }}{% else %}{{ page.title }}{% endif %}</h2>
{% if page.sub_title %}<p class="subtitle" data-sal="slide-up" data-sal-delay="250"  data-sal-duration="250" data-sal-easing="ease-in">{{ page.sub_title }}</p>{% endif %}

{% for image in page.images limit: 1 offset: 1 %}<img class="about-image" src="{{ image.img_url | prepend: site.photourl }}{{ site.img_sizes.small }}" srcset="{{ image.img_url | prepend: site.photourl }}{{ site.img_sizes.small }} 300w, {{ image.img_url | prepend: site.photourl }}{{ site.img_sizes.medium }} 480w, {{ image.img_url | prepend: site.photourl | append: site.img_sizes.grande }} 600w" sizes="80vw" alt="{{ image.alt }}" data-sal="fade" data-sal-delay="550"  data-sal-duration="250" data-sal-easing="ease-in" />{% endfor %}
<!-- <p data-sal="fade" data-sal-delay="450"  data-sal-duration="250" data-sal-easing="ease-in">
I've had a passion for design and photography for as long as I can remember. I love finding new and innovative methods of presenting information, creating behavior changes and addressing market and client challenges creatively. My primary areas of expertise are branding, product and packaging development, and corporate identity. <a href="mailto:mf@maxfronek.com?subject=Design%20Inquiry" target="_blank" title="Email Me for a Quote">Let’s chat about how we can elevate your brand together</a>.</p> -->
</section>

I'm currently working full-time as the Creative Lead for Small Dog Creative in Santa Clarita, CA. I love the challenges of my role, elevating brands across verticals and creating stunning experiences regardless of the platform. Seeing a campaign through from concept to execution drives me to work harder every day and improve my work with every project. <!-- As such, my availability for freelance projects is limited. However, I encourage you to reach out about your project, as I'm always happy to offer advice, recommendations, and mentorship, even if we're unable to work together. -->
I'm currently working full-time as the Creative Director of <a href="https://join.gohunt.com" target="_blank">GOHUNT</a> in Las Vegas, NV and am currently unavailable for freelance or one-off projects.<!-- SDC blurb I love the challenges of my role, elevating brands across verticals and creating stunning experiences regardless of the platform. Seeing a campaign through from concept to execution drives me to work harder every day and improve my work with every project. --> <!-- As such, my availability for freelance projects is limited. However, I encourage you to reach out about your project, as I'm always happy to offer advice, recommendations, and mentorship, even if we're unable to work together. -->

My work has been featured in numerous press outlets, and has been presented in formats from magazines to billboards. Some places you may have seen my product photos include The Wall Street Journal, Vogue, GQ, Esquire, Playboy, Gizmodo, Forbes, and more.

<div class="contact-me">
<!-- <a href="{{ site.photourl }}images/pdfs/MFRONEK-Resume-2020.pdf">Resume</a> -->
<a href="https://www.linkedin.com/in/maxfronek/" target="_blank">LinkedIn</a>
<!-- <a href="mailto:mf@maxfronek.com" target="_blank">Contact Me Directly</a> -->

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