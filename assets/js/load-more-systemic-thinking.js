---
layout: null
---
var totalPosts = {{ site.categories["Systemic Thinking"].size | default: 0 }};
var postsPerPage = {{ site.pagination.per_page }};
var currentPage = 1;
var url = "{{ site.url }}/api/blog/systemic-thinking-";

{% include load-more.js %}