const express = require("express");
//Import Models 
const User = require('../../models/Users');

const router = express.Router();


//Fetch all the Users in the Database


    router.get('/', async (req, res) => {
    try {
        const userData = await User.find({}, '-password -_id');
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json({ "error": err });
    }

    // User.find({}, (err, userData) => {
    //     if (err) {
    //         throw err;
    //     } else {
    //         res.send(userData);
    //     }
    // })

});

//User Registration
router.post('/', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.send({ "status": "User Registered Succesfully" });
    } catch (err) {
        res.status(500).json({ "error": err });
    }
});

router.put('/', (req, res) => {
    res.send(req.method);
});

router.delete('/', (req, res) => {
    res.send(req.method);
});

module.exports = router;