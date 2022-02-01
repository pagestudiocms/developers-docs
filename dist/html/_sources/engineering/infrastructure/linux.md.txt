# Linux

For the platform to function correctly the following Linux configurations are necessary. 

## Cron

In order to maximize security there are certain tasks that are offloaded to the Linux system to perform. The following cron jobs check the database for additional scripts to execute.

Create the following cron jobs under the root user. 

```
*/1 * * * * /var/www/html/bin/cert-request-queue-cron
*/1 * * * * /var/www/html/bin/cron-crontab-scheduler-reader
```
