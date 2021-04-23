# Apache

For the platform to function correctly the following Apache configurations are necessary. 

## Virtual Host Configuration

Ensure the following vhost sites have been configured.

- **/etc/apache2/sites-enabled/000-default.conf** &mdash; Handles all non-domain specific domain requests.  
- **/etc/apache2/sites-enabled/{domain-name}.{ext}.conf** &mdash; Handles all domain specific server requests. Generally all requets except static assets. 
- **/etc/apache2/sites-enabled/static.{domain-name}.{ext}.conf** &mdash; Handles static assets requests. Routes them all to the static resource controller.  

## Virtual Host Configuration Overrides

Ensure the following `.htaccess` files have been renamed from `.htaccess.sample` to `.htaccess`. 

```eval_rst
.. note::

    More info coming soon!

```

- **/public/.htaccess** &mdash; Main application entry point.  
- **/public/static/.htaccess** &mdash; Static assets entry point. Such as images, css, js, etc. 
