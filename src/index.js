const express = require('express');
const handlebars = require('express-handlebars')
const app = express();
const route = require('./routes');
const path = require('path');
app.set('views', path.join(__dirname, 'resources/views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
route(app);
console.log(path.join(__dirname, 'resources/views'));
app.listen(3000, () => {
    console.log('server running');
})
module.exports = app;