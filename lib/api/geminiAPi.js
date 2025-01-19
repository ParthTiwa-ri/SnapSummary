"use server";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY); // Use environment variable for security

export async function run(extractedText, type) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  let text;
  if (type == "short") {
    text = "100 words";
  } else if (type == "medium") {
    text = "200 words";
  } else if (type == "long") {
    text = "300 words";
  }

  const prompt = `Please summarize the following text:\n\n${extractedText} in ${text},if text is unknow character rubbish then please show " there is no text to summarize. only`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const summary = response.text(); // Summarized text

  return summary;
}
