const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('pages/index', { activePage: 'index' });
});

module.exports = router;