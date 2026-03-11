import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {

  const { message } = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `
        You are the assistant of Twelvespace Studio.

        Twelvespace Studio is a digital agency that builds:
        - Websites
        - SaaS platforms
        - UI/UX design
        - Web apps
        - Branding solutions

        Always answer professionally and encourage users to contact the studio.
        `
      },
      { role: "user", content: message }
    ]
  });

  return Response.json({
    reply: response.choices[0].message.content
  });

}