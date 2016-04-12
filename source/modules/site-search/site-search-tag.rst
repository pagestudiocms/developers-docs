
Site Search Tag
============

Create a search form with the Search plugin using double-tag syntax. You can generate two types of forms. One with a search button, another without. 

The ``search:form_simple`` method generates a form without the search button 

.. code-block:: php 

    {{ search:form_simple placeholder="Type to search..." redirect="search" }}

This outputs the following HTML markup 
		
.. code-block:: html 

	<div class="inline-search-form">
		<form accept-charset="utf-8" action="http://website.com/search" method="post">
			<input id="search-box" name="search_terms" placeholder="Type to search..." type="text" value="">
		</form>
	</div>

The ``search:form`` method generates a form with a search button 

.. code-block:: php 

		{{ search:form label="yes|Type to search..." placeholder="Search..." content="entries|blog|calendar" limit="5" redirect="page-name" }}

This outputs the following HTML markup 
		
.. code-block:: html 

		<form accept-charset="utf-8" action="http://website.com/page-name" method="post">
				<input id="search-box" name="search_terms" placeholder="Type to search..." type="text" value="">
				<input name="search" type="submit" value="Search">
		</form>

Parameters
##########

.. contents::
   :local:
   :depth: 1

label=
******

Outputs a label tag before the form. To set the this option to true simply add ``yes``. Adding a pip ``|`` delimeter will 
will allow you specify the text that will show in the label tag.

**Example**

``label="yes|Search site"``

**Output**

.. code-block:: html

		<label for="search-box">Search site</label>
   
placeholder=
******

The text that appears within the input field. 

**Example**

``placeholder="Enter your search terms..."``

**Output**

.. code-block:: html

		<input id="search-box" name="search_terms" placeholder="Enter your search terms..." type="text" value="">

redirect=
******

To redirect to after user hits enter on the form.

.. toctree::
    :maxdepth: 2
