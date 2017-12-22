const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const data = [
  {
    item: 'Buy Bread'
  }, {
    item: 'Buy Eggs'
  }, {
    item: 'Learn to code'
  }
];

// create application/x-www-form-urlencoded parser

module.exports = (app) => {

  app.get('/todo', (req, res) => {
    res.render('todo', {todos: data});
  });

  app.post('/todo',urlencodedParser ,(req, res) => {

    data.push(req.body);
    res.json(data);
  });

  app.delete('/todo', (req, res) => {});

};
