---
layout: null
---
var totalPosts = {{ site.posts.size | default: 0}};
var postsPerPage = {{ site.pagination.per_page }};
var currentPage = 1;
var url = "{{ site.url }}/api/blog/all-";

{% include load-more.js %}