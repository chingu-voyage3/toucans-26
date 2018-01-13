/**
 * Login related logics go here.
 */

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('pages/login', { activePage: 'login' });
});

module.exports = router;