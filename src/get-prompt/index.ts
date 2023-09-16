const getPrompt = async (): Promise<Response> => {
    const response = await fetch('http://date.jsontest.com/')
    return response
}

export default getPrompt
