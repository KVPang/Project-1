//Add event listener to browser, which will capture both form values and redirect the user to a search 
//results page with those values included in the URL as query parameters. This will use the browser's location.replace() method.

var pageId = 0;

document.getElementById("form").addEventListener("submit", function() {
    var query = document.getElementById('searchWord');//placeholder
    var queryFormat = document.getElementById('dropDown');//placeholder



    window.location.replace();
    pageId = 1;

});