Blocks 
=======

For a complete list of all available blocks see the [blocks page](http://support.pagestudocms.com/general/blocks.html#available-blocks) under the support site.

## Block Types 

Any blocks created can only be of the following types:

Type | Description
 --- | --- 
button | 
text   | 

More information comming soon!

## What's in a block?

Folder contents 

```
/block-config.json
/<block-name>-portlet.html
/<block-name>-portlet.js
/<block-name>-portlet.php
/<block-name>-template.html
/templates/:num/block-data.json
/templates/:num/block-icon.png
```

`block-config.json` contents 

**Example** 

```
{
  "type": "layout",
  "group": "layout",
  "menuItem": {
    "text": "Block Name",
    "tooltip": "Adds something",
    "position": 7,
    "attr": {
      "data-portlet-url": "${path-to-data-file}",
      "data-portlet-type": "load-template-block",
      "data-on-drag" : "",
      "data-on-drop": "open-dialog"
    },
    "style": {
      "margin": "10px"
    }
  }
}
```

`block-data.json` contents

**Example**

```
{
  "5482c288-f01c-1bc8-68fc-77a26db950b1": {
    "portlet_id": "5482c288-f01c-1bc8-68fc-77a26db950b1",
    "sortable_id": "8df39d95-22a9-3d80-d951-9d21093270cc",
    "content": "<!-- Insert you HTML content here -->",
    "portlet_type": "button",
    "portlet_method": "portlet_modal",
    "portlet_object": "Button",
    "style": {
      "background-color": "",
      "margin-top": "",
      "margin-right": "",
      "margin-bottom": "",
      "margin-left": "",
      "padding-top": "",
      "padding-right": "",
      "padding-bottom": "",
      "padding-left": "",
      "border-top-width": "",
      "border-right-width": "",
      "border-bottom-width": "",
      "border-left-width": "",
      "border-style": "",
      "border-color": ""
    },
    "attr": {
      "class": ""
    },
    "button_text": "Button text",
    "button_type": "default",
    "button_link_flag": "no",
    "button_link_page": "",
    "button_link_text": "",
    "button_size": "md",
    "button_alignment": "left",
    "button_icon_flag": "no",
    "button_icon": "",
    "button_icon_alignment": "left",
    "button_full_width_flag": "no"
  }
}
```
