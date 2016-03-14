
Sitemap Module
===============

The sitemap module automatically outputs an XML sitemap for use with Google's Webmaster Tools and other similar services. 
It will map not only your site pages (via the Entries module)

.. contents::
   :local:
   :depth: 2

Generating a sitemap
#################

To generate a sitemap simply point your browser to ``/sitemap`` e.g. ``http://yourwebsite.com/sitemap`` though you will see a white page for the time being, your sitemap was successfully generated.

**Sitemap location:**

:: 
  
    /sitemap.xml

**Sample:**

.. code-block:: xml 

    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
              http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <url>
        <loc>http://website.com/home</loc>
        <lastmod>2015-11-18T10:12:45-05:00</lastmod>
        <changefreq>hourly</changefreq>
        <priority>0.8</priority>
      </url>
      
      ...

    </urlset>

.. toctree::
    :titlesonly:
    :maxdepth: 1

    facebook-tag