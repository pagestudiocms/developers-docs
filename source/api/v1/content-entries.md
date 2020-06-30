# Entries

## Entry

### Get Entries List 
Returns a list of all `entries` from the database.

```
POST rest/v1/entries/entries-list
```
Maps to `content/api/entries/list`.

#### Params

Key	| Required | Type	| Example	| Description
--- | --- | --- | --- | ---
id | Yes | int | 1 | The entity ID of the record in the `entries` table

### GET Entry Blocks (previously referred to as Portlets)

Retrieves a the blocks object stored in the database for a given entry and returns it in JSON format.

```
GET /rest/v1/content/entries/block-data/:id
```
Maps to `content/api/entries/block_data_get`.

#### Params

Key	| Required | Type	| Example	| Description
--- | --- | --- | --- | ---
id | Yes | int | `61` | The entity id of the page being requested.

### UPDATE Entry Blocks (previously referred to as Portlets)

Updates blocks column in the database for a given entry.

```
POST /rest/v1/content/entries/block-data
```
Maps to `content/api/entries/block_data_post`.

#### Params

Key	| Required | Type	| Example	| Description
--- | --- | --- | --- | ---
id | Yes | int | `61` | The entity id of the page being requested.
portlets | Yes | string | `{"portlets":{}}` | A JSON object
