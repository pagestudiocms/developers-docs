# PageStudioCMS Developers Documentation v2.0+

This repo is home to the PageStudioCMS documentation source. 

* [PageStudioCMS Documentation](http://pagestudiocms.com/docs/)

## Getting Started 

**Prerequisites**

Install Python3

```
```

Install Python3-pip 

```
# Verify the installation by checking the pip version:
pip3 --version
```

Install Sphinx

```
pip3 install -U sphinx
```

Build documentation 

```
# Run 
make html
```
## Doc Versions

The documentation tags mirror the x.y release tags of PageStudioCMS, so the v1.2.0 documentation is on branch `v-1.2-master`, and so on. Once a new version of PageStudioCMS is in development, a new branch of documentation will be available on this repo. Please make sure when you are contributing a documentation change you are using the appropriate branch.

If you are creating a new page, it should fit reasonably within one of the existing sections. If you think we need a new section, or want to suggest some organizational changes, please email [hello@cosmointeractive.co](mailto:hello@cosmointeractive.co).