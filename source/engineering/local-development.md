# Local Development

Installation of the platform for in house developers. 

```eval_rst
.. sidebar:: Table of contents

    .. contents::
        :local:
        :depth: 2

```

## Development Server

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

From the project root run: 

```
./bin/build-js-app.sh
```

## Creating A Pull Request 

```
git rebase -i <commit>

git rebase origin/develop

git commit --amend --reset-author --no-edit
```