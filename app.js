const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');





app.listen(3000, () => {
    console.log(`Server is Listening @ ${PORT}`);
});