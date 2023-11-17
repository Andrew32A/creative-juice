import Post from "../Models/post.js";
import User from "../models/user.js";
import Prompt from "../Models/prompt.js";

// Creating Prompt
export const createPost = async (req, res, next) => {
  try {
    const {title, date, user, prompt} = req.body;
    const fields = {
      title,
      date,
      user,
      prompt,
    };
    
    // Finding the post
    const foundPost = await Post.findOne({title:title, user:user});
    
    // If there's a post return message
    if (foundPost) {
      return res.status(400).json({message: 'post already exists in the database'})
    }

    // Post schema object to be stored in the database
    const post = new Post(fields);

    // Save Post
    await post.save();

    // update the user to link the new post
    const owner = await User.findById(req.user.id);

    await owner.posts.push(post._id);
    await owner.save();

    // update the prompt to link the new post
    const topic  = await Prompt.findById(prompt); // used topic because prompt is declared elsewhere

    await topic.posts.push(post._id);
    await topic.save();

    // Return JSON status 
    return res.status(200).json({
      success: 'true',
      message: `Post: ${post.id} created!`
    });
  }
  // Display Error
  catch (err) {
    console.log(err);
    next(err);
  }
};

export const getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    return res.status(200).json({
      post,
    });

  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();

    return res.status(200).json({
      posts,
    })
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const updatePost = async (req, res, next) => {
  try{
    const {title} = req.body;

    const fields = {
      title,
    };
    const foundPost = await Post.findOne({title: title, user:req.user.id});

    if (foundPost) {
      return res.status(400).json({message: `Error a piece named ${title} by this artist already exists`});
    }

    const selectFields = Object.keys(fields).join(" ");

    const isOwner = await Post.findOne({_id: req.params.id, user: req.user.id});

    if (!isOwner) {
      return res.status(401).json({message: 'you are not authorized to modify this'});
    }

    const post = await Post.findByIdAndUpdate(req.params.id, fields, {
        new: true,
        select: selectFields,
      });
    
      if (!post) {
        res.status(404).json({message: 'Error post not found'})
      }

      res.status(200).json({
        success: true,
        post,
      });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const deletePost = async (req, res, next) => {
  try {

    const isOwner = await Post.findOne({_id: req.params.id, user: req.user.id});

    if (!isOwner) {
      return res.status(401).json({message: 'you are not authorized to modify this'});
    }

    const post = await Post.findById(req.params.id);

    await Post.findByIdAndDelete(req.params.id);

    // update the user to link the new post
    const owner = await User.findById(req.user.id);

    let index = owner.posts.indexOf(req.params.id);
    await owner.posts.splice(index, 1);
    await owner.save();

    // update the prompt to link the new post
    const topic  = await Prompt.findById(post.prompt); // used topic because prompt is declared elsewhere

    index = topic.posts.indexOf(req.params.id);
    await topic.posts.splice(index, 1);
    await topic.save();

    res.status(200).json({
      success: true,
      message: "Post deleted",
    });
  }
  catch (err) {
    res.status(500).json({ message: err });
    next(err);
  }
};