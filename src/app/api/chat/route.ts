import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

// Create an OpenAI API client
const config = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});

const openai = new OpenAIApi(config);

export async function POST(req: Request) {
  const body = await req.json();
  const { messages } = body;

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages,
    stream: true, // stream is kanang dili niya e usa ra ug hatag ag response similar sa traditional but instead iyaha e tagsa-tagsa nga murag naa sijay typing effect just like what chatgpt do
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
