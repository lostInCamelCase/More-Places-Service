const express = require('express')
const bodyParser = require('body-parser');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/', (req, res) => {
  // res.send('Hello World!')
})

const port = 8080
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})