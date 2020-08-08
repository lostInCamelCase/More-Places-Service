const express = require('express')
const bodyParser = require('body-parser');
const helpers = require('../database/helpers.js');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/properties', (req, res) => {
  // res.send('Hello World!')
  helpers.getProperties((error, response) => {
    if (error) {
      console.log('error:', error)
    } else {
      res.status(200).send(response);
    }
  });
});

app.post('/properties', (req, res) => {
  console.log('hi');
});

app.get('/lists', (req, res) => {
});

app.post('/lists', (req, res) => {

});

const port = 8080
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})