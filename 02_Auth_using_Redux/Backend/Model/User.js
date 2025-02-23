const mongoose = require('mongoose');

const avatarStyles = [
  'adventurer',
  'adventurer-neutral',
  'avataaars',
  'big-ears',
  'big-ears-neutral',
  'big-smile',
  'bottts',
  'croodles',
  'croodles-neutral',
  'identicon',
  'initials',
  'micah',
  'miniavs',
  'open-peeps',
  'personas',
  'pixel-art',
  'pixel-art-neutral',
];

const generateAvatar = (username) => {
  const randomStyle =
    avatarStyles[Math.floor(Math.random() * avatarStyles.length)];
  return `https://api.dicebear.com/8.x/${randomStyle}/svg?seed=${username}`;
};

const userAvatar = generateAvatar('john_doe');
console.log(userAvatar);

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile_img: {
    type: String,
    default: () => {
      return `https://api.dicebear.com/8.x/adventurer/svg?seed=${this.username}`;
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
