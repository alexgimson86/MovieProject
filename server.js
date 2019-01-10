var express = require('express');
var app = express();
var request = require('request');
var cors = require('cors')
 
app.use(cors())
app.use('/public', express.static('public'));

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
app.get('/kidsMovies', function(req, res){
    var link ='https://api.themoviedb.org/3/discover/movie?api_key=baf70dcc60ac4c339602a8f30a38501d&language=en-US&certification_country=US&certification.lte=G&sort_by=popularity.desc'
    request(link, function(error, response, body) {
        var data = JSON.parse(body);
        var title = "";
        title = data.title
        var overview = data.overview
    
        res.render('kidsMovies.ejs', { data: data.results });
});
})
app.get('/badMovies', function(req, res){
    var link ='https://api.themoviedb.org/3/discover/movie?api_key=baf70dcc60ac4c339602a8f30a38501d&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1'
    request(link, function(error, response, body) {
        var data = JSON.parse(body);
        var title = "";
        title = data.title
        var overview = data.overview
    
        res.render('badMovies.ejs', { data: data.results });
});
})
app.get('/home', (req,res)=>{
    res.render('home.ejs');
});
app.listen(3000, function() {
    console.log("App is listening on port 3000");
});
