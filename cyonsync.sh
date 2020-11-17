#!/bin/bash

#
#   Generates the site and syncs the files with the hostes webfiles under 
#   https://thesystemicprogrammer.com
#

BLOG_DIR=/home/thomas/blog/tsp

jekyll build -s $BLOG_DIR -d $BLOG_DIR/_site
rsync -acv $BLOG_DIR/_site/. tomber@tomber.cyon.site:public_html/tsp