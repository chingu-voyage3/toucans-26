const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config({ path: 'variables.env' });
const firebase = require('./firebase/firebase');

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', require('./controller/homeController'));

app.use('/login', require('./controller/loginController'));

app.use('/nonprofit', require('./controller/nonProfitController'));

app.use('/contact',firebase.getFirebaseConn, require('./controller/contactController'));

app.use("/events", require('./controller/eventController'));

app.use('/about', require('./controller/aboutUsController'));

app.get('*', (res,req) => {
    
});

app.listen(3000, () => {
    console.log(`Server is Listening @ ${PORT}`);
});