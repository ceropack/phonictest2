const express = require('express');
const app = express();
//const router = express.Router();
const fs = require('fs');

const phonic_o = fs.readFileSync('phonic_ex.json');
const personObject = JSON.parse(phonic_o);
/* let phonic_obj_prase = JSON.parse(phonic_obj); */

app.set('views', './views');
app.get('/', function (req, res) {
  res.render('index', { 
    name: "Phonic",
    items: personObject
  })
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
});
