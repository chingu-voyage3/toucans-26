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
// TODO: Display proper error/success Message on submit
router.post('/', [
    check('email').isEmail().withMessage('must be an email'),
    check('fname').trim().isLength({ min: 1 }).withMessage('please provide FirstName'),
    check('lname').trim().isLength({ min: 1 }).withMessage('please provide LastName'),
    check('tel').trim().isLength({ min: 5 }).matches(/\d*/).withMessage('please provide valid number LastName'),
    check('message').trim().isLength({ min: 10 }).matches(/\d*/).withMessage('Message should have min 10 characters')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() });
    }
    //if no validation errors the push to DB
    firebaseServices.push(req.firebase, 'contact', req.body )
        .then(() => {
            res.redirect('/');
        })
})

module.exports = router;