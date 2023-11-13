# Galleries Tag

This **tag block** allows you to lookup a gallery by `galleryId`, and display it on any page, whether via the **Custom HTML** block, or embeded directly into the HTML template. Use this when fine control over the HTML markup is necessary.

**Example**

```html
<div>
{{ galleries:gallery gallery_id="1" }}    
    <div>
        <img src="{{ image crop='150x150' }}" alt="{{ alt }}" />
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
| {{ image }}       | Outputs the full url for the current image. <br/>(Note: Has optional resize parameter `crop="${width}x${height}"` e.g. `{{ image crop="200x150" }}`. When set returns a full url path to a resized/cropped and cached version of the image.) |
| {{ link }}        | Outputs an optional link. Provides the ability to link the image to another page. |
| {{ link_text }}   | Outputs (optional) link text.                            |
| {{ title }}       | Outputs the title that was defined for the current image.|
| {{&nbsp;total_results&nbsp;}} | Outputs the total number of images in the array.|

## Parameters

### gallery_id *Required 

The id or the variable name of the gallery you would like to render and output. 

**Example**

Using the glallery module to render a slideshow.

```eval_rst
.. note:: Use the ``{{ no_results }}`` tag pair to display content if the referenced gallery is empty or does not exit. 
```

```html
<!-- Typical unordered list  -->
<ul class="ul-list">
    {{ galleries:gallery gallery_id="1" }}
        <li>
            <img src="{{ image crop='200x150' }}" alt="{{ alt }}" />
        </li>
        {{ no_results }}
            <li>Nothing to display.</li>
        {{ /no_results }}
    {{ /galleries:gallery }}
</ul>
```

```html
{{ galleries:gallery gallery_id="1" }}
    
    <!-- flexSlider -->
    <div class="flexslider">
        <ul class="slides">
            {{ loop }}
                <li>
                    <img src="{{ image crop='200x150' }}" alt="{{ alt }}" />
                </li>
            {{ /loop }}
        </ul>
    </div>

    {{ no_results }}
        <p>Nothing to display.</p>
    {{ /no_results }}

{{ /galleries:gallery }}
```