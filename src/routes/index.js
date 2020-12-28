const newsRouter = require('./new');
function route(app) {
   app.get('/new', newsRouter);
}

module.exports = route;