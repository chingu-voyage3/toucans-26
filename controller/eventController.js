/**
 * This page is responsible for Logics regarding Events
 */

const router = require('express').Router();
const firebaseServices = require('../services/firebaseServices');


router.get("/", function (req, res) {
    res.render("pages/eventList", { activePage: false });
});

router.get("/add", function (req, res) {
    res.render("pages/editEvent", { activePage: false });
});

router.post('/add', async (req, res) => {
    //if no validation errors the push to DB
    try {
        await firebaseServices.push(req.firebase, 'events', req.body);
        req.flash('success', 'Thanks for Your valuable feedback!!');
        res.redirect('/contact');
    } catch(err) {
        req.flash('error', 'Somthing bad happened! Please Try again!');
        res.redirect('/contact');
    }
})

router.get("/edit", function (req, res) {
    res.render("pages/editEvent", { activePage: false });
});


module.exports = router;