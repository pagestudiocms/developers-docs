# Galleries Tag

This **tag block** allows you to lookup a gallery by `galleryId`, and display it on any page, whether via the **Custom HTML** block, or embeded directly into the HTML template. Use this when fine control over the HTML markup is necessary.

**Example**

```html
<div>
{{ galleries:gallery gallery_id="1" }}    
    <div>
        <img src="{{ image crop"150x150" }}" alt="{{ alt }}" />
        <h3>{{ title }}</h3>
        {{ description }}
    </div>
{{ /galleries:gallery }}
</div>
```

## Variables

The following pre-defined variable tags are available for use within the **galleries** tag block.

Tag                 | Description                                              |
--------------------|----------------------------------------------------------|
| {{ alt }}         | Outputs alternative text defined for the image. Intended for use in the `<img>` alt attribute. 
| {{ count }}       | Outputs the current image pointer in the array.          |
| {{&nbsp;description&nbsp;}} | Outputs the description that was defined for the image.  |
| {{ image }}       | Outputs the full url for the current image. (Note: Has optional resize parameter `crop="${width}x${height}"` e.g. `crop="200x150"`. When set returns a full url path to a resized/cropped and cached version of the image.) |
| {{ link }}        | Outputs an optional link. Provides the ability to link the image to another page. |
| {{ link_text }}   | Outputs (optional) link text.                            |
| {{ title }}       | Outputs the title that was defined for the current image.|

## Parameters

```eval_rst 

.. contents::
    :local:

```

### gallery_id *Required 

The id or the variable name of the gallery you would like to render and output. 

**Example**

Using the glallery module to render a slideshow.

```eval_rst
.. note:: You can use the ``gallery_exists`` function to check if a given gallery exists before displaying any HTML to the screen. 
```

```html
<div>
{{ if {galleries:gallery_exists gallery_id="1"} }}
    <!-- flexSlider -->
    <div class="flexslider">
        <ul class="slides">
            {{ galleries:gallery gallery_id="1" }}
            <li>
                <img src="{{ image crop="200x150" }}" alt="{{ alt }}" />
            </li>
            {{ /galleries:gallery }}
        </ul>
    </div>
{{ endif }}
</div>
```

Alternative option to validate if a slideshow exists. 

```eval_rst
.. note:: **slideshow** is the name of your gallery content_type field name.
```
    
```html
<div>
{{ if slideshow }}
    <!-- flexSlider -->
    <div class="flexslider">
        <ul class="slides">
            {{ galleries:gallery gallery_id=slideshow }}
            <li>
                <img src="{{ image }}" alt="{{ alt }}" />
            </li>
            {{ /galleries:gallery }}
        </ul>
    </div>
{{ endif }}
</div>
```
