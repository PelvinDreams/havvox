const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const { Pool } = require('pg'); // Import the pg module


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
app.post("/register", async (req, res) => {

  const fname = req.body.fname
  const lname = req.body.lname
  const phone = req.body.phone
  const country = req.body.country
  const password = req.body.password
  const email = req.body.email


}); 


app.post("/login", async (req, res) => {
  const email = req.body.email
  const password = req.body.password

 
});


app.use(function(req, res) {
  res.status(400);
  return res.send(`404 Error: Resource not found`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
