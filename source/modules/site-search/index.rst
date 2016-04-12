
Site Search Module
===============

The Search module allows you to search for anything, anything at all. The way this works is by building up an "index" of searchable items in a "Search index". This index contains fields that can linked back to specific "entries" with some information about what they are called, and what URL the entry can be found on. 

.. contents::
   :local:
   :depth: 2

To setup the search feature you need to create a template page. You must also create a ``content_type`` and set its name to ``search``, then create a search page and set its URL to ``website.com/search``. 

Then follow the guide in the template tags to setup the form. 
	 
Tempalte Tags
#############
		
.. toctree::
    :maxdepth: 1
		
    site-search-tag