const router = require('express').Router();

router.get('/register', (req, res) => {
    res.render('pages/edituser', {
        activePage: 'edituser'
    });
});

router.get('/search', (req, res) => {
    res.render('pages/search', {
        activePage: 'search'
    });
});

router.get('/:nonprofit_slug', (req, res) => {
    res.render('pages/ngo', {
        activePage: false
    });
});

module.exports = router;