const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/api', (req, res) => {
  res.json(`HTTP GET request received`);
});

app.use(express.static(path.join(__dirname, 'public')));
 
// Home Route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Use path to specify the correct file location
});

// GET ROUTE
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});




// POST ROUTE
app.post("/register", (req, res) => {

});


app.post("/login", (req, res) => {
  
});


app.use(function(req, res) {
  res.status(400);
  return res.send(`404 Error: Resource not found`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
