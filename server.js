const path = require('path');
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000
const app = express();

app.use(logger("dev")); //what is this for again??

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(require("./routes/api.js"));
app.use(require("./routes/homeroutes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});