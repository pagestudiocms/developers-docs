# PageStudioCMS Developers Documentation v2.0+

This repo is home to the PageStudioCMS documentation source. 

* [PageStudioCMS Documentation](http://pagestudiocms.com/docs/)

## Getting Started

### 1. Install Python and Sphinx dependencies

Run the install script to set up Sphinx and required extensions:
```sh
bin/install-sphynx.sh
```

### 2. Install Node.js packages

Install the Node.js dependencies for the dev server and live reload:
```sh
npm install
```

### 3. Build documentation

To manually build the HTML docs:
```sh
make html
```

### 4. Run the development server with auto-reload

Start the combined dev server and watcher:
```sh
npm run start
```

This will:
- Serve the docs from `build/html` at [http://localhost:8080](http://localhost:8080)
- Watch for changes in the `source` folder and automatically rebuild docs and reload the browser

## Doc Versions

The documentation tags mirror the x.y release tags of PageStudioCMS, so the v1.2.0 documentation is on branch `v-1.2-master`, and so on. Once a new version of PageStudioCMS is in development, a new branch of documentation will be available on this repo. Please make sure when you are contributing a documentation change you are using the appropriate branch.

If you are creating a new page, it should fit reasonably within one of the existing sections. If you think we need a new section, or want to suggest some organizational changes, please email