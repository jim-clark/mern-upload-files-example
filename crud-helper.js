// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const Photo = require('./models/photo');

let p;