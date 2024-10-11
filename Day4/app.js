const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const pg = require('pg'); // Import the pg module

const app = express();
const port = 5000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "harvoxx",
  password: "24687924",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// API route
app.get('/api', (req, res) => {
  res.json(`HTTP GET request received`);
});

// Home Route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Use path to specify the correct file location
});

// GET route for registration
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

// GET route for login
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// POST route for registration
app.post("/register", async (req, res) => {
  const { firstname, lastname, phone, country, email, password } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO users (firstname, lastname, phone, country, email, password) VALUES ($1, $2, $3, $4, $5, $6)",
      [firstname, lastname, phone, country, email, password]
    );
    
    console.log(result);
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
  } catch (err) {
    console.error(err);
    res.status(500).send("Error registering user");
  }
});

// POST route for login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const result = await db.query(
      "SELECT * FROM users WHERE email = $1 AND password = $2",
      [email, password]
    );
    
    if (result.rows.length > 0) {
      res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error logging in");
  }
});

// Handle 404 errors
app.use(function(req, res) {
  res.status(404);
  return res.send(`404 Error: Resource not found`);
});

// Start server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
