// src/services/contentService.js

import axios from 'axios';

export const generateContent = async (topic: string) => {
  try {
    console.log("generated content service page", topic);
    const response = await axios.post('/api/contentGeneration', {
      topic,
    });
    console.log('Response from generateContent:', response);
    return response; // Returning the response to be used by the calling function
  } catch (error) {
    console.error('Error generating content:', error);
    throw new Error('Failed to generate content'); // Throw error to handle it in the calling function
  }
};
