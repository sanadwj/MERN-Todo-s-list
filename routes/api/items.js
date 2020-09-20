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
// @desc creat A Post
// @access Public

router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

module.exports =  router;