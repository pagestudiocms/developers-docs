# Template Tags (Deepdive)

Tags allow you to tap into more advanced functionality using simple syntax right inside your layouts, page layouts, and even pages themselves. Tags can allow you to do some really powerful things without the need to understand complex programming logic.

The following guide will teach you the basics of tags and how to use them in your layouts.

<hr />

## Variables

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

## Tag Attributes

What makes tags really powerful is they can take attributes that give you the freedom to modify the tag output based on input data. Here is an example:

```
{{ url:segments segment="1" }}
```

In the above example, we are calling the url plugin which has a **segments** function. This is all well and good, but we can also pass the tag parameters in order to modify the output. In this case, we are telling the tag to get the first segment. So if your URL was *http://www.example.com/bills/bagels*, this tag would return:

```
bills
```

You can have multiple parameters as well. So, for example, the ``segments`` function allows you to specify a default value via a second parameter:

```
{{ url:segments segment="1" default="home" }}
```

If the first segment is empty, the tag will return "home".

```eval_rst
.. note:: Some parameters are required and some are optional. Make sure to check the plugins section to make sure you are passing 
all of the right parameters, and if there are any optional ones that will give you added functionality you need.
```

### Using Tags and Variables In Tag Parameters

Inside quotes, PageStudioCMS cannot parse curly braces. So, for instance, if you wanted to pass the value of the slug from the page plugin, this **will not work**:

```
{{ url:segments segment="1" default="{{ page:slug }}" }}
```

However, you can pass a plugin function's output value or variable by eliminating the curly braces. So, **this will work**:

```
{{ url:segments segment="1" default=page:slug }}
```

You can also use tag parameters in functions that are being used as a tag parameter by using a single curly brace with no spaces, and no quotes:

```
{{ url:segments segment="1" default={foo:bar value="baz"} }}
```

Although this is an easy solution for single functions and variables, for more complex logic within tag paramters, you can use square braces instead of curly braces, like this:

```
{{ url:segments segment="1" default="[[ page:slug ]]" }}
```

PageStudioCMS parses each parameter separately for square brackets, so you can even do logic within your paramters:

```
{{ url:segments segment="1" default="[[ if global:environment == 'development' ]]dev_home[[ else ]]home[[ endif ]]" }}
```

<hr />

## Tag Pairs

Another powerful feature of PageStudioCMS tags is the ability to use data between tags. Take this example of a blog posts tag:

```eval_rst
.. code-block:: html

    {{ blog:posts limit="2" order-by="title" order-dir="desc" }}
        <h2>{{ title }}</h2>
    {{ /blog:posts }}
```

As you'll notice, we have an opening and closing tag here. In this case, the blog **posts** function will repeat and parse the content between our tag pair for each blog post that matches the criteria we set up with our tag parameters. So for this tag, we might get this output:

```eval_rst
.. code-block:: html

    <h2>Blog Post One</h2>
    <h2>Blog Post Two</h2>
```

Tag pairs don't necessarily loop through content, however. For example, we can simply use the content between the tags like we would a parameter, like in the format plugin:

```
{{ format:markdown }}Let's _convert_ this to **HTML**.{{ /format:markdown }}
```

## Single Variable Loops

Occasionally, single tags can act as arrays of data that you can loop through. You can do so using a similar tag pair syntax:

```eval_rst
.. code-block:: html

    {{ images }}
        <img src="{{ url }}" />
    {{ /images }}
```

<hr />

## Tag Conditionals

Many times in your layouts you will want to show something under certain conditions. For instance, if a user is logged in or if a url segment has a certain value. PageStudioCMS tags allow you to do that with an if/else tag syntax.

```eval_rst
.. note:: Undefined variables in Conditionals are evaluated to be null. This allows you to do things like ``{{ if foo }}`` to check if a variable exists.
```

### Basic Conditionals

Here is a simple example of a conditional tag statement:

```eval_rst
.. code-block:: html

    {{ if user:logged_in }}
         <p>You are logged in.</p>
    {{ endif }}
```

This general structure will look very familiar if you are acquainted with conditionals in languages like PHP. The first tag checks if the value of `user:logged_in` is true, and returns what is between that tag and the `endif` tag.

As of version 1.2.0 you can now perform conditional statements on `image_field` types. 

**Example**

```
{{ if thumbnail }} {{ thumbnail }} {{ endif }}
```
    
**Output:**

```eval_rst
.. code-block:: html

    <img src="path/to/your/image/image_name.jpg" />
```

### Conditional Operators

You can use operators to compare values in an if statement. These used to compare two values. Here's an example:

```eval_rst
.. code-block:: html

    {{ if {url:segments segment="2"} == 'categories' }}
        <p>Looks like you are in the categories section.</p>
    {{ endif }}
```

```eval_rst
.. note:: PageStudioCMS function tags can be used in conditionals, but must be wrapped in single curly braces if they have one or more parameter, as in the above example.
```

```eval_rst
.. note:: When using function tags wrapped in curly braces in conditionals, the space after the opening curly brace and before the closing curly brace must be omitted. The tag will not render properly otherwise. Ex: ``{url:segments segment="2"}``.
```

Here are the available conditional operators:

```eval_rst
+---------------+--------------------------------------------------------------------------+
| Operator      | Notes                                                                    |
+===============+==========================================================================+
| ==            |  Equals. Values equal each other.                                        |
+---------------+--------------------------------------------------------------------------+
| !=            | Does not equal. Values do not equal each other.                          |
+---------------+--------------------------------------------------------------------------+
| ===           | Let's you define the sort order of the result set. Options are asc,      |
|               | or desc, default is asc.                                                 |
+---------------+--------------------------------------------------------------------------+
| !==           | Sets the limit of the number of events to be displayed.                  |
+---------------+--------------------------------------------------------------------------+
| >             | Greater than                                                             |
+---------------+--------------------------------------------------------------------------+
| <             | Less than                                                                | 
+---------------+--------------------------------------------------------------------------+
| >=            | Greater than or equal to                                                 |
+---------------+--------------------------------------------------------------------------+
| <=            | Less than or equal to                                                    |
+---------------+--------------------------------------------------------------------------+
```

You can also use the **!** or the **not** logical operator:

```eval_rst
.. code-block:: html

    {{ if !user:logged_in }}
        <p>You are not logged in.</p>
    {{ endif }}

    {{ if not user:logged_in }}
        <p>You are not logged in.</p>
    {{ endif }}
```

```eval_rst
.. note:: **!** and **not** are interchangeable. The only requirement is that not must have a space on both sides.
```

### Checking if a Variable Exists

To check if a variable exists in a conditional, you use the exists keyword.

**Examples**

```eval_rst

.. code-block:: html

    {{ if exists foo }}
        Foo Exists
    {{ elseif not exists foo }}
        Foo Does Not Exist
    {{ endif }}
```

You can also combine it with other conditions:

```
{{ if exists foo and foo !== 'bar' }}
    Something here
{{ endif }}
```

The expression ``exists foo`` evaluates to either ``true`` or ``false``. Therefore something like this works as well:

```
{{ if exists foo == false }} ... {{ endif }}
```

### Multiple Conditionals

You can have multiple conditionals for some more advanced conditional statements:

```eval_rst
.. code-block:: html

    {{ if variables:custom_var == 'foo' }}
        <p>Looks like a foo.</p>
    {{ elseif variables:custom_var == 'bar' }}
        <p>Looks like a bar.</p>
    {{ else }}
        <p>Neither foo nor bar.</p>
    {{ endif }}
```

### Logical Operators

You can also use logical operators like so:

```eval_rst
.. code-block:: html

    {{ if variables:custom_var != 'foo' and variables:custom_var != 'bar' }}
         <p>No foos and no bars!</p>
    {{ endif }}
```

The logical operators available are:

-  and / &&
-  or / ||


```eval_rst
.. toctree::
    :maxdepth: 1
    :hidden:
    :titlesonly:

```