# Related Entries Tag (Next/Previous Linking)

Allows template developers the ability to implement Next and Previous entry links, which allows linking to the next or previous content_type entry, based on one or more related categories of the active entry/page.
    
**Tag Pair**

Used as a tab block you can control what fields are outputted and how it is formatted.

```html
...
<div class="pagination left">
    {{ content:related_entry direction="previous" }}
        <img src="{{ thumb_url crop='150x150' }}" alt="">
        <h6><a href="{{ url }}">Previous</a></h6>
        <h1>{{ title }}</h1>
    {{ /content:related_entry }}
</div>
<div class="pagination right">
    {{ content:related_entry direction="next" }}
        <img src="{{ thumb_url crop='150x150' }}" alt="">
        <h6><a href="{{ url }}">Next</a></h6>
        <h1>{{ title }}</h1>
    {{ /content:related_entry }}
</div>
...
```

<hr />

## Pre-defined Variables

### id=

The entry_id 

### category_group_id=

### title=

```
{{ title }} - Outputs the title of the entry/page
```

### slug=

```
{{ slug }} - The page URI of the current entry
```

### url=

```
{{ url }} - The **slug** prefixed with the website url. 
```

### thumb_url=

```
{{ thumb_url }} - Outputs the full url to the  **featured_image** image.
```

The **thumb_url** variable is a pointer to the **featured_image**; the primary image for an entry/page, often appearing above or next to each content entry, and on social media as the shareable image. To avoid conflict with the **featured_image** of the current page related entry links will be created for, this variable is made available as **thumb_url** for use within the ``{{ content:related_entry }}...{{ /content:related_entry }}`` tag pair. Use it to generate thumbnails for the next/previous links.

```eval_rst
.. note:: This tag has two optional parameters; **crop** and **show_path_only**. Use ``crop="${width}x${height}"`` e.g. ``crop="200x150"`` to return a resized/cropped and cached version of the image. Use ``show_path_only='y'`` to return the path to the image without the website url prefixed.
```

### status=

```
{{ status }} - The content type status (draft|published|closed|disabled)
```

## Parameters

### direction=

Determins whether to fetch the next or previous entry related to the current entry/page being viewed.

`direction="previous|next"`

**Example:**

``` 
{{ content:related_entry direction="next" }}
    ...
{{ /content:related_entry }}
```
