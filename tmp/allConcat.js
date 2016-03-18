var apiKey = require('./../.env').apiKey;


var getRepos = function(username) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(data) {
    for (var i in data) {
      // console.log(data);
      $('.repoList').append('<li><a href="' + data[i].html_url + '">' + data[i].name + '</li></a><p>' + data[i].description + '</p>');
    }
  });
}

exports.getRepos = getRepos;





// if (data[i].description === "") {
//   return "<i>No description</i>";
// } else {
//   return data[i].description;
// }

var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/api-interface').getRepos;

$(document).ready(function() {
  $('.getRepos').click(function() {
    $('.repoList').empty();
    var username = $('.userInput').val();

    getRepos(username);

  });

});
