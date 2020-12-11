---
layout: null
---
var idx = null;
var offset = 0;
var searchTerm;
const perPage = 2;
var posts = [
{%- for post in site.posts %}
{
    "title": "{{ post.title | xml_escape }}",
    "url": "{{ post.url }}",
    {%- assign summary = post.summary | default: post.description %}
    "summary": "{{ summary | xml_escape }}",
    "created": "{{ post.created }}",
    "updated": "{{ post.date }}",
    "categories": "{% for category in post.categories %}{{ category }}{% unless forloop.last %}, {% endunless %}{% endfor %}"
}{% unless forloop.last %},{% endunless %}
{%- endfor %}
];

$(document).ready(function() {

    $("#load-more").hide();

    $.getJSON("{{site.url}}/api/lunr_index.json", function(data) {
        idx = lunr.Index.load(data);
    });

    $("#search").on("keypress", function(e) {
        if (e.keyCode == 13) {
            searchTerm = $("#search").val()
            search()
            return false; 
        }
    });

    $("#load-more").click( function() {
        
        $("#load-more").html("Loading ...");
        offset += perPage;
        search();
    });
});


function search() {
    var results = idx.search(searchTerm);
    if (results.length > 0) {
        var resultText = "";
        var toResult = offset + perPage;
        
        if (toResult < results.length) {
            $("#load-more").show()
        } else {
            $("#load-more").hide();
            toResult = results.length;
        }
        
            for (var i = offset; i < toResult; i++) {
            var id = results[i]["ref"];
            var title = posts[id]["title"];
            var summary = posts[id]["summary"];
            var url = posts[id]["url"];
            resultText += `
                <span class="is-size-7">${ url }</span>
                <a href="{{ site.url }}${url}"><h1 class="is-size-5 mb-1">${ title }</h1></a>
                <p>${ summary }</p>`;
        }
        $("#results").append(resultText);
        
    } else {
        $("#results").html("<p>No results found...</p>");
    }
} 
