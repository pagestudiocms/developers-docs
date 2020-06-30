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

### Tags vs Tag Pairs

Tag groups (tag pairs) differ from tags in that they allow additional markup within the opening and closing tags. They grant developers the ability to insert business logic into templates for finer control over the display of rendered template layout. 

**Example**

```
{{ module-namespace.tag }}
    <h1>Hello</h1>
{{ \module-namespace.tag }}
```

### Comments

If you'd like to comment out a section of code or content, you can wrap them inside `{{# and #}}`. Ex: `{{# This is a comment #}}`. This has the advantage over conventional HTML comment tags that it won't be visible to users viewing your website's source code.

## System Tags 

## Layout Tags

```
{{ template:headers }}
```

```
{{ template:footers }}
```

```
{{ template:stylesheets }}
```

```
{{ template:javascripts }}
```

Adding scripts not defined in template.conf 

```
{{ template:javascripts name="jquery|boostrap|main" footer="true" }}
```

```
{{ template:partial name="${filename}" }}
```
