const express = require("express");
const app = express();
 
app.set('view engine', 'ejs');
 
app.get('/', (req, res) => {
    res.json('Ola mundo 1');
})
 
app.get('/rota2', (req, res) => {
    res.json('Ola mundo 2');
})
 
app.get('/rota3', (req, res) => {
    res.json('Ola mundo 3');
})
 
app.use(function(req, res, next) {
    res.render('404', { url: req.url })
});
 
app.listen(4000, () => {
  console.log("Funcionando");
});