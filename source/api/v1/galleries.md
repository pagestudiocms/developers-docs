
# Galleries

## Albums

### GET Albums
Retrives a list of all albums.

```
GET rest/v1/galleries/albums
```
Maps to `galleries/api/albums/index`.

### Create Album
Creates a single album

```
POST rest/v1/galleries/albums
```
Maps to `galleries/api/albums/index`.

#### Body

```
{
  
}
```

### GET Album Images
Retrieves a list of images associtated with a given album (gallery).

```
GET rest/v1/galleries/albums/images/:galleryId
```
Maps to `galleries/api/albums/images`.

#### Params

Key	| Required | Type	| Example	| Description
--- | --- | --- | --- | ---
galleryId | Yes | int | 1 | 

### GET Album Categories
Retrieves a list of categories by `group-name`.

```
GET rest/v1/galleries/albums/categories/:group-name
```
Maps to `galleries/api/albums/categories`.

#### Params

Key	| Required | Type	| Example	| Description
--- | --- | --- | --- | ---
group-name | Yes | string | `summer-event` | 
