const router = require('express').Router();

router.get("/edit", function (req, res) {
    res.render("pages/editEvent", { activePage: false });
});

router.get("/list", function (req, res) {
    res.render("pages/eventList", { activePage: false });
});

module.exports = router;