'use strict';
const mongoose    = require('../db/mongoose');

var Schema = mongoose.Schema;

// Schemas

var Images = new Schema({
    kind: {
        type: String,
        enum: ['thumbnail', 'detail'],
        required: true
    },
    url: { type: String, required: true }
});

var Location = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    adress: { type: String, required: true },
    lat: { type: String, required: true },
    lng: { type: String, required: true },
    description: { type: String, required: true },
    images: [Images],
    modified: { type: Date, default: Date.now }
});

// validation
Location.path('title').validate(function (v) {
    return v.length > 5 && v.length < 70;
});

const LocationModel = mongoose.model('Location', Location);

module.exports.LocationModel = LocationModel;
