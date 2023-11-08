import express from "express";

import User from "../../models/User.js";

export const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select(
      "username posts"
    );

    return res.status(200).json({
      success: true,
      user,
    });
  }
  catch (err) {
    console.log(err);
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select(
      "username posts"
    );
    return res.status(200).json({
      user,
    });
  }
  catch (err) {
    next(err);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res
      .status(200)
      .json(
        users
      );
  }
  catch (err) {
    next(err);
  }
}

export const updateUser = async (req, res, next) => {
  try {
    
  }
  catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    
  }
  catch (err) {
    next(err);
  }
};

export default getUsers