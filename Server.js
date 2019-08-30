var express = require('express');
var app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('images'));
app.use(express.static('css'));

let db = [];
let bodyParser = require('body-parser');

app.get('/', function (req, res) {
    res.render('index.html', {username: "Guest", TaskDb: db});
});

app.get('/addTask.html', function (req, res) {
    res.render('addTask.html', {username: "Guest", TaskDb: db});
});
app.get('/addTask', function (req, res) {
    res.sendFile(__dirname + '/views/newbook.html')
});
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())

app.get('/', function (rqe, res) {
    res.sendFile(__dirname + '/index.html');
});
    app.post('/newbookpost', function (req, res) {
        let newitems = {
            TaskName: req.body.TaskName,
            TaskDue: req.body.TaskDue,
            TaskDesc: req.body.TaskDesc
    
        
    };
    db.push(newitems);
  //  res.send("items have been inserted into the database");

app.get('/ListAll.html', function (req, res) {
    res.render('ListAll.html', {username: "Guest", TaskDb: db});
});




    });

app.listen(8080);