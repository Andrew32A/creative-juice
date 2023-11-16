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
    default: '0000-00-00',
  },
  posts: [{
    type: Schema.ObjectId,
    ref: 'Post'
  }]
})

const Prompt = model('Prompt', PromptSchema);

export default Prompt;
