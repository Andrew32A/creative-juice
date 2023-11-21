import Prompt from "../Models/prompt.js";
import User from "../models/user.js";

// Asking Daily Prompt
export const getDailyPrompt = async (req, res, next) => {
  try {
    const sevenMonthsMili = 18408600000; // seven months in milliseconds
    const reuseDate = Date.now() - sevenMonthsMili; // earliest date a prompt can be reused

    const prompts = await Prompt.find().$where(`this.dateUsed <= ${reuseDate}`); // get all prompts older than reuse date

    if (prompts.length === 0) {
      return res.status(400).json({message: 'there are no prompts that can be used'})
    }

    const randomIndex = Math.floor(Math.random() * prompts.length);
    const prompt = prompts[randomIndex]

    prompt.dateUsed = Date.now();
    prompt.save();

    return res.status(200).json({
      success: 'true',
      prompt,
    });
  } 
  // Display Error
  catch (err) {
    console.log(err);
    next(err);
  }
};

// Creating Prompt
export const createPrompt = async (req, res, next) => {
  try {
    const {base, stretch, dateUsed} = req.body;
    const fields = {
      base,
      stretch,
      dateUsed,
    };

    const user = await User.findById(req.user.id);

    if (!user.admin) {
      return res.status(401).json({message: 'only admins can create prompts'});
    }
    
    // Finding the prompt
    const foundPrompt = await Prompt.findOne({base});
    
    // If there's a prompt return message
    if (foundPrompt) {
      return res.status(400).json({message: 'prompt already exists in the database'})
    }

    // Prompt schema object to be stored in the database
    const prompt = new Prompt(fields);

    // Save Prompt
    await prompt.save();

    // Return JSON status 
    return res.status(200).json({
      success: 'true',
      message: `Prompt: ${prompt.id} created!`
    });
  }
  // Display Error
  catch (err) {
    console.log(err);
    next(err);
  }
}

// Gets specific prompt by looking at ID
export const getPromptById = async (req, res, next) => {
  try {
    const prompt = await Prompt.findById(req.params.id).select(
      "prompt dateUsed"
    );
    return res.status(200).json({
      prompt,
    });
  }
  catch (err) {
    next(err);
  }
};

// Getting All Prompts
export const getPrompts = async (req, res, next) => {
  try {
    const prompt = await Prompt.find();

    res
      .status(200)
      .json(
        prompt
      );
  } 
  catch (err) {
    next(err);
  }
};

// Updates prompt
export const updatePrompt = async (req, res, next) => {
  try {
    const {base, stretch, dateUsed, posts} = req.body;   // Goes to the body and look for required fields
    const fields = {
      base, stretch,
      dateUsed,
      posts
    };

    const user = await User.findById(req.user.id);

    if (!user.admin) {
      return res.status(401).json({message: 'only admins can update prompts'});
    }
    
    const foundPrompt = await Prompt.findOne({prompt})    // Gets prompt

    // Returns JSON that prompt already exists
    if (foundPrompt) {
      return res.status(400).json({message: 'prompt with that text already exists'});
    }
    
    const selectFields = Object.keys(fields).join(" ");

    // Looks for id targeting it's fields getting a new prom
     const newPrompt = await Prompt.findByIdAndUpdate(req.params.id, fields, {
      new: true,
      select: selectFields,
    });


    // If there's no new prompt return message
    if (!newPrompt) {
      return res.status(400).json({message: 'no prompt found'})
    }

    res.status(200).json({
      success: true,
      newPrompt,
    });
    
  } catch (err) {

  }

};

export const deletePrompt = async (req, res, next) => {
  try {

    const user = await User.findById(req.user.id);

    if (!user.admin) {
      return res.status(401).json({message: 'only admins can delete prompts'});
    }

    await Prompt.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Prompt deleted",
    });
  } catch (err) {
    res.status(400)
      .json({message: err});
    next(err);
  }
};