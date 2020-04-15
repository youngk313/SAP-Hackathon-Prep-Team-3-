// https://expressjs.com/en/guide/routing.html


// REQUIRES
const lists = require('./data');
const express = require('express');
// as of Express 4, you need this:
// https://www.npmjs.com/package/body-parser
const bodyParser = require('body-parser');
const app = express();
// https://www.npmjs.com/package/jsdom
const { JSDOM } = require('jsdom');
const fs = require("fs");

function showNutritionFacts(str){
    var xhttp;
    if (str == "") {
        document.getElementById("FoodFacts").innerHTML = "";
        return;
    }
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("FoodFacts").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "getfoodfact.asp?q=" + str, true);
    xhttp.send();
}

app.get('/', function (req, res) {
    let doc = fs.readFileSync('./webApp.html', "utf8");
    //let dom = new JSDOM(doc);
    //let $ = require("jquery")(dom.window);
    //res.send(dom.serialize());
    res.send(doc);
});

app.use('/js', express.static('./js'))
app.use('/images', express.static('./images'))
app.use('/css', express.static('./css'))

app.get('/ajax-GET', function (req, res) {

    // set the type of response:
    res.setHeader('content-type', 'application/json');
    res.setHeader('X-Powered-By','Young');
    let d = new Date();

    res.send({ date: d });

})

app.get('/ajax-GET-list', function (req, res) {

    //res.setHeader('Content-Type', 'application/json');
    //console.log(req.query['format']);
    let formatOfResponse = req.query['format'];
    let dataList = null;

    if(formatOfResponse == 'burger-list') {

        res.setHeader('Content-Type', 'text/html');
        res.setHeader('X-Powered-By','McDonalds');
        dataList = lists.getburgers();
        res.send(dataList);

    } else if(formatOfResponse == 'salad-list') {

        res.setHeader('Content-Type', 'text/html');
        res.setHeader('X-Powered-By','McDonalds');
        dataList = lists.getSalads();
        res.send(dataList);

    } else if(formatOfResponse == 'salad-facts') {

        res.setHeader('Content-Type', 'application/json');
        res.setHeader('X-Powered-By','McDonalds');
        dataList = lists.getSaladfacts();
        res.send(dataList);

    } else if(formatOfResponse == 'side-list') {

        res.setHeader('Content-Type', 'text/html');
        res.setHeader('X-Powered-By','McDonalds');
        dataList = lists.getSides();
        res.send(dataList);

    } else if(formatOfResponse == 'side-facts') {

        res.setHeader('Content-Type', 'application/json');
        res.setHeader('X-Powered-By','McDonalds');
        dataList = lists.getSidefacts();
        res.send(dataList);

    } else if(formatOfResponse == 'drink-list') {

        res.setHeader('Content-Type', 'text/html');
        res.setHeader('X-Powered-By','McDonalds');
        dataList = lists.getdrinks();
        res.send(dataList);

    } else if(formatOfResponse == 'dessert-list') {

        res.setHeader('Content-Type', 'text/html');
        res.setHeader('X-Powered-By','McDonalds');
        dataList = lists.getDesserts();
        res.send(dataList);

    } else if(formatOfResponse == 'dessert-facts') {

        res.setHeader('Content-Type', 'application/json');
        res.setHeader('X-Powered-By','McDonalds');
        dataList = lists.getDessertfacts();
        res.send(dataList);

    } else if(formatOfResponse == 'breaky-list') {

        res.setHeader('Content-Type', 'text/html');
        res.setHeader('X-Powered-By','McDonalds');
        dataList = lists.getbreakfasts();
        res.send(dataList);

    } else if(formatOfResponse == 'burger-facts') {

        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getburgfacts();
        res.send(dataList);

    } else if(formatOfResponse == 'drink-facts') {

        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getdrinkfacts();
        res.send(dataList);

    } else if(formatOfResponse == 'breaky-facts') {

        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getbreakyfacts();
        res.send(dataList);

    } else {
        res.send({msg: 'Wrong format!'});
    }
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Notice that this is a 'POST'
app.post('/post-form', function (req, res) {
      res.setHeader('Content-Type', 'application/json');

      console.log("Stuff sent to server", req.body);

      res.send(["You sent me:", req.body]);

});

// for page not found (i.e., 404)
app.use(function (req, res, next) {
  res.status(404).send("<html><head><title>Page not found!</title></head><body><p>Nothing here.</p></body></html>");
});

// RUN SERVER
let port = 8000;
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});

// as of Express 4, you need this:
// https://www.npmjs.com/package/body-parser
