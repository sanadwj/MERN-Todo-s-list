const express = require('express');
const item = require('../../models/item');
const router = express.Router();


// Item Model

const Item = require('../../models/item');

// @rout GET api/items
// @desc Get ALL Items
// @access Public

router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1})
    .then(items => res.json(items))
});

// @rout Post api/items
// @desc creat An Item
// @access Public

router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

// @rout Delete api/items
// @desc delet an Item
// @access Public

router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({seccess: false}));
});


module.exports =  router;