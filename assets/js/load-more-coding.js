---
layout: null
---
var totalPosts = {{ site.categories["Coding"].size | default: 0 }};
var postsPerPage = {{ site.pagination.per_page }};
var currentPage = 1;
var url = "{{ site.url }}/api/blog/coding-";

{% include load-more.js %}