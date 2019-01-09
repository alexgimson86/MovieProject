var express = require('express');
var app = express();
var request = require('request');
var cors = require('cors')
 
app.use(cors())

app.get('/movies', function(req, res){
   /*var link =  'https://api.themoviedb.org/3/discover/movie?api_key=baf70dcc60ac4c339602a8f30a38501d?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22/76341';*/
   var link ='https://api.themoviedb.org/3/discover/movie?api_key=baf70dcc60ac4c339602a8f30a38501d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
   request(link, function(error, response, body) {
    var data = JSON.parse(body);
    var title = "";
    title = data.title
    var overview = data.overview

    res.render('movies.ejs', { data: data.results });
});
})
app.listen(3000, function() {
    console.log("App is listening on port 3000");
});