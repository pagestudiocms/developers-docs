
Gallery Tag
===========

This tag block allows you to output and format a gallery's images.

.. code-block:: html
    
    {{ galleries:gallery gallery_id="1" }}    
        <div>
            <img src="{{ helper:image_thumb image=image width="150" height="150" crop="true" }}" alt="{{ alt }}" />
            <h3>{{ title }}</h3>
            {{ description }}
        </div>
    {{ /galleries:gallery }}

Tags
######

The following tags are available for use in the tag block's content.

+-------------------+----------------------------------------------------------+
| Tag               | Description                                              |
+===================+==========================================================+
| {{ alt }}         | Outputs alternative text defined for the image. Intended |
|                   | for use in the <img> alt attribute.                      |
+-------------------+----------------------------------------------------------+
| {{ count }}       | Outputs the current image pointer in the array.          |
+-------------------+----------------------------------------------------------+
| {{ description }} | Outputs the description that was defined for the image.  |
+-------------------+----------------------------------------------------------+
| {{ image }}       | Outputs the full url for the current image. (Note:       |
|                   | Optional parameters are available for thie tag.)         |
+-------------------+----------------------------------------------------------+
| {{ link }}        | Outputs an optional link. Provides the ability to link   |
|                   | the image to another page.                               |
+-------------------+----------------------------------------------------------+
| {{ link_text }}   | Outputs (optional) link text.                            |
+-------------------+----------------------------------------------------------+
| {{ title }}       | Outputs the title that was defined for the current image.|
+-------------------+----------------------------------------------------------+

Parameters
##########

``gallery_id= *Required`` The id or the variable name of the gallery you would like to render and output. 

Example
*******

Using the glallery module to render a slideshow.

.. note:: You can use the ``gallery_exists`` function to check if a given gallery exists before displaying any HTML to the screen. 

.. code-block:: html
    
    {{ if {galleries:gallery_exists gallery_id="1"} }}
        <!-- flexSlider -->
        <div class="flexslider">
            <ul class="slides">
                {{ galleries:gallery gallery_id="1" }}
                <li>
                    <img src="{{ helper:image_thumb image=image crop="false"}}" alt="{{ alt }}" />
                </li>
                {{ /galleries:gallery }}
            </ul>
        </div>
    {{ endif }}

Alternative option to validate if a slideshow exists. 
    
.. code-block:: html

    {{ if slideshow }}
        <!-- flexSlider -->
        <div class="flexslider">
            <ul class="slides">
                {{ galleries:gallery gallery_id=slideshow }}
                <li>
                    <img src="{{ helper:image_thumb image=image crop="false"}}" alt="{{ alt }}" />
                </li>
                {{ /galleries:gallery }}
            </ul>
        </div>
    {{ endif }}
    
.. note:: **slideshow** is the name of your gallery content_type field name.

.. code-block:: php 

    gallery_id="2"