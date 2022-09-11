const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config({ path: './config.env' });
const imagesRoute = require('./routes/images');
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/images',imagesRoute)
// app.get('/',(req,res)=> {
//     res.send('Hello World')
// })
const PORT = process.env.PORT || 3000;

// connect to mongodb atlas
mongoose.connect(process.env.MONGO_URL,
    { useNewUrlParser: true,useUnifiedTopology: true },
    ).then(() => {
        // Start the server
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
        console.log('Connected to database');
    }).catch((err) => {
        console.log(err);
    });
    








module.exports = app;