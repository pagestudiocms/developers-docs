# Legacy Navigation API

## GET Navigation Item

Retrives a single navigation item including it's meta data.

```
GET rest/v1/navigations/get-item/:id
```
Maps to `navigations/api/get-item`.

<hr />

## Retrive sinle navigation item

```
POST rest/v1/navigations/get-item
```
Maps to `navigations/api/get-item`.

<hr />

## Update Navigation 

Update single navigation item.

```
POST rest/v1/navigations/update-nav-item
```
Maps to `navigations/api/update-nav-item`.

<hr />

## GET Unlinked Pages

Retrives a list of entries (pages) not part of any navigation; orphaned pages. 

```
POST rest/v1/navigations/unlinked-pages
```
Maps to `navigations/api/unlinked-pages`.
