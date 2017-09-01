$(document).ready(function() {

    var apiBase = `https://api.myjson.com/bins/f4ayd`
    var apiData = []

    const options = {
        method: "GET"
    }

    fetch(apiBase, options)
        .then(response => response.json())
        .then(responseAsJson => {
            data = responseAsJson.recipes
            let publicData = " "

            for (var i = 0; i < data.length; i++) {
                $('.recipeList').append("<article class='recipeItem'><img src='" + data[i].photoUrl + "' alt='photo of recipe'><p>" + data[i].title + "</p></article>")
            }

        });

    if (localStorage) {
        console.log("Local Storage approved!")
    } else {
        console.log("Local Storage denied!")
    }

});