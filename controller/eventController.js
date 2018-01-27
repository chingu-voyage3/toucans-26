/**
 * This page is responsible for Logics regarding Events
 */

const router = require('express').Router();
const firebaseServices = require('../services/firebaseServices');


router.get("/", async function (req, res) {
    try {
        const events = [];
        const snapshot = await firebaseServices.read(req.firebase, 'events');
        snapshot.forEach((child) => {
            let obj = child.val();
            obj.id = child.key;
            events.push(obj)
        })
        res.render("pages/eventList", { activePage: false, events });
    }catch(err) {
        req.flash('error', 'Somthing bad happened! Please Try again!');
        res.render("pages/eventList", { activePage: false, events: {} });
    }
});

router.get("/add", function (req, res) {
    res.render("pages/editEvent", { activePage: false, event: {} });
});

router.post('/add', async (req, res) => {
    console.log(req.body)
    //if no validation errors the push to DB
    try {
        await firebaseServices.push(req.firebase, 'events', req.body);
        req.flash('success', 'Added Event Successfully!!');
        res.redirect('/events');
    } catch (err) {
        req.flash('error', 'Somthing bad happened! Please Try again!');
        res.redirect('/events');
    }
})

router.get("/edit/:id", async function (req, res) {
    try {
        const snapshot = await firebaseServices.read(req.firebase, `events/${req.params.id}`);
        res.render("pages/editEvent", { activePage: false, event: { ...snapshot.val(), ...{id: req.params.id}} });
    } catch(err) {
        //TODO: Redirect to 404
    }
});


module.exports = router;