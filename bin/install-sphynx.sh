#!/bin/zsh

# Install Sphinx using pip
pip install sphinx

# Find the path to sphinx-build
SPHINXBUILD=$(which sphinx-build)

# Export the environment variable
export SPHINXBUILD=$SPHINXBUILD

# Print confirmation
echo "Sphinx installed. SPHINXBUILD set to $SPHINXBUILD"

# Install plugins 

pip install recommonmark
pip install sphinx-tabs sphinx_markdown_tables sphinx_design

# Install base theme 
pip install pydata-sphinx-theme