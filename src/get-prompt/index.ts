import getSecret from "../get-secret";

const getPrompt = async (): Promise<string | null> => {
    const openAISecretKey = await getSecret('open-ai-secret-key');

    return openAISecretKey
}

export default getPrompt
