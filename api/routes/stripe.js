/*const router = require('express').Router;
const KEY = process.env.STRIPE_KEY;
const stripe = require('stripe')(KEY);

router.post('/payment', (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.price,
            currency: 'usd',
        },
        (stripeError, stripeRes) => {
            //if error show error otherwise show response 
            if(stripeError) {
                res.status(500).json(stripeError);
            } else {
                res.status(200).json(stripeRes);
            }
        }
    );
});






module.exports = router;*/