# Layout Tags

```
{{ template:headers }}
```

```
{{ template:footers }}
```

```
{{ template:stylesheets }}
```

```
{{ template:javascripts }}
```

Adding scripts not defined in template.conf 

```
{{ template:javascripts name="jquery|boostrap|main" footer="true" }}
```

```
{{ template:partial name="${filename}" }}
```

```eval_rst
.. toctree::
    :maxdepth: 3
    :hidden:
    :titlesonly:

    add-javascript-tag
```