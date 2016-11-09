// app/models/todo.js
console.log ("< Info > Module todo.js loaded");

    // load mongoose since we need it to define a model
    var mongoose = require('mongoose');

    module.exports = mongoose.model('Todo', {
        text : String,
        done : Boolean
    });
	