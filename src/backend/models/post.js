import {Schema, model} from "mongoose";

// The schema for drawing prompts
const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  prompt: {
    type: Schema.ObjectId,
    ref: 'Prompt'
  },
  image: {
    type: String,
    required: true,
  }
})

const Post = model('Post', PostSchema);

export default Post;
