var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var port = process.env.PORT || 9999;
var app = express();
var mongoose = require('mongoose');
var movieModel = require('./models/movie');

mongoose.connect('mongodb://localhost/movie_website');

app.set('views', './views/pages');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'bower_components')));
app.listen(port);

console.log('server started on port ' + port);

// index
app.get('/', function (req, res) {
    // @param {Array} movies
    movieModel.fetch(function (err, movies) {
        if (err) console.log(err);
        res.render('index', {
            title: 'index',
            movies: movies
        });
    });
    // res.render('index', {
    //     title: '首页',
    //     movies: [{
    //         title: '123',
    //         _id: '1',
    //         poster: 'http://lorempixel.com/400/200/sports/1'

    //     }, {
    //         title: '456',
    //         _id: '2',
    //         poster: 'http://lorempixel.com/400/200/sports/2'
    //     }]
    // });
});

// detail
app.get('/movie/:id', function (req, res) {
    res.render('detail', {
        title: '详情',
        movies: [{
            title: '123',
            _id: '1',
            poster: ''
        }, {
            title: '456',
            _id: '2',
            poster: ''
        }]
    });
});

// admin 后台管理
app.get('/admin/movie', function (req, res) {
    res.render('admin', {
        title: '后台录入',
        movies: [{
            title: '123',
            _id: '1',
            poster: ''

        }, {
            title: '456',
            _id: '2',
            poster: ''
        }]
    });
});

// list
app.get('/admin/list', function (req, res) {
    res.render('list', {
        title: '电影列表',
        movies: [{
            title: '123',
            _id: '1',
            poster: ''

        }, {
            title: '456',
            _id: '2',
            poster: ''
        }]
    });
});
