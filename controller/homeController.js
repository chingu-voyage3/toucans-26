/**
 * Main Home page related operations will go here.
 */

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('pages/index', { activePage: 'index' });
});

module.exports = router;