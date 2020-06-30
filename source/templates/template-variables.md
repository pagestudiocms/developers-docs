# Template Variables 

There are a number of variables provided by the CMS that can be referrenced in any given template layout/partial. When you put them in your markup, they will be replaced by some value. Pretty simple! These variables are typically found within two namespaces (or groups); **site** or **page**.

## Global Variables 

The following variables contain data associated with the site as a whole. The information displayed by these tags will not change from page to page.

Name | Type | Description
---|---|---
`{{ site.title }}` | | 
`{{ site.description }}` | | 
`{{ site.logo }}` | | 

## Page Variables

The following variables provide data relating to the page being accessed. The informaiton displayed by these tags varies from page to page.

Name | Type | Description
---|---|---
`{{ page.id }}` | | 
`{{ page.title }}` | | 
`{{ page.css }}` | | 

<hr />

In addition to the aforementioned variables, additional variables and [tag-groups](http://) (defined in modules), are also accessible within a template file through template tags. They typically follow a module namespace dot ``.`` tag-name convention, i.e. ``{{ module-namespace.variable }}``. See the complete list of system modules for more info.
