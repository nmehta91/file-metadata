'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');
var mongoose = require('mongoose');
var api = require('./app/api/file-metadata.js')
var session = require('express-session');

var app = express();
require('dotenv').load();


mongoose.connect(process.env.MONGO_URI);


app.use('/public', express.static(process.cwd() + '/public'));




routes(app);
api(app);

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});