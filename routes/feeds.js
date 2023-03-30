const express = require("express");
const axios = require('axios').default;
const router = express.Router();

//get all ingredients and searches containing the parameter q
router.get('/auto-complete', (req, res) => {

});

//get all items containing the search parameter
router.get('/search', (req, res) => {

});

//get list
router.get('/list', (req, res) => {

});

// get list similarities
router.get('/list-similarities', (req, res) => {

});

module.exports = router;
