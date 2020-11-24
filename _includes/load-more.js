$(document).ready( function() {

    hideLoadButtonIfNoMoreEntries();
    
    $("#load-more").click( function() {
        
        $("#load-more").html("Loading ...");
        currentPage++;

        $.get(url + currentPage, function(data) {
            $("#posts").append(data);
            hideLoadButtonIfNoMoreEntries();
            $("#load-more").html("Load more ...");
        });

    });
});

function hideLoadButtonIfNoMoreEntries() {
    if (currentPage >= (totalPosts/postsPerPage)) {
        $("#load-more").hide();
    }
}