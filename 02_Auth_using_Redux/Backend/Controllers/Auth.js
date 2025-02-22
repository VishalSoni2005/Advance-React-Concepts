const userModel = require('../Model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const TestRoute = function (req, res) {
  res.send('Test Route');
};

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input fields
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: 'Please fill all the fields' });
    }

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: 'Email already in use.' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const payload = {
      name: newUser.name,
      email: newUser.email,
    };

    const token = jwt.sign(payload, 'vishal', { expiresIn: '1hr' });

    res.cookie('token', token);
    res.status(201).json({
      token,
      success: true,
      message: 'User registered successfully',
      user: { id: newUser._id, name, email },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server Error, Unable to process request',
    });
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input fields
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: 'Please fill all the fields' });
    }

    // Find user by email
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: 'User not found' });
    }

    // Check if password is valid
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: 'Invalid credentials' });
    }

    // Create JWT token
    const payload = {
      name: user.name,
      email: user.email,
    };
    const token = jwt.sign(payload, 'vishal', { expiresIn: '1hr' });
    res.cookie('token', token);

    // Return formatted user data
    res.json({
      success: true,
      message: 'Login successful',
      user: { id: user._id, name: user.name, email },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server Error, Unable to process request',
      error: error.message, // Include the error message for debugging
    });
  }
};

const logout = (req, res) => {
  res.clearCookie('token'); // Clear the token cookie
  res.status(200).json({ success: true, message: 'Logout successful' });
};

module.exports = {
  TestRoute,
  signup,
  signin,
  logout,
};
