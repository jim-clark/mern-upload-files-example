const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

// Always require near the top
require('dotenv').config();
// Connect to the server
// Make sure that dotenv is already required
require('./config/database');

const app = express();

app.use(logger('dev'));
// body parser middleware - adds properties to req.body
app.use(express.json());
// Configure both serve-favicon & static
// middleware to server from the 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));

// The following "catch all" route (note the *) 
// is necessary to return the index.html on ALL
// non-AJAX requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// Configure express app to listen on port 3001
// to avoid conflicting with the react server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});
