# Overview 

### Technology Stack 

A LAMP stack has been selected as the platform of choice. 

* Linux 
* Apache - See the [apache](./configuration/apache.html) page for additional information
* MySQL
* PHP

### Security (SSL)

Let's Encrypt is used for securing traffic to the server.

### Architechture 

**Hosting** 

The application is hosted on a Linux box...

**CDN**

Not yet implemented... 

**Deployment**

Deployment is handled via a PHP/Bash script that pulls the source code from a remote Git repo and deploys it. The source code can be found at  

```
./bin/deploy/deploy
```
