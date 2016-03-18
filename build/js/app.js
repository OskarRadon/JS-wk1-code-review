(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "70dd05afd126039fb71a3cf29c6bfdbc7dcfb6fe";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../.env":1,"./../js/api-interface":2}]},{},[3]);
