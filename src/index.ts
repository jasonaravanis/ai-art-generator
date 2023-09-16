import { type APIGatewayProxyEventV2, type APIGatewayProxyResultV2 } from 'aws-lambda'
import getPrompt from './get-prompt'

const getImage = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {
  const prompt = getPrompt()

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello world!',
        prompt
      },
      null,
      2
    )
  }
}

export { getImage }
