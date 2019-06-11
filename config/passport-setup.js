const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(
    new GoogleStrategy({
        // Options for the Google strategy
        clientID: '456316562554-bisft4cu0oon04i9qe7a5fjuteo5m63p.apps.googleusercontent.com',
        clientSecret: 'hipX2ywV3Ju0_ZDIc6-Vcq1x'
    }), ( ) => {
        // passport callback function
    }
);