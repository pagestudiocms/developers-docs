# Lets Encrypt

# Certbot 

## Installing Certbot on Apache

See https://www.digitalocean.com/community/tutorials/how-to-set-up-let-s-encrypt-certificates-for-multiple-apache-virtual-hosts-on-ubuntu-14-04
See https://certbot.eff.org/lets-encrypt/ubuntuxenial-apache 

Certificates for multiple domains 

```
certbot-auto -d one.example.com -d two.example.com -d three.example.com -d example.org
```

## Wildcard 

https://github.com/veeti/manuale#usage

Wildcard certs are known as SAN's. To generate a SAN cert you'll need to specify the `--manual` directive. 

With Certbot you should add an additional `-d` item for each domain that needs to be covered by the cert.

```
manuale authorize example.com
manuale authorize www.example.com
manuale issue example.com www.example.com --output certs
```

```
*.example.org
*.live.example.org
*.staging.example.org
```

certbot --authenticator webroot --webroot-path /var/www/html/public --installer apache -d *.pagestudiocms.com -d pagestudiocms.com

See: https://medium.com/@saurabh6790/generate-wildcard-ssl-certificate-using-lets-encrypt-certbot-273e432794d7
certbot --manual --installer apache -d *.pagestudiocms.com -d pagestudiocms.com --preferred-challenges=dns

See: https://www.digitalocean.com/community/tutorials/how-to-set-up-let-s-encrypt-certificates-for-multiple-apache-virtual-hosts-on-ubuntu-14-04
https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-ubuntu-18-04

## Single Domain Renewal

```
# Renew single domain 
# 
# certbot --apache certonly -n -d *.pagestudiocms.com~
# certbot --apache certonly -n -d domain1.com~

certbot --manual --installer apache -d *.pagestudiocms.com -d pagestudiocms.com --preferred-challenges=dns
```

`/etc/letsencrypt/live/`

## New Renewal Method - 2019-12-17

```
certbot certonly --manual --manual-public-ip-logging-ok --preferred-challenges dns-01 --server https://acme-v02.api.letsencrypt.org/directory -d "*.pagestudiocms.com" -d pagestudiocms.com
```

---

**New Process - ***Doesn't work yet! Use command above.*****
* https://certbot-dns-digitalocean.readthedocs.io/en/stable/#
*  https://www.digitalocean.com/community/questions/tutorial-for-let-s-encrypt-wildcard?answer=44450
```
certbot certonly \
 --server https://acme-v02.api.letsencrypt.org/directory \
 --dns-digitalocean \
 --dns-digitalocean-credentials ~/.secrets/certbot/digitalocean.ini \
 -d \*.pagestudiocms.com \
 -d pagestudiocms.com
```