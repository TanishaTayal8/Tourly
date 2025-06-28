const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/rideApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Ride Schema
const rideSchema = new mongoose.Schema({
  pickup: String,
  dropoff: String,
  price: Number,
  driver: String,
  ratings: Number,
});


const Ride = mongoose.model('Ride', rideSchema);

// Endpoints
app.get('/rides', async (req, res) => {
  const rides = await Ride.find();
  res.json(rides);
});

app.post('/rides', async (req, res) => {
  const newRide = new Ride(req.body);
  await newRide.save();
  res.status(201).send('Ride Created');
});

// Start Server
app.listen(5000, () => console.log('Server started on port 5000'));
