const router = require('express').Router();

// Auth login
router.get('/login', (req, res) => {
    res.render('login');
});

// Auth logout
router.get('/logout', (req, res) => {
    // Handle with passport
    res.send('logging out');
})

// Auth with google
router.get('/google', (req, res) => {
    // Handle with passport
    res.send('logging in with google');
});

module.exports = router;