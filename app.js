const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');

const app = express();

// Set up view engine
app.set('view engine', 'ejs');

// Set up routes
app.use('/auth', authRoutes);

// Create home route
app.get('/', (req, res) => {
    res.render('home');
});

// The app is listening on port 3000
app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});