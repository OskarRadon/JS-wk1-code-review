var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('.getRepos').click(function() {

    var username = $('.userInput').val();

    $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(data) {
      for (var i in data) {
        // console.log(data[i].name);
        $('.repoList').append('<li><a href="' + data[i].html_url + '">' + data[i].name + '</li></a>');
      }

    });

  });

});

$(document).ready(function() {
  $('#time').text(moment());
});
