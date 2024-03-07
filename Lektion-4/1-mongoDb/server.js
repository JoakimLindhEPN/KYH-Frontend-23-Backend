const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 9999;
const mongoURI = 'mongodb+srv://Joakim:BytMig123@cluster0.fwykixu.mongodb.net/myFirstDb?retryWrites=true&w=majority&appName=Cluster0'

app.listen(PORT, () => console.log('Server running on: http://localhost:' + PORT))

mongoose.connect(mongoURI)
  .then(() => console.log('Connected to DB'))
  .catch(err => console.log(err.message))