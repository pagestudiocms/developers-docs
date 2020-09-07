# Template Tags 

Tags allow you to tap into more advanced functionality using simple syntax right inside your layouts, page layouts, and even pages themselves. Tags can allow you to do some really powerful things without the need to understand complex programming logic.

```eval_rst
.. sidebar:: Table of contents

    .. contents::
        :local:
        :depth: 2
```

<hr />

## Overview

At their very basic form, tags are simply a variable:

```
{{ my_var }}
```

When you put that in your markup, it will be replaced by some value. Pretty simple!

```eval_rst
.. note:: The white-space inside the curly braces is optional, but does help with aesthetics and readability.
```

For a complete list of all available template tags see the [Template Variables](../template-variables) page.

## Tags vs Tag Pairs

Tag groups (also referred to as "tag pairs") differ from variable tags in that they allow additional markup within the opening and closing tags. They grant developers the ability to insert business logic into templates for finer control over the display of rendered template layout. 

**Example**

```
{{ module-namespace.tag }}
    <h1>Hello</h1>
{{ \module-namespace.tag }}
```

## Comments

If you'd like to comment out a section of code or content, you can wrap them inside `{{# and #}}`. Ex: `{{# This is a comment #}}`. This has the advantage over conventional HTML comment tags that it won't be visible to users viewing your website's source code.

<hr />

```eval_rst
.. toctree::
    :maxdepth: 2
    :hidden:
    :titlesonly:

    layout-tags/index
    tags-by-module/index
```