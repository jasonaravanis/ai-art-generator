const getPrompt = async (): Promise<Response> => {
    const response = await fetch('http://date.jsontest.com/')
    const payload = response.json();
    return await payload
}

export default getPrompt
