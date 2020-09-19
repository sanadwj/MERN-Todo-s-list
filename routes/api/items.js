const express = require('express');
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

module.exports =  router;