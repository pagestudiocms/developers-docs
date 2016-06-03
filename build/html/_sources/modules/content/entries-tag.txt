
Entries Tag
===========

.. contents::
   :local:
   :depth: 1

Introduction
#####
	 
Queries and returns entries based on the provided parameters.

Using the single tag operator, entries will be outputted using the layout specified in the entry's content type.

.. code-block:: php 
    
    {{ content:entries content_type="pages" }}
    
Tag Block
*****

Using the tag block operator you can control what fields are outputted and how it is formatted.

.. code-block:: html

    {{ content:entries content_type="pages" }}
        <h1>{{ title }}</h1>
        {{ content }}
    {{ /content:entries }}

Pre-defined Variables
######

All entries have the following pre-defined tags that can be used anywhere in the content:

.. contents:: Table of Contents
		:local:

title=
****

Outputs the title of the page

.. code-block:: php

	{{ title }}

title_editable=
****

An inline editable title field

.. code-block:: php

	{{ title_editable }} 

created_date=
****

.. code-block:: php

    {{ created_date }} - Has an optional parameter to the date/time (ex: format="m/d/Y h:i:s")

modified_date=
**** 
		
.. code-block:: php

    {{ modified_date }} - Has an optional parameter to the date/time (ex: format="m/d/Y h:i:s")

url_title=
****
		
.. code-block:: php

    {{ url_title }} - The URL title of an dynamic route entry

slug=
****
		
.. code-block:: php

    {{ slug }} - The page URI of the current entry

dynamic_route=
****
		
.. code-block:: php

    {{ dynamic_route }} - The dynamic route URI

content_type=
****
		
.. code-block:: php

    {{ content_type }} - The content type short name of the current entries content type

status=
****
		
.. code-block:: php

		{{ status }} - The content type satus (draft|published|closed|disabled)

count=
****
		
.. code-block:: php

    {{ count }} - The current iteration count of the current entry in the loop

total_results=
****
		
.. code-block:: php

    {{ total_results }} - The total number of entries returned

author_id=
****
		
.. code-block:: php

    {{ author_id }} - The ID of the author of the entry

author=
****
		
.. code-block:: php

    {{ author }} - Outputs the first and last name of the author of the entry

meta_title=
****
		
.. code-block:: php

    {{ meta_title }} - Outputs the pages meta title

meta_description=
****

.. code-block:: php

    {{ meta_description }} - Outputs the pages meta description

meta_keywords=
****

.. code-block:: php

    {{ meta_keywords }} - Outputs the pages meta keywords


Parameters
##########
		
.. contents::
   :local:
   :depth: 2

backspace=
****

The number of characters to remove from the end of the content on the last iteration. This is used to trim unwanted formatting such as a comma or a line break on the last entry.

``backspace="2"``

**Example:**

.. code-block:: php 

    {{ content:entries content_type="pages" backspace="2" }}
        ...
    {{ /content:entries }}

**Output:**
Home, Page Not Found, About Us

.. note:: In this example the backspace is 2 because we trimmed a space and a comma. In order for there to be no space after the comma and be able to use a backspace of 1 there would have to be no whitespace between the comma and the closing ``{{ /content:entries }}`` tag.

category=
****

Allows you to get entries relating to a cagegory by passing the category ``id`` as a parameter. Accepts an integer as a parameter.

**Example:**

.. code-block:: php

    {{ content:entries content_type="pages" category="2" }}
        ...
    {{ /content:entries }}

content_type=
****

Used to return entries of a specified content type. To reference a content type supply the content type's short name.

``content_type="pages"``

To return entries of multiple content types, provide the list of short names separated by a pipe.

``content_type="pages|events"``

You can also return all entries but exclude entries of specific content types by using the keyword "not".

``content_type="not pages|events"``

entry_id=
****

Queries and returns a single entry by its ID. Great for embedding entries inside themes, content types, and other entries to prevent duplicating content.

``entry_id="18"``

limit=
****

Limit the number of entries returned.

``limit="10"``

order_by=
****

Order the returned entries by a content type's content field. To set the order by, provide the fields short tag name without brackets.

``order_by="title"``

You can also order by multiple fields by providing a pipe delimited list of field short tags.

``order_by="created_date|modified_date"``

If you would like entries to be completely random you can set use the keyword "random"

``order_by="random"``

See the sort paramater on how to set the sorting for the order bys.

paginate=
****

``paginate="top|bottom|both"``

The opening and closing tags for pagination. This can be used in conjunction with the ``paginate=`` parameter to determine where the contents of this tag will appear. See below for the available variables for use inside this tag. This tag is wrapped around either the single variables (see below) or the next/previous variable pairs.

.. code-block:: php

    {{paginate}} {{/paginate}}  
    
pagination_links=
****

This variable shows the current page you are on as well as “surrounding” pages in addition to links for next/previous pages and first/last pages.

You can use ``{{pagination_links}}`` in two ways. It can be used as a single variable:
    
.. code-block:: php
    
    {{paginate}} {{ pagination_links }} {{/paginate}}  

And the output looks like this:

.. code-block:: php

    « First  <  11 12 13 14 15 >  Last »

When used as a pair, you have a lot more flexibility with the markup:

.. code-block:: php

    {{ paginate }} 
			{{ if previous_page }} 
				<li><a href="{{ site_url }}/pages/{{ pagination_url }}" class="page-next"> < Previous</a></li> 
			{{ endif }} 
			
			... 
			
			{{ if next_page }} 
				<li><a href="{{ site_url }}/pages/{{ pagination_url }}" class="page-next">Next > </a></li> 
			{{ endif }} 
		{{ /paginate }} 

And the output looks like this:

.. code-block:: php

    < Previous ... Next >

.. important:: 

    In order for the pagination to work the ``limit=`` paramater must also be set in the content opening tag block.
		
.. note:: In order for the page to route properly the ``Dynamic Route`` option must set to true for the ``content type`` that you want to display paginated results. Otherwise you will end up with a 404 error when you click on the pagination links.

segment=
****

This allows you to query and return a single entry by its entry id or URL title defined in a segment in the current page's URL.

``segment="3"``

For example, if the current page's URL is:

http://somedomain.com/blog/entry/26

The third segment of this URL defines the entry id. So you could have {{ content:entries }} return the content for entry #26 by setting the segment to 3.

If no entry is found by the identifier in the specified segment, the page not found will be returned.
 
sort=
****

By default entries are sorted ascending. You can modify this by setting sort to "desc"

``sort="desc"``

If you have multiple order bys you can specify the sort for each order by with a pipe delimited list in the same order as the order bys.

``sort="asc|desc"``

status=
****

``status="published"``

Restricts the entries result set to a particular status. The three default and always available statuses that can be specified if needed are ``published`` ``draft`` and ``disabled``. If no status parameter is specified, only published status entries will be returned. You can choose multiple statuses using a pipe:

.. code-block:: php

	status="draft|reviewed|published|closed"

Or exclude statuses using “not”

.. code-block:: php

	status="not submitted|processing"

.. note:: 
	
	Disabled status entries WILL be included in the results when using “not” regardless of whether it is in the piped list.