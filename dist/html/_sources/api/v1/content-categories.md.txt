# Categories

## Entry

### Get Category List 
Returns a list of all categories associated with a given `content_type`.

```
GET rest/v1/entries/categories/:content_type_id
```
Maps to `content/api/categories/list`.

#### Params

Key	| Required | Type	| Example	| Description
--- | --- | --- | --- | ---
content_type_id | Yes | int | 1 | The entity ID of the record in the `content_type` table

#### Response

```
{
  
}
```

### GET Category List 
Returns a list of all categories for a given category group.

```
GET rest/v1/entries/categories/:group-name
```
Maps to `content/api/categories/categories`.

#### Params

Key	| Required | Type	| Example	| Description
--- | --- | --- | --- | ---
group-name | Yes | string | `blog` | The `shortname` of the category group
