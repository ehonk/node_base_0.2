


// server.js (new)
   // set up ======================================================================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var mongoose = require('mongoose');                     // mongoose for mongodb
    var port     = process.env.PORT || 8080;                // set the port
    var database = require('./config/database');            // load the database config
    var morgan = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)



// configuration ===============================================================


mongoose.connect(database.url); 
//mongoose.connect('mongodb://node:node@mongo.onmodulus.net:27017/uwO3mypu');     // connect to mongoDB database on modulus.io

var Schema = mongoose.Schema;

var logSchema = new Schema({
  author: String,
  module:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean
});
var Log = mongoose.model('Log', logSchema);
var logline = new Log({ author: 'nodejs', module: 'server.js' });

logline.save(function (err, logline) {
  if (err) return console.error(err);
  console.log ('mongoose saved');
});


app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// routes ==============================================================
require('./app/routes')(app);


        // listen (start app with node server.js) ======================================
    if (!module.parent) {
    app.listen(8080);
    console.log('++++++++++++++++  node server running +++++++++++++++++++');
    console.log("App listening on port 8080");
    console.log("< Info > NodeJS Version: " + process.version);
    }