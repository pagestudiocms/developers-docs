# Next/Previous Entries

Allow template developers the ability to generate links to the Next or Previous entry, based on one or more related categories to the current entry/page.
    
**Tag Pair**

```eval_rst
.. important:: Must be implemented as a tab pair to allow control over the HTML markup.
```

```html
...
<div class="pagination left">
    {{ content:prev_entry }}
        <img src="{{ thumb_url crop='150x150' }}" alt="">
        <h6><a href="{{ url }}">Previous</a></h6>
        <h1>{{ title }}</h1>
    {{ /content:prev_entry }}
</div>

<div class="pagination right">
    {{ content:next_entry }}
        <img src="{{ thumb_url crop='150x150' }}" alt="">
        <h6><a href="{{ url }}">Next</a></h6>
        <h1>{{ title }}</h1>
    {{ /content:next_entry }}
</div>
...
```

<hr />

## Variables

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

The **thumb_url** variable is a pointer to the **featured_image**; the primary image for an entry/page, often appearing above or next to each content entry, and on social media as the shareable image. To avoid conflict with the **featured_image** of the current page related entry links will be created for, this variable is made available as **thumb_url** for use within the ``{{ content:prev_entry }}...{{ /content:prev_entry }}`` and ``{{ content:next_entry }}...{{ /content:next_entry }}`` tag pair. Use it to generate thumbnails for the next/previous links.

```eval_rst
.. note:: This tag has two optional parameters; **crop** and **show_path_only**. Use ``crop="${width}x${height}"`` e.g. ``crop="200x150"`` to return a resized/cropped and cached version of the image. Use ``show_path_only='y'`` to return the path to the image without the website url prefixed.
```

### status=

```
{{ status }} - The content type status (draft|published|closed|disabled)
```
