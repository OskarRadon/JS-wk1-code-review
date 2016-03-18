var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('.getRepos').click(function() {
    $('.repoList').empty();
    var username = $('.userInput').val();

    $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(data) {
      for (var i in data) {
        // console.log(data);
        $('.repoList').append('<li><a href="' + data[i].html_url + '">' + data[i].name + '</li></a><p>' + data[i].description + '</p>');
      }

    }).fail(function(error) {
      console.log(error.responseJSON.message);
    });

  });

});
