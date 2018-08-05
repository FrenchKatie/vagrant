var userInput;
$("#btn").click(function(){
    event.preventDefault();
    userInput = document.getElementById("input").value;
    console.log(userInput);

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "58278a790e1042c691e2b37fdfe78dcd",
      'q': "" + userInput + ""
    });
    console.log(url);
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
        var items = result.response.docs;
        console.log(items);
        $("#main").html("");
        for (var i = 0; i < items.length; i++) {
            var headline = items[i].headline.main;
            var snippet = items[i].snippet;
            main.insertAdjacentHTML('beforeend' , "<div class='headlineTxt'>" + headline + "</div><div class='snippetTxt'>" + snippet + "</div><br>");
        }
    }).fail(function(err) {
        throw err;
    });
});

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "58278a790e1042c691e2b37fdfe78dcd",
});
$.ajax({
    url: url,
    method: 'GET',
}).done(function(result) {
    var items = result.response.docs;
    console.log(items);
    for (var i = 0; i < items.length; i++) {
        var headline = items[i].headline.main;
        var snippet = items[i].snippet;
        main.insertAdjacentHTML('beforeend' , "<div class='headlineTxt'>" + headline + "</div><div class='snippetTxt'>" + snippet + "</div><br>");
    }
}).fail(function(err) {
    throw err;
});
