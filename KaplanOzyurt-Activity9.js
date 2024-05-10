$(document).ready(function() {
    // preload images
    $("#image_list a").each(function() {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    // set up event handlers for links    
    $("#image_list a").click(function(evt) {
        evt.preventDefault(); // cancel the default action of the link

        var imageURL = $(this).attr("href");
        var caption = $(this).attr("title");

        // fade out the current image and caption
        $("#caption").fadeOut(1000);
        $("#image").fadeOut(1000, function() {
            // callback function to display the new image and caption after fade out
            $("#image").attr("src", imageURL).fadeIn(1000);
            $("#caption").text(caption).fadeIn(1000);
        });
    }); // end click

    // move focus to first thumbnail
    $("li:first-child a").focus();
}); 
