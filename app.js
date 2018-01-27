const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const Session = require('express-session');
const flash = require('connect-flash');
require('dotenv').config({ path: 'variables.env' });
const firebase = require('./firebase/firebase');

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(Session({ 
  secret: 'Some Secret',
  key: 'asdflxsdfj',
  resave: false,
  saveUninitialized: false
 }))

app.use(flash());

app.use((req, res, next) => {
    res.locals.flash = req.flash();
    next();
})

app.get('/',firebase.getFirebaseConn, require('./controller/homeController'));

app.use('/login', require('./controller/loginController'));

app.use('/nonprofit', require('./controller/nonProfitController'));

app.use('/contact',firebase.getFirebaseConn, require('./controller/contactController'));

app.use("/events",firebase.getFirebaseConn, require('./controller/eventController'));

app.use('/about', require('./controller/aboutUsController'));

app.get('*', (req,res) => {
    // res.render('pages/aboutUs', { activePage: 'aboutUs' });
    res.render('pages/404', { activePage: false });
});

app.listen(3000, () => {
    console.log(`Server is Listening @ ${PORT}`);
});