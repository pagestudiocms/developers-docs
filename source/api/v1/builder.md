
Builder
=======

```eval_rst
.. sidebar:: Table of contents

   .. contents::
     :local:
     :depth: 2
```

## Content Types 

### GET ContentType
Retrives all information relating to a `ContentType`.

`GET /rest/v1/entries/content-type/:shortname`

Maps to `builder/api/content-type`.

#### Header

Key	| Required | Type	| Example	| Description
--- | --- | --- | --- | ---
API-KEY | Yes | string | | Twelve character length alphanumeric license key (not case sensitive)

#### Params

Key	| Required | Type	| Example	| Description
--- | --- | --- | --- | ---
shortname | Yes | string | pages | 

#### Body

Empty... no parameters required 

----


## Entries

### Get Entry Detail
Returns the details for a given entry 

```
GET rest/v1/entries/edit-entry-details/:id
```
Maps to `builder/api/get-entry-details`.

#### Params

Key	| Required | Type	| Example	| Description
--- | --- | --- | --- | ---
id | Yes | int | 1 | The entity ID of the record in the `entries` table

#### Response

```
{
  
}
```

### Update Entry Detail
Returns the details for a given entry 

```
POST rest/v1/entries/save-entry-settings
```
Maps to `builder/api/save-entry-settings`.

#### Params

Key	| Required | Type	| Example	| Description
--- | --- | --- | --- | ---
id | Yes | int | 1 | The entity ID of the record in the `entries` table

#### Response

```
{
  
}
```

### Delete Entry
Deletes the entry record from the `entries` table.

```
POST rest/v1/entries/delete-page
```
Maps to `builder/api/delete-page`.

#### Params

Key	| Required | Type	| Example	| Description
--- | --- | --- | --- | ---
id | Yes | int | 1 | The entity ID of the record in the `entries` table

#### Response

```
{
  
}
```

----


## Navigations 

### GET Single Navigation 
Retrives the basic information of a given navigation from the `navigations` table.  

```
GET rest/v1/entries/get-nav/:nav_id
```
Maps to `builder/api/get-nav`.

#### Params

Key	| Required | Type	| Example	| Description
--- | --- | --- | --- | ---
nav_id | Yes | int | 1 | The navigation Id from the `navigations` table. 

----


## Utilities 

### Parse Text 
Parses the contents of the 

```
POST rest/v1/entries/parser
```
Maps to `builder/api/parser`.

#### Params

Key	| Required | Type	| Example	| Description
--- | --- | --- | --- | ---
text | Yes | string | 1 | The text to be parsed
data | Yes | array | 1 | The array containing the variables to be parsed
