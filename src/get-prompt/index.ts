import OpenAI from 'openai';
import getSecret from "../get-secret";

const getPrompt = async (): Promise<string | null> => {
    const openAISecretKey = await getSecret('open-ai-secret-key');

    if (openAISecretKey === null) {
        throw new Error("no openAI secret key found")
    }

    const openai = new OpenAI({
        apiKey: openAISecretKey
    })

    const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'Give me a prompt I can use in DALLE to generate a nice piece of art. Return nothing else.' }],
        model: 'gpt-4'
    })

    return completion.choices[0].message.content
}

export default getPrompt
