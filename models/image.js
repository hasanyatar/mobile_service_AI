const mongoose = require('mongoose');

const express = require('express');

// Image Schema

const ImageSchema = new mongoose.Schema({
    image:{
        type: String,
        required: true,
    },

})


module.exports = mongoose.model('Image', ImageSchema);