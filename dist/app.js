"use strict";

$(document).ready(function () {

    var apiBase = "https://api.myjson.com/bins/f4ayd";
    var apiData = [];

    var options = {
        method: "GET"
    };

    fetch(apiBase, options).then(function (response) {
        return response.json();
    }).then(function (responseAsJson) {
        data = responseAsJson.recipes;
        var publicData = " ";

        for (var i = 0; i < data.length; i++) {
            $('.recipeList').append("<article class='recipeItem'><img src='" + data[i].photoUrl + "' alt='photo of recipe'><p>" + data[i].title + "</p></article>");
        }
    });

    $('#myList').html(localStorage.getItem('listItem'));

    $('.add-items').submit(function (e) {
        e.preventDefault();
        var item = $('#myItem').val();
        if (item) {
            $('#myList').append("<li>" + item + "<button class='remove'>x</button>" + "<button class='edit'>e</button>" + "<hr></li>");
            localStorage.setItem('listItem', $('#myList').html());
            $('#myItem').val("");
        }
    });

    $(document).on('click', '.remove', function () {
        $(this).parent().remove();
        localStorage.setItem('listItems', $('#myList').html());
    });
});