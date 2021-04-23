# Local Development

Installation of the platform for in house developers. 

```eval_rst
.. sidebar:: Table of contents

    .. contents::
        :local:
        :depth: 2

```

## System Requirements

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
* MySQL >= 5.7 or greater

A modern and updated web browser

### PHP Settings 

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

## Local Development Server

A local development server has been provided with the help of Vagrant. To install the web application all that is required is to install Virtual Box and Vagrant. 
- (Windows only) Run VirtualBox as an Administrator to avoid symbolic link issues.
- Next download the repository to a location on your machine. 
Rename the following files:
    - `/src/.env.sample` to `/src/.env`
    - `/src/public/.htaccess.sample` to `/src/public/.htaccess`
    - `/src/app1/config/production/config.php.sample` to `/src/app1/config/production/config.php`
    - `/src/app1/config/production/database.php.sample` to `/src/app1/config/production/database.php`
- Configure OS hostname settings
    - Add entry to `192.168.56.100 pagestudiocms.local` in `/etc/hosts` (`c:\Windows\system32\drivers\etc\hosts` on Windows)
- Open `/src/.env` and change domain extention to `.local` i.e. `pagestudiocms.com` to `pagestudiocms.local` where appropriate.
- Lastly, `cd` into the root folder of the repository and run `vagrant up`. This will provision a new machine with everything needed to run the app.

## Building JS App

```
cd <app-root>/<app-version>/themes/admin/assets/js/app-src/
```

Run 
```
.\node_modules\.bin\rollup .\src\main.js --file ..\app\bundle.js --format iife
```

**OR**

From the project dir run: 

```
./bin/build-js-app.sh
```

## Creating A Pull Request 

```
git rebase -i <commit>

git rebase origin/develop

git commit --amend --reset-author --no-edit
```