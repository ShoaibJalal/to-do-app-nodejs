const express = require('express');
const todoController = require('./controllers/todoController');

const app = express();

// setting up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//Calling controllers
todoController(app);

//listening to port 4000
app.listen(4000);
console.log('We are listening to port 4000');
