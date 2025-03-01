const mongoose = require('mongoose');

const connectDB = mongoose
  .connect('mongodb://127.0.0.1:27017/Auth-App-using-Redux)')
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

module.exports = connectDB;
