const express = require('express');
const router = express.Router();
const DbController = require('../controller/dbController');

router.get('/sort', async (req, res) => {
    const result = await DbController.sortByName();

    if(!result){
        res.status(400).json({status : 0, message : 'Cannot sort results now.'});
    } else{
        res.json({status : 1, message : result});
    }
});

router.get('/findUser/:userid', async(req, res) => {
    let userId = parseInt(req.params.userid);
    const result = await DbController.fetchByUserId(userId);

    if(userId !== null && result){
        res.json({status : 1, message : result});
    } else {
        res.status(400).json({status : 0, message : 'user Id doesnot exists.'});
    }
});

router.post('/verifyUser', async(req, res) => {
    let email = req.body.email;
    let pass = req.body.password;
    
    const result = await DbController.verifyUser(email, pass);
    if(!result){
        res.status(401).json({status : 0, message : 'Please enter valid email and password'});
    } else {
        res.json({status : 1, message : result});
    }

});

module.exports = router;