const express = require('express');
const router = express.Router();
const controller = require('./Controllers/Auth');
const middleware = require('./MiddleWares/VerifyJwt.js');

// Define routes
router.get('/', controller.TestRoute);
router.post('/signup', controller.signup);
router.post('/signin', controller.signin);
router.get('/signout', controller.logout);

// protected routes
router.get('/protected', middleware.authMiddleware, (_, res) => {
  res.json({ message: 'You are authenticated' });
});


// test route
const jwt = require("jsonwebtoken");
router.post('/test', async (req, res) => {
  try {
    const {name} = req.body;
    const token = jwt.sign({name: name}, "Vishal", {expiresIn: "1hr"});
    res.cookie('token', token, { httpOnly: true }); 
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Export the router
module.exports = router;
