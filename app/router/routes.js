const express = require('express');
const router = express.Router();
const DbController = require('../controller/dbController');

router.get('/sort', async (req, res) => {
    const result = await DbController();
    res.json({status : 1, message : result});
})

module.exports = router;