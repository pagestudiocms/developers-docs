# Entries

## GET Entry List

<details class="opblock-details">
    <summary class="opblock-summary opblock-summary-get">
        <code>GET</code> <code>rest/v1/entries/entries-list</code> Returns a list of all entries from the database.
    </summary>

### Module 

Maps to `content/api/entries/list`.

### Parameters

Key	| Required | Type	| Example	| Description
--- | --- | --- | --- | ---
id | Yes | int | 1 | The entity ID of the record in the `entries` table

### Responses

| http code     | content-type                      | response                                                            |
|---------------|-----------------------------------|---------------------------------------------------------------------|
| `201`         | `text/plain;charset=UTF-8`        | `Configuration created successfully`                                |
| `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
| `405`         | `text/html;charset=utf-8`         | None                                                                |

</details>

## GET Entry Blocks 

<details class="opblock-details">
    <summary class="opblock-summary opblock-summary-get">
        <code>GET</code> <code>/rest/v1/content/entries/block-data/{id}</code> Returns the blocks object stored in the database for a given entry.
    </summary>

Maps to `content/api/entries/block_data_get`.

Entry Blocks (previously referred to as Portlets)

### Parameters

Key	| Required | Type	| Example	| Description
--- | --- | --- | --- | ---
id | Yes | int | `61` | The entity id of the page being requested.

### Responses

| http code     | content-type                      | response                                                            |
|---------------|-----------------------------------|---------------------------------------------------------------------|
| `201`         | `text/plain;charset=UTF-8`        | `Configuration created successfully`                                |
| `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
| `405`         | `text/html;charset=utf-8`         | None                                                                |

</details>

## UPDATE Entry Blocks

Updates blocks column in the database for a given entry.

<details class="opblock-details">
    <summary class="opblock-summary opblock-summary-post">
        <code>POST</code> <code>/rest/v1/content/entries/block-data</code> Updates blocks column in the database for a given entry.
    </summary>

Maps to `content/api/entries/block_data_post`.

Entry Blocks (previously referred to as Portlets)

### Parameters

None

### Payload

Key	| Required | Type	| Example	| Description
--- | --- | --- | --- | ---
id | Yes | int | `61` | The entity id of the page being requested.
portlets | Yes | string | `{"portlets":{}}` | A JSON object

### Responses

| http code     | content-type                      | response                                                            |
|---------------|-----------------------------------|---------------------------------------------------------------------|
| `201`         | `text/plain;charset=UTF-8`        | `Configuration created successfully`                                |
| `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
| `405`         | `text/html;charset=utf-8`         | None                                                                |

</details>