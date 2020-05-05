OK so to start
==============

Go to the main directory in command line. To build locally:

```bundle exec jekyll serve --config _config_dev.yml```

add ```--drafts``` if you want to use drafts

Sync with GitHub. Main folder is in /webdev/MF-SITE

Everything else is basic Jekyll.


# Posts

Start with markdown. Make sure to include the following at the top of the doc

```
layout: photo_post
title:  "Post Title"
date:   2019-07-14 11:18:12 -0700 // any date un UTC time
author: // probably yourself
excerpt: First sentence that goes right above the first picture
categories: // lot of options including design branding photography packaging web etc make em up i don't care
cover_color: // selects the color of the titrle box when hovered, and the initial look of the page. can be changed later with image area inputs. see list below for the colors you can use.
order: 1
images:...
```

Cover colors can be added in /sass/_post_themes.scss. You need to copy a lot of stuff so you better get started. Current list is:
```pink | grey | powder-blue | sage | teal | dark-blue | yellow | sand | red | orange | amethyst    ```

After the `images` line remember to use YML syntax. You can include some or none or all of the following options *after you write the URL after the hyphen*

```
- img_url: the image url
  paragraph: you can write long text here
  width: full onehalf onequarter onethird twothirds // all work here and will reconfigure if you don't get your math right
  offset: moves things around for asymmetrical coolness. only accepts one value — offset
  invert: can't remember what this does rn oh yeah it changes the little expand arrows from black (default) to white. used for darked images wherre visibility is compromised.
  blockquote: larger quote styling
  heading: adds a heading before an image
  change_bg: will fade the background from the initial featured color to a new one. must be from the list.
  ```

  At the end, close out your YML front matter with ```---``` and write markdown for anything else you need. End every post with something like this (example from Mazz's post):

```
#### What I Did:
**Web Design:**  
Front-End (Shopify), Email templates (Mailchimp)  
**Graphic Design:**  
Packaging, Collateral, Product Labeling, Typography  
**Product Photography**  

Visit [Mazz Hanna Wellness](http://mazzhanna.com)
```