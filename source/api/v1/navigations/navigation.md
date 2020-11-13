# Navigation

## Create

Creates a navigation menu without child items.

```
PUT rest/v1/navigation/create
```

Maps to `navigations/api/navigation`.

#### Header

Key	| Required | Type	| Example	| Description
--- | --- | --- | --- | ---
API-KEY | Yes | string | | Twelve character length alphanumeric license key (not case sensitive)
SITE-ID | Yes | string | Site unique ID |


#### Body

Key	| Required | Type	| Example	| Description
--- | --- | --- | --- | ---
title | Yes | string | Main Menu | A title to identify the navigation by.
shortname | Yes | string | main-menu | A unique, comma-delimited string to idenfy the navigation by.

**Body Example**

```
{
	"title": "Secondary Navigation",
	"shortname": "secondary-navigation"
}
```

#### Response

```
{
  
}
```

--- 

## Delete

Deletes a navigation and its child items.

```
DELETE rest/v1/navigation/delete
```

Maps to `navigations/api/navigation`.

#### Header

Key	| Required | Type	| Example	| Description
--- | --- | --- | --- | ---
API-KEY | Yes | string | | Twelve character length alphanumeric license key (not case sensitive)
SITE-ID | Yes | string | Site unique ID |


#### Body

Key	| Required | Type	| Example	| Description
--- | --- | --- | --- | ---
navId | Yes | string | 2 | Navigation ID, the database entity ID.

**Body Example**

```
{
	"navId": 2
}
```

#### Response

```
{
  
}
```