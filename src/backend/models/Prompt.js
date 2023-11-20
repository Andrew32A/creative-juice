import {Schema, model} from "mongoose";

// The schema for drawing prompts
const PromptSchema = new Schema({
  base: {
    type: String,
    required: true,
  },
  stretch: {
    type: String,
    required: true,
  },
  dateUsed: {
    type: Date,
    default: new Date('January 1, 0001'),
  },
  posts: [{
    type: Schema.ObjectId,
    ref: 'Post'
  }]
})

const Prompt = model('Prompt', PromptSchema);

export default Prompt;
