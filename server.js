// server.js
// where your node app starts

// init project
var express = require('express');
const jsdom = require('jsdom');
const axios = require('axios');

var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));


let getWikiPage = function () {
// ax that data
  return axios.get('https://en.wikipedia.org/wiki/List_of_Intel_codenames')
  .then(function (res) {
    // console.log(res);
    // return res.data;
    console.log(res.data);
  })
  .catch(function (error) {
    console.log(error);
  });

}

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  // response.sendFile(__dirname + '/views/index.html');
  getWikiPage();
  response.send('your new app name is:');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});