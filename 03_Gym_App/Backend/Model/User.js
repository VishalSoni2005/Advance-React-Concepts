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

const generateAvatar = (name) => {
  const randomStyle =
    avatarStyles[Math.floor(Math.random() * avatarStyles.length)];
  return `https://api.dicebear.com/8.x/${randomStyle}/svg?seed=${encodeURIComponent(name)}`;
};

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
    default: function () {
      return generateAvatar(this.name); // 🔥 Uses the actual name entered in the schema
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
