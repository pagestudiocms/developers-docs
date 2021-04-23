# Infrastructure

Installation of the platform for in house developers. 

```eval_rst
.. sidebar:: Table of contents

    .. contents::
        :local:
        :depth: 2

```

**System Requirements**

A web host or server with:

* PHP >= 7.2 or greater with the following extensions installed:
    ```
    php7.2-bcmath
    php7.2-bz2
    php7.2-cli
    php7.2-curl
    php7.2-gd
    php7.2-imagick
    php7.2-intl
    php7.2-json
    php7.2-mbstring
    php7.2-mysql
    php7.2-opcache
    php7.2-soap
    php7.2-sqlite3
    php7.2-xml
    php7.2-xsl
    php7.2-zip
    ```
* MySQL >= 8 or greater

A modern and updated web browser.

**PHP Settings**

The platform allows file size uploads max of 30MB. To ensure this works the following settings must be applied in the php settings. 

**php.ini**

```
...

; Maximum file size of post data that PHP will accept.
post_max_size = 30M

...

; Maximum allowed file size for uploaded files.
upload_max_filesize = 30M

```

text

```eval_rst
    .. toctree::
        :maxdepth: 3
        :hidden:
        :titlesonly:

        overview
        apache
        mysql
        local-development
        plugins/index
```