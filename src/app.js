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

    // $('#myList').html(localStorage.getItem('listItem'))


    // $('.add-items').submit(function(e) {
    //     e.preventDefault()
    //     console.log("hello")
    //     let item = $('.recipeItem').val()
    //     if (item) {
    //         $('#myList').append("<li>" + item + "<button class='remove'>x</button>" + "<button class='edit'>e</button>" + "<hr></li>")
    //         localStorage.setItem('listItem', $('#myList').html())
    //         $('#myItem').val("")
    //     }
    // })

    // $(document).on('click', '.remove', function() {
    //     $(this).parent().remove()
    //     localStorage.setItem('listItems', $('#myList').html())
    // })
});