/**
 * Contains Business logic related to Contact Page.
 */

const router = require('express').Router();
const { check, validationResult } = require('express-validator/check');
const firebaseServices = require('../services/firebaseServices');

router.get('/', (req, res) => {
    res.render('pages/contact', {
        activePage: 'contact'
    });
});

// TODO: Server side validation
router.post('/', [
    check('email').isEmail().withMessage('must be an email'),
    check('fname').trim().isLength({ min: 1 }).withMessage('please provide FirstName'),
    check('lname').trim().isLength({ min: 1 }).withMessage('please provide LastName'),
    check('tel').trim().isLength({ min: 5 }).matches(/\d*/).withMessage('please provide valid number LastName'),
    check('message').trim().isLength({ min: 10 }).matches(/\d*/).withMessage('Message should have min 10 characters')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() });
    }
    try {
        //if no validation errors the push to DB
        await firebaseServices.push(req.firebase, 'contact', req.body );
        req.flash('success', 'Thanks for Your valuable feedback!!');
        res.redirect('/contact');
    } catch(err) {
        req.flash('error', 'Somthing bad happened! Please Try again!');
        res.redirect('/contact');
    }
})

module.exports = router;