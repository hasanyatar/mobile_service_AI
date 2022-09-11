const express = require('express');

const router = express.Router();
const Image = require('../models/image');

// POST : Create new image

router.post('/',(req,res)=>{
    image = new Image({
        image:req.body.image
    })
    image.save().then((image)=>{
        res.send(image);
    }
    
    ).catch((err)=>{
        res.status(500).send('image was not saved');
    })
})

// GET : Get all images

router.get('/:imageId',async (req,res)=>{
    const image = await Image.findById(req.params.imageId);
    if(!image){
        res.status(404).send('Image not found');
    }
    res.send(image);
});

router.get('/',(req,res)=>{
    Image.find().then((image)=>{
        res.send(image);
    }).catch((err)=>{
        res.status(500).send('image not found');
    })
})

module.exports = router;