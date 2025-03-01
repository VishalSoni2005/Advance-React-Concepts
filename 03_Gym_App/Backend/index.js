const express = require('express');
const app = express();
const cors = require("cors");
const routes = require('./Routes');
const cookieParser = require('cookie-parser');

// connect to database
const connectDB = require('./Config/db');
connectDB;

// middleware
app.use(
  cors({
    origin: 'http://localhost:5173', 
    credentials: true, //! Allow cookies to be sent
  })
);
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use cookie-parser middleware
app.use(cookieParser());

// routes
app.use('/', routes);

// server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
