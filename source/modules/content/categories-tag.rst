
Categories Tag
===========

.. contents::
   :local:
   :depth: 1

Introduction
#####

Displays an unordered list of your blog categories based on the provided parameters. Each category links to its blog category archive page.

.. code-block:: php 

    {{ content:categories category_group_id="1" class="categories" }}

Parameters
#######

.. contents::
		:local: 

category_group_id=*
----------

The category group id that the entry belongs to. This is a required field.

category_group_id="1"

**Example:**

.. code-block:: php 

    {{ content:categories category_group_id="1" }}
    
id=
---

The html ``id`` attribute.

id="blog"

**Example:**

.. code-block:: php 

    {{ content:categories category_group_id="1" id="blog" }}

**Output**

.. code-block:: html

    <ul id="blog">
        <li class="first"><a href="http://your-website.com/category/culture">Culture</a></li>
        <li><a href="http://your-website.com/category/design">Design</a></li>
        ...
        <li class="last"><a href="http://your-website.com/category/work">Work</a></li>
    </ul>
    
class=
------

The html ``class`` attribute.

class="categories"

**Example:**

.. code-block:: php 

    {{ content:categories category_group_id="1" class="categories" }}

**Output**

.. code-block:: html

    <ul id="blog" class="categories">
        <li class="first"><a href="http://your-website.com/category/culture">Culture</a></li>
        <li><a href="http://your-website.com/category/design">Design</a></li>
        ...
        <li class="last"><a href="http://your-website.com/category/work">Work</a></li>
    </ul>
    
entry_id=
------

Passing the ``entry_id`` to the categories tag specifies that you only want categories relating to that entry.
    
entry_id="6"

.. note::

    The ``category_group_id`` parameter is still required.

**Example:**

.. code-block:: php 

    {{ content:categories category_group_id="1" entry_id="6" }}
    
    /**
     * Example with entry_id variable found within a content loop
     */
    {{ content:categories category_group_id="1" entry_id=entry_id }}

**Output**

.. code-block:: html

    <ul>
        Only categories relating to entry ID [6] ...
    </ul>
    
    /**
     * Output of example with entry_id variable found within a content loop
     */
    <ul>
        Only categories relating to entry ID [6] ...
    </ul>
    