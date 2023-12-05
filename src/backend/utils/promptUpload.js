/*
THIS SCRIPT WILL NOT WORK WITHOUT SPECIAL CONSIDERATION

In order to get this script to work you must temporarily disable authentication and access control
In the upload prompt route and remove the check for admin in the upload prompt controller.
*/

import {readFile} from 'fs/promises';
const url = 'http://localhost:3000/api/prompts/new';

const prompts = JSON.parse(await readFile('./src/backend/utils/prompts.json', 'utf8'));

const uploadPrompts = async () => {
  for(let i = 0; i < prompts.length; i++) {
    const prompt = prompts[i]
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(prompt),
        });

        if (!response.ok) {
            throw new Error('Error uploading prompts');
        }

        const data = await response.json();
        console.log('Prompts uploaded:', data);
    } catch (error) {
        console.error('Error:', error.message);
    }
  }
    
};


uploadPrompts();