var APIKey = "NLdqxkPvJqO6uKxYcFaG24Zx4QdMXssY";
var article = "Trump"
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + article + "&api-key=" + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});

document.getElementById('search').onclick = function changeContent() {

    document.getElementById('search').innerHTML = "Hello";
    document.getElementById('search').style = "Color: red";
 
 }

 document.getElementById('clear').onclick = function changeContent() {

    document.getElementById('clear').innerHTML = "Hello";
    document.getElementById('clear').style = "Color: blue";
 
 }