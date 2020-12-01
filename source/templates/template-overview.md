# Template Overview

PageStudio website templates have different [insertion points](#) where content can be attached while using the [Visual Editor](/cms/visual-editor/index) that display specific content. To support all available functionality each PageStudio template must contain a specific set of predefined directives, folders and files. This page is aimed at developers looking to better understand the template file and folder hierarchy. 

## Languages & Filetypes

Templates are created using traditional front-end code languages like HTML, CSS, and JavaScript. HTML pages are typically embeded with our own custom variable syntax known as the "Lex Parsing" language to identify [insertion points](#) and to perform basic conditional logic.

## Folder Hierarchy

The following predefined folder structure is required for a properly functioning PageStudio website.

* **assets** design assets &mdash; Stylesheets, JavaScripts, images, fonts and icons
* **layouts** static files making up an entire page layout &mdash; default.html, blog_list.html, blog_item.html, category_list.html
* **partials** partial files to be embeded into layout files &mdash; header.html, footer.html, sidebar.html
* [root] config files &mdash; template.conf, template-preview.png

## Folders Explained 

Further explaination of the pre-defined template folder hierarchy.

**/assets/**

This folder contains images, svg, icons, css, and javascript files. These files can be further organized into folders of their own and may use separate hierarchies. 

```eval_rst

.. note:: CSS, JavaScript, and font files will only be added into the HTML `<head>` tag if they are defined in the `template.conf` file. 

```

```eval_rst

.. warning:: Avoid uploading large binary files such as PDFs to the **assets** folder. Rather, use the **Filemanager** instead.

```

**/layouts/**

This folder contains static HTML pages which may include embeded partial HTML files or not. Typically, though not required, these files will include [insertion points](#) where content from the [Visual Editor](/cms/visual-editor/index) can be added during content editing. 

**/partials/**

This folder contains reusable static HTML files meant to be embeded into layout files. Making up a complete page. Typical use case is the futher break down of template files into resuable bits and pieces (header.html, footer.html, nav.html). A **header.html** as an example may contain HTML code from the opening `<!DOCTYPE html>` tag to the opening `<body>` tag, to even the opening `<main>` tag. **footer.html** may include anything from `</main>`, `</body>`, to the closing `</html>` tag.

**/[root]/**

The root folder is the main folder containing all the aforementioned folders. It usually carries the name of your template. At its base are two **required** files &mdash; [template.conf](/templates/template-files/template-configuration) and [template-preview.png](/templates/template-files/template-preview-image).