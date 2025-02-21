'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../components/ui/Button';
import { useRouter } from 'next/navigation'; // For navigation after submission
import { generateContent } from '../services/contentService';

const Page = () => {
  const [topic, setTopic] = useState(''); // State for topic input
  const [generatedContent, setGeneratedContent] = useState<string | null>(null); // State for generated content
  const router = useRouter(); // Hook to navigate after submission

  // Function to handle the form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!topic.trim()) {
      alert('Please provide a topic for content generation.');
      return;
    }

    console.log('Submitting topic:', topic);

    try {
      const response = await generateContent(topic);
      console.log('Response from generateContent:', response);

      if (response?.status === 200) {
        const content = response.data?.text;  // Get the 'text' field from the response
        console.log('Generated Content:', content);
        setGeneratedContent(content); // Store the generated content in state
      } else {
        console.error('Failed to generate content:', response?.data?.error);
        alert('Failed to generate content.');
      }
    } catch (error) {
      console.error('Error generating content:', error);
      alert('An error occurred while generating content.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">AI-Powered Blogging Platform</h1>
        <p className="mt-2 text-lg text-gray-700">
          Generate, edit, and optimize content with ease. Start your journey now!
        </p>
      </header>

      <div className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="topic" className="block text-lg font-medium text-gray-700">
              Enter topic for content generation:
            </label>
            <input
              id="topic"
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="mt-2 w-full p-2 border rounded-md"
              placeholder="e.g., How to build a blog with AI"
            />
          </div>

          <Button type="submit">
            Generate New Article
          </Button>
        </form>

        {/* Conditionally render the generated content if available */}
        {generatedContent && (
          <div className="mt-8 w-full p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Generated Content:</h2>
            <div
              className="text-lg text-gray-700"
              dangerouslySetInnerHTML={{ __html: generatedContent }} // Render HTML safely
            />
          </div>
        )}

        <p className="text-center text-gray-600">
          Already have an account?{' '}
          <Link href="/auth/signin" className="text-blue-500 hover:underline">
            Sign in
          </Link>
        </p>

        <p className="text-center text-gray-600">
          New to the platform?{' '}
          <Link href="/auth/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
