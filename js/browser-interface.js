var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/api-interface').getRepos;

$(document).ready(function() {
  $('.getRepos').click(function() {
    $('.repoList').empty();
    var username = $('.userInput').val();

    getRepos(username);

  });

});
