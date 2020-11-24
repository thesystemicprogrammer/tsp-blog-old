---
layout: null
---
$(document).ready( function() {
    $("#load-random-post").click( function() {
        var totalPosts = {{ site.posts.size | default: 0 }};
        $.get("{{site.url}}/api/post-index.json", function(data) {
            var index = Math.floor(Math.random() * (+totalPosts - 1)) + 1;
            window.location.href = data[index].url;
        });

    });
});