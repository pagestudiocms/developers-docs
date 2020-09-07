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

* PHP >= 7.2 or greater with the following extensions installed `php-bcmath` `php-gd` `php-imagick` `php-mbstring` `php-mcrypt` `php-soap` `php-xml` `php-zip`
* MySQL >= 5.7 or greater

A modern and updated web browser

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

## Local Dev Environment (OUTDATED)

```eval_rst
.. danger:: This is highly discouraged. Please use the Vagrant setup instead. 
```

Developers who prefer a Windows/VirtualBox (Linux) setup. Follow this guide in setting up your env:

### Install Packages
1. composer 
2. git (if not installed by default)

### Configure Apache Modules 
1. rewrite
```
sudo a2enmod rewrite
sudo service apache2 restart
```
### Install PHP Extensions 
```
sudo apt-get install php-bcmath php-gd php-imagick php-mcrypt php-soap php-xml php-zip
```

### Configure Apache Memory Limit
1. php.ini
```
upload_max_filesize = 20M
post_max_size = 21M
memory_limit = 1024M
```

### Setup Link Between Windows (Host) and Virtualbox (Linux instance)
#### 1.a Install guest additions 

First insert the guest additions CD...

Install the Guest Additions (GA):
```
sudo apt-get install virtualbox-guest-additions-iso
```

Install the GA Utilities 
```
sudo apt-get install virtualbox-guest-utils
```

#### 1.b Manually Mount The CD-ROM (skip if step 1.a successful)
If the above doesn't work then you may need to mount the CD-ROM manually then run it's contents:

Start your VM
Devices > Insert Guest Additions CD image...
Manually mount the CD: 
```
sudo mount /dev/cdrom /media/cdrom
```
Install the necessary packages: 
```
sudo apt-get install make gcc linux-headers-$(uname -r)
```
Install the Guest Additions: 
```
sudo /media/cdrom/VBoxLinuxAdditions.run
```

#### 2 Mount Shared Folder (for VirtualBox 6.0 or newer)

As of now (version 6.0.10 of VirtualBox) has an option to make permanent and auto-mount options for shared folder, also mount point (at) in GUI of virtualbox. 

On guest Ubuntu: 
```
sudo apt-get install virtualbox-guest-utils
```

Add shared folder in GUI of VirtualBox.

Restart guest OS

### Install Open SSH for SSH Access
```
sudo apt-get install openssh-server
```

### Further Reading and Helpful Links
* [Install Apache on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-ubuntu-16-04)
* [Install MySQL on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-16-04)
* [Install LAMP on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-16-04)

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