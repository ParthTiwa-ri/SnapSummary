"use server";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY); // Use environment variable for security

export async function runPointWise(extractedText) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `Highlight key points and main ideas, ensuring the summary captures essential information. \n\n${extractedText} in json format only with keys as "keyPoints" , "mainIdeas" and "details" and dont create nexted keys,You must ensure the JSON being returned or displayed is pure JSON, without any extra characters.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const summary = response.text(); // Summarized text

  return summary;
}
