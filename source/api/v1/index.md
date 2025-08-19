API 
===

Version 1 of the API.

#### Galleries

<details class="opblock-details">
    <summary class="opblock-summary opblock-summary-post">
        <code>GET</code> <code>/rest/v1/entries/content-type/{shortname}</code>
    </summary>

##### Parameters

| name      |  type     | data type               | description                                                           |
|-----------|-----------|-------------------------|-----------------------------------------------------------------------|
| None      |  required | object (JSON or YAML)   | N/A  |

##### Responses

| http code     | content-type                      | response                                                            |
|---------------|-----------------------------------|---------------------------------------------------------------------|
| `201`         | `text/plain;charset=UTF-8`        | `Configuration created successfully`                                |
| `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
| `405`         | `text/html;charset=utf-8`         | None                                                                |

##### Example cURL

```shell
 curl -X POST -H "Content-Type: application/json" --data @post.json http://localhost:8889/
```

</details>

---

```eval_rst
.. toctree::
    :maxdepth: 3
    :hidden:
    :titlesonly:

    builder
    contact
    content-categories
    content-entries
    galleries
    navigations
    navigations/index
    settings
    users
```