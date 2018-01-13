/**
 * Responsible for handling non profit related logics.
 */
const router = require('express').Router();

// register a new entry for non-profit
router.get('/register', (req, res) => {
    res.render('pages/edituser', {
        activePage: 'edituser'
    });
});

// search existing non-profit
router.get('/search', (req, res) => {
    res.render('pages/search', {
        activePage: 'search'
    });
});

// display non-profit details - single page via Slug
router.get('/:nonprofit_slug', (req, res) => {
    res.render('pages/nonprofit', {
        activePage: false
    });
});

module.exports = router;