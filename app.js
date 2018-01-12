const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config({ path: 'variables.env' });

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', require('./controller/homeController'));

app.use('/login', require('./controller/loginController'));

app.use('/nonprofit', require('./controller/nonProfitController'));

app.use('/contact', require('./controller/contactController'));

app.use("/events", require('./controller/eventController'));

app.use('/about', require('./controller/aboutUsController'));

app.listen(3000, () => {
    console.log(`Server is Listening @ ${PORT}`);
});