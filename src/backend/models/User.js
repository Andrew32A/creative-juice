import { Schema, model } from "mongoose";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserSchema = new Schema({
  email: {
    type:String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    default: false,
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post',
  }],
  notificationPreferences: {
    push: {
      type: Boolean,
      default: false,
    },
    email: {
      type: Boolean,
      default: true,
    },
  },
  notifications: [{
    type: Schema.Types.ObjectId,
    ref: "Notification",
  }],
})

// Hash password before saving
UserSchema.pre("save", async function (next) {
  // if (!this.isModified("password")) return next();
  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare passwords
UserSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Method to get signed JWT token
UserSchema.methods.getSignedJwtToken = async function (id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const User = model('User', UserSchema)

export default User;
