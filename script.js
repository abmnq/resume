$(document).ready(function() {
    $("section").hover(function() {
        $(this).css("font-weight", "bold");
    }, function() {
        $(this).css("font-weight", "normal");
    });
});