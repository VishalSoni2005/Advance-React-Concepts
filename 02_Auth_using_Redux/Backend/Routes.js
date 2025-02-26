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

// Export the router
module.exports = router;
