// app/routes.js

// load the todo model

//var Todo = require('./models/todo');  
var Todo = require('../models/todo');  
// expose the routes to our app with module.exports
module.exports = function(app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/todos', function(req, res) {

        console.log (" POST /api/todos");

    });

    // create todo and send back all todos after creation
    app.post('/api/todos', function(req, res) {

        console.log (" POST /api/todos");

    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function(req, res) {

        console.log (" POST /api/todos");

    });

    // application -------------------------------------------------------------

   app.get('*', function(req, res) {       // This will load the single index.html file when we hit localhost:8080
        console.log ("< Info > GET Slash Call");  
          res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

    app.get('/overview', function(req, res){   console.log ("< Info >  GET /overview");  }); 
    app.get('/api/todos', function(req, res) { console.log ("< Info >  GET /api/todos");  });



    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

};