# Related Entries Tag (Next/Previous Linking)

Allows template developers the ability to implement Next and Previous entry links, which allows linking to the next or previous content_type entry, based on one or more related categories of the active entry/page.
    
**Tag Pair**

Used as a tab block you can control what fields are outputted and how it is formatted.

```html
...
<div class="pagination left">
    {{ content:related_entry direction="previous" }}
        <img src="{{ thumb_url }}" alt="">
        <h6><a href="{{ url }}">Previous</a></h6>
        <h1>{{ title }}</h1>
    {{ /content:related_entry }}
</div>
<div class="pagination right">
    {{ content:related_entry direction="next" }}
        <img src="{{ thumb_url }}" alt="">
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
{{ thumb_url }} - The **featured_image** prefixed with the website url. 
```

### featured_image=

```
{{ featured_image }} - Path to the primary image for an entry/page. Often appearing above or next to each content entry and on social media as the shareable image.
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
