const getPrompt = async () => {
    const response = await fetch('http://date.jsontest.com/')
    return response;
}

export default getPrompt