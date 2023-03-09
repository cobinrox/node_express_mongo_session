/**
 * Main express app.
 * To run this app:
 * a) change to the root directory of the project.
 * b) run: npm install
 * c) run: node app.js
 * d) Open browser to http://localhost:3333
 * 
 * This file:
 * Imports various libraries.
 * Sets up MongoDB and MongoDBStore for server-side session storage.
 * Registers our app's routes/URLs.
 */

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser')

const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

/**
 * our application's routes/pages/URLs
 */
const utils = require('./utils');
const authRoutes = require('./routes/auth');
const toolsRoutes = require('./routes/tools');
utils.log('hi');

/**
 * Address for mongo db
 */
//const MONGODB_URI = 'mongodb://localhost:27017';
const MONGODB_URI = 'mongodb://mongoadmin:secret@localhost:27888';

/**
 * Our app's access port
 */
const HTTP_PORT = 3000;

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }));

const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

/** 
 * Set up server-side session object with secret code and mongoDBStore
 */
app.use(session({
    secret: 'secret code',
    resave: false,
    saveUnitialized: false, // always causes deprecation warning
    store: store
}));

/**
 * Register/tell express about the "routes" of our application
 */
app.use(authRoutes);
app.use(toolsRoutes);

mongoose
    .connect(
        MONGODB_URI
    )
    .then(result => {
        app.listen(HTTP_PORT);
    })
    .catch(err => {
        console.log(err);
    });