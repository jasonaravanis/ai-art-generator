import OpenAI from 'openai';
import getSecret from "../get-secret";

interface Art {
    prompt: string;
    image: string;
}

const getArt = async (): Promise<Art> => {
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

    const prompt = completion.choices[0].message.content

    if (prompt === null) {
        throw new Error("no image generator prompt found")
    }

    const response = await openai.images.generate({ prompt, n: 1, size: '1024x1024', response_format: 'url' })

    const image = response.data[0].url


    if (image === undefined) {
        throw new Error("no image generated")
    }

    return { prompt, image }
}

export default getArt
