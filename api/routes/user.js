const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require('./verifyToken');
const router = require('express').Router();
const User = require('../models/User');

//User PUT request
//Allows user to modify data (such as change username)
router.put('/:id', async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.SECRET_PASS
        ).toString();
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            //take everything in req.body and set again
            $set: req.body
        }, { new: true });
        //update user with new data
        res.status(200).json(updatedUser);

    } catch (error) {
        //otherwise send error
        res.status(500).json(error);
    };


});

//Delete request
router.delete('/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('User had been deleted')
        
    } catch (error) {
        res.status(500).json(error);
    };
});

//GET user by id
router.get('/find/:id', async (req, res) => {
    try {
      const user =  await User.findById(req.params.id);
      const { password, ...others } = user._doc;
        res.status(200).json(others);
        
    } catch (error) {
        res.status(500).json(error);
    };
});

//GET all users
router.get('/', async (req, res) => {
    const query = req.query.new
    try {
      const users = query ? await User.find() : await User.find();
        res.status(200).json(users);
        
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    };
});

//GET USER STATS

router.get("/stats",  async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
    try {
      const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;