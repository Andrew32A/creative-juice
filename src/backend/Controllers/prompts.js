import Prompt from "../Models/prompt.js";

// Creating Prompt
export const createPrompt = async (req, res, next) => {
  try {
    const {prompt, dateUsed} = req.body;
    const fields = {
      prompt,
      dateUsed,
    };
    
    // Finding the prompt
    const foundPrompt = await Prompt.findOne({prompt});
    
    // If there's a prompt return message
    if (foundPrompt) {
      return res.status(400).json({message: 'prompt already exists in the database'})
    }

    // Prompt schema object to be stored in the database
    const newPrompt = new Prompt(fields);

    // Save Prompt
    await newPrompt.save();

    // Return JSON status 
    return res.status(200).json({
      success: 'true',
      message: `Prompt: ${newPrompt.id} created!`
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
    const {prompt, dateUsed, posts} = req.body;   // Goes to the body and look for required fields
    const fields = {
      prompt,
      dateUsed,
      posts
    };
    
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
    await prompt.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Prompt deleted",
    });
  } catch (err) {
    res.status(400).
  json({message: err});
    next(err);
  }
};