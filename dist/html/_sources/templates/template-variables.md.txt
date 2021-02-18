# Template Variables 

Variables available for use in any given template layout/partial file on every page. These variables are normally categorized under two namespaces (groups) &mdash; **site** or **page**. To view them all and the data associated with, simply append `?format=json` to the end of any website url (`http://example-website.com?format=json`). Doing so will display a JSON object similar to that below for that page. 

## ?format=json (Example)

```json
{
    "_content": "<div></div>",
    "body_tag_css": "",
    "media_relative_path": "",
    "theme_relative_path": "static\/rocu56\/themes\/pagestudio\/\/",
    "wrapper_style": "",
    "page": {
        "id": "1",
        "slug": "home",
        "url": "https:\/\/cosmointeractive.co\/home",
        "title": "Web Design Anderson, SC",
        "description": "Providing digital technology solutions through web design, responsive design and web development to the Anderson, SC area.",
        "keywords": "",
        "excerpt": "",
        "author_id": "9",
        "featured_image": "static\/rocu56\/media\/uploads\/images\/sites-collage.jpg",
        "created_date": "2018-11-30 23:32:30",
        "published_date": "1900-01-01 00:00:00",
        "modified_date": "2020-10-15 18:40:57",
        "authorId": "9",
        "uniqueUrl": "home",
        "featuredImageUrl": "static\/rocu56\/media\/uploads\/images\/sites-collage.jpg",
        "dateCreated": "2018-11-30 23:32:30",
        "dateModified": "2020-10-15 18:40:57"
    },
    "site": {
        "id": "cosmo-mathieu-rocu56",
        "url": "https:\/\/cosmointeractive.co\/",
        "primary_domain": "http:\/\/cosmointeractive.co\/",
        "title": "Cosmo Interactive",
        "description": "Providing digital technology solutions through web design, responsive design and web development to the Anderson, SC area.",
        "logo": "",
        "slogan": false,
        "timeZone": "America\/New_York",
        "lang": "en-US",
        "locale": "en-US",
        "subscription": null
    }
}
```

## Usage In Template

```eval_rst

.. note:: When it comes to accessing page data we highly recomend that the pre-defined variables defined under `Entries Template Tag <template-tags-reference/entries-tag.html#pre-defined-variables>`_ be used. For data withing the **site** object follow the example below. 
```

To display the associated value of a given property you need to wrap it in curly braces `{{ }}`. Nested properties can be displayed using the dot-notation i.e `{{ site.title }}`, which would display the value "Cosmo Interactive". In that example both **site** and **title** are nested properties of the main `{ }` JSON object. **title** is thus a nested property of **site** and **site** is a nested property of the parent `{ }` JSON object. 

## Root Variables 

These variables are contained at the root of the object, in other words, they are not contained within the **site** or **page** object. *All except **_content** are deprecated and should not be used from version 2 and forward.* 

* **_content** &mdash; More info coming soon...
* **body_tag_css** &mdash; More info coming soon...
* **media_relative_path** &mdash; More info coming soon...
* **theme_relative_path** &mdash; More info coming soon...
* **wrapper_style** &mdash; More info coming soon...

## Site Variables

These variables provide data relating with the site as a whole. The associated values WILL NOT change from page to page.

* **site.id** &mdash; Defiition coming soon..
* **site.url** &mdash; Defiition coming soon..
* **site.primary_domain** &mdash; Defiition coming soon..
* **site.title** &mdash; Defiition coming soon..
* **site.description** &mdash; Defiition coming soon..
* **site.logo** &mdash; Defiition coming soon..
* **site.slogan** &mdash; Defiition coming soon..
* **site.timeZone** &mdash; Defiition coming soon..
* **site.lang** &mdash; Defiition coming soon..
* **site.locale** &mdash; Defiition coming soon..
* **site.subscription** &mdash; Defiition coming soon..

## Page Variables

```eval_rst

.. note:: We highly recomend that the pre-defined variables defined under `Entries Template Tag <template-tags-reference/entries-tag.html#pre-defined-variables>`_ be used instead. They provide additional features.
```

These variables provide data relating to the page being accessed. The associated values WILL change from page to page.

* **page.id** The entity ID of the page. Used for retrieving data about the page. &mdash; 1, or 12, etc.
* **page.slug** 
* **page.url** 
* **page.title** 
* **page.description**     
* **page.keywords**     
* **page.excerpt**     
* **page.featured_image** 
* **page.author_id**    
* **page.created_date** The date and time the page was created &mdash; 2020-01-01 00:00:00
* **page.modified_date** The last date and time the page was last modified. &mdash; 2020-01-01 00:00:00   
* **page.published_date** The date and time representing when the page was published (made available for viewing). Commonly used in blog articles to &mdash; 2020-01-01 00:00:00
* **page.uniqueUrl** Same as the `slug`.
* **page.authorId** Same as `author_id`.
* **page.featuredImageUrl** Same as `featured_image`.
* **page.dateCreated** Same as `created_date`.
* **page.dateModified** Same as `modified_date`.

<hr />

In addition to the aforementioned variables, additional variables and [tag-groups](http://) (defined in modules), are also accessible within a template file through template tags. They typically follow a module namespace dot ``.`` tag-name convention, i.e. ``{{ module-namespace.variable }}``. See the complete list of system modules for more info.
