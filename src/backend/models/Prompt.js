import {Schema, model} from "mongoose";

const PromptSchema = new Schema({
  prompt: {
    type: String,
    required: true,
  },
  DateUsed: {
    type: Date,
    default: '0000-00-00',
  },
})

const Prompt = model('Prompt', PromptSchema);

export default Prompt;
