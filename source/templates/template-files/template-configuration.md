# Template Configuration

```eval_rst 

.. note:: Documentation incomplete. More information to be added. 

```

The template configuration file (**template.conf**) contains the configuration settings for the template. This is where the name of the template, author, author url, fonts, css, javascripts, along with other directives are defined. This file is **required** for every template. And must follow a certain structure. 

## File Syntax

The language syntax and format of this file is JSON.

## File Example (template.conf) 

```json
{
  "name": "Circle Studio",
  "framework": "Minimia",
  "author": "Cosmo Mathieu",
  "author_url": "http://cosmointeractive.co",
  "version": "1.0.0",
  "date": "2019/12/27",
	
  "layouts": [
    {
      "title": "Default",
      "shortname": "default",
      "filename": "default",
      "data_file": "default"
    }
  ],
	
  "navigations": {
    "options": "",
    "styles": "",
    "items": [
      {
        "title": "Primary Navigation",
        "name": "primary-navigation",
        "class": ["navbar-custom"]
      }
    ]
  },
	
  "webfonts": [
    "https://fonts.googleapis.com/css?family=Crimson+Text&display=swap:400,700,500,400italic,500italic,700italic", 
    "https://fonts.googleapis.com/css?family=Work+Sans:300,400,600,700&display=swap"
  ],
	
  "stylesheets": [
    "css/style.css"
  ],
	
  "javascripts": [
    "js/site.js"
  ]
}
```

## Definitions  

* **author** [...] &mdash; ...
