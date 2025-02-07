const express = require('express');
//creating app
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

//send an HTTP response when receiving HTTP GET /
app.get('/', (req, res) => {
    res.render('index'); //no need for ejs extension
   });

//route for contacts
app.get('/contacts', (req, res) => {
    res.render('contacts');
   });

app.get('/login', (req, res) => {
    res.render('login'); 
});

 app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/api/clients', (req, res) => {
    res.render('clients'); });
    
app.get('/controller.php', (req, res) => {
    res.render('cart'); });
    
app.get('/api/register', function(req, res) {
    res.sendFile("register.php");
     });
app.get('/api/login', function(req, res) {
     res.sendFile("login.php");
     });

      //pass requests to the router middleware
const router = require('./apis/routes');
app.use(router);

//make the app listen on port
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
 console.log(`Cart app listening at http://localhost:${port}`);
 });

