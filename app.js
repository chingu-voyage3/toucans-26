const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');


app.get('/search', (req,res) => {
    res.render('pages/search',{
        activePage: 'search'
    });
});

app.get('/ngo', (req,res) => {
    res.render('pages/ngo',{
        activePage: 'search'
    });
});

app.get('/register', (req,res) => {
    res.render('pages/edituser',{
        activePage: 'register'
    });
});

app.get('/contact', (req,res) => {
    res.render('pages/contact', {
        activePage: 'contact'
    });
});

app.listen(3000, () => {
    console.log(`Server is Listening @ ${PORT}`);
});