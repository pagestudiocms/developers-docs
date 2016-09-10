
Change Log
==========

Version 1.3.0
#############

**Release Date:** August 5th, 2016

- **New feature:** All modules must now be installed prior to be used. `Issue #36 <https://github.com/cosmointeractive/pagestudiocms/issues/36>`_.
- **Enhancement:** Incorporated a new profiler. 
- **Bugfix:** Fix content encoding error when creating thums via ajax when GZip is turned on. See `issue #39 <https://github.com/cosmointeractive/pagestudiocms/issues/39>`_.
- **Enhancement:** Deprecated KCFinder, use FileManager for images instead. File Manager has better support for mobile (touch) devices. 
- **Enhancement:** Added ability to modify admin theme menu from any module.
- **New Feature:** Added ability to detect mobile devices in templates and to redirect to specific urls.
- **Enhancement:** Sitemap module now prints a sitemap as oppose to generating an actual file.

Version 1.2.0
#############

**Release Date:** June 7th, 2015

- **Enhancement:** Added ability to delete Grid fields. Grid fiels have now been pushed to an alpha status.
- **Enhancement:** Upgraded filemanager and integrated it with CKEditor. Set default session vars that allows for different upload folder when set.
- **Bugfix:** Fixed an issue with the Filemanager image preview.
- **Bugfix:** Fixed an issue where adding new Grid fields performed an update rather than an insert, and thus deleted existing fields in the database.
- **Enhancement:** Models can be loaded from anywhere. See `issue #32 <https://github.com/cosmointeractive/pagestudiocms/issues/32>`_.
- **Bugfix:** Fixed an issue where users were being logged in automatically even when activation required was set to true.
- **Enhancement:** Upgraded PHPMailer from version 5.1 to 5.2.15 (a version that better intergrades into CI and is available to all controllers and models).
- **Bugfix:** Fixed an issue with the contact module `issue #31 <https://github.com/cosmointeractive/pagestudiocms/issues/31>`_.
- **Enhancement:** Added loading spinner to ajax submitted forms `Issue #27 <https://github.com/cosmointeractive/pagestudiocms/issues/27>`_.
- **New feature:** Introduced a new file manager `Issue #30 <https://github.com/cosmointeractive/pagestudiocms/issues/30>`_.
- **Enhancement:** Added support for Composer `Issue #29 <https://github.com/cosmointeractive/pagestudiocms/issues/29>`_.
- **Enhancement:** Pagination next and previous links can be used in the pagination tag pairs. See here `Issue #28 <https://github.com/cosmointeractive/pagestudiocms/issues/28>`_.
- **Enhancement:** Added an ability to the ``content`` module that allows it to filter entries by ``status``.
- **Enhancement:** Added the ability to add static routing to content types. See more here `Issue #25 <https://github.com/cosmointeractive/pagestudiocms/issues/25>`_.
- **Bugfix:** Fixed an issue with the experimental Grid field where Grid Fields are appearing on all entry of the same content_type `issue #24 <https://github.com/cosmointeractive/pagestudiocms/issues/24>`_.
- **New feature:** Introduced a new experimental feature `Issue #9 <https://github.com/cosmointeractive/pagestudiocms/issues/9>`_ Grid field type that allows various content types to be grouped together. This will allow for more entries customization. 
- **Bugfix:** Fixed `issue #20 <https://github.com/cosmointeractive/pagestudiocms/issues/20>`_.
- **Bugfix:** Fixed an issue where the sortable handle pointer icon was missing in the new admin theme `Issue #22 <https://github.com/cosmointeractive/pagestudiocms/issues/22>`_.
- **New feature:** `Issue #23 <https://github.com/cosmointeractive/pagestudiocms/issues/23>`_ "Individual entries can now have their own theme layout and rely on the ``content_type`` layout as fallback."
- **Update:** Password reset method now uses PHPMailer for sending smtp email. Random password is now humanly readable. 
- **New feature:** `Issue #21 <https://github.com/cosmointeractive/pagestudiocms/issues/21>`_ "Added ability to auto generate sitemap"
- **New feature:** `Issue #16 <https://github.com/cosmointeractive/pagestudiocms/issues/18>`_ "Added ability to display categories relating to an entry"
- **Update:** Fixed a few issues with the installer.
- **Bugfix:** Fixed `Issue #16 <https://github.com/cosmointeractive/pagestudiocms/issues/16>`_ "Issue unable to locate default theme". 
- **Bugfix:** Fixed `Issue #15 <https://github.com/cosmointeractive/pagestudiocms/issues/15>`_ "Invalid Query: Invalid default value for 'end'". 
- **New feaure:** New responsive admin theme
- **Update:** Applied new page styles to password reset page
- **Bugfix:** Fixed `Issue #14 <https://github.com/cosmointeractive/pagestudiocms/issues/14>`_ "Unknown column 'published_date' in field list". 
- **New feature:** Added new variables/fields to the galleries module | `Issue #13 <https://github.com/cosmointeractive/pagestudiocms/issues/13>`_
- **New feature:** Auto generating URL slugs for entries | `Issue #10 <https://github.com/cosmointeractive/pagestudiocms/issues/10>`_ 
- **Update** Navigation plugin now supports Bootstrap navbar HTML markup | `Issue #11 <https://github.com/cosmointeractive/pagestudiocms/issues/11>`_ 
- **New feature:** New Facebook Plugin that displays albums and photos
- **New feature:** Entry search, ability to build forms that search entry field data
- **Update** Added html undeordered list markup as default for pagination links
- **Update** Fixed `issue #6 <https://github.com/cosmointeractive/pagestudiocms/issues/6>`_  by upgrading to the latest Google PHP API
- **Update:** `#2 <https://github.com/cosmointeractive/pagestudiocms/issues/2>`_ support for recurring events
- **Bugfix:** Fixed `Issue #4 <https://github.com/cosmointeractive/pagestudiocms/issues/4>`_  dropdowns in editor navigation overlapping each other
- **Update:** Added support to calendar module for reocurring events
- **Bug Fix:** Fixed `Issue #1 <https://github.com/cosmointeractive/pagestudiocms/issues/1>`_  improperly formatted events json
- **Update:** Upgraded to CodeIniter 2.2.4
- **New feature:** Ellipsis helper now accepts template tag variable
- **New feature:** Image Thumnail helper now accepts template tag variable
- **New feature:** Contact module
- **New feature:** Added support for WordPress like shortcodes
- **New feature:** Added ability to check if a gallery exists without first outputting content to HTML
- **Update:** Upgraded to latest Lex Parser 