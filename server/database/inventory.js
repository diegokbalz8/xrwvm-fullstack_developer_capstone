/*jshint esversion: 8 */

const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carsSchema = new Schema({
  dealer_id: {
    type: Number,
    required: true
  },
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  bodyType: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  mileage: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('cars', carsSchema);

const cars = new Schema({
dealer_id: {
    type: Number,
    required: true
},
make: {
    type: String,
    required: true
  },
model: {
    type: String,
    required: true
  },
bodyType: {
    type: String,
    required: true
  },
year: {
    type: Number,
    required: true
  },
mileage: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('cars', cars);
