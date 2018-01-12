const router = require('express').Router();

router.get('/', function (req, res) {
    res.render('pages/aboutUs', { activePage: 'aboutUs' });
});

module.exports = router;