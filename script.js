var APIKey = "NLdqxkPvJqO6uKxYcFaG24Zx4QdMXssY";
var article = "Trump"
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + article + "&api-key=" + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});