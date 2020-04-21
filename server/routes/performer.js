const router = require('express').Router();
const AuthController = require('../controllers/AuthController');
<<<<<<< HEAD
const PerformerController = require('../controllers/PerformerController');
=======
const { check, validationResult, body } = require('express-validator');
>>>>>>> 2c654a4e45870af8d2583258112fb90181eaa678


router.post('/login', [
    body("email").isEmail(),
    body("password").isLength({min: 5}),
], AuthController.postPerformerLogin);

router.post('/signup', [
    body("email").isEmail(),
    body("username").isLength({min: 4}),
    body("password").isLength({min: 5}),

], AuthController.postPerformerSignup);

router.get('/gigs', PerformerController.getPerformerGigs);

router.get('/', (req, res) => {
    res.json({data:['dolphins', 'manatees', 'sea turles']})
});
module.exports = router;