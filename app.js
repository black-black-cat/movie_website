var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');
app.listen(port);

console.log('server started on port ' + port);

// index
app.get('/', function(req, res) {
    res.render('index', {
        title: '首页'
    });
});

// detail
app.get('/movie/:id', function(req, res) {
    res.render('detail', {
        title: '详情'
    });
});

// admin
app.get('/admin/movie', function(req, res) {
    res.render('admin', {
        title: '后台录入'
    });
});

// list
app.get('/admin/list', function(req, res) {
    res.render('list', {
        title: '电影列表'
    });
});