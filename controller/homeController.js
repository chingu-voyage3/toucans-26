/**
 * Main Home page related operations will go here.
 */

const router = require('express').Router();
const firebaseServices = require('../services/firebaseServices');

router.get('/', async (req, res) => {
    try {
        const events = [];
        const snapshot = await firebaseServices.readLast(req.firebase, 'events', 4);
        snapshot.forEach((child) => {
            let obj = child.val();
            obj.id = child.key;
            events.push(obj)
        })
        res.render("pages/index", { activePage: 'index', events });
    } catch(err) {
        //TODO: Redirect to 404
    }
});

module.exports = router;