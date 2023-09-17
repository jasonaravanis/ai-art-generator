import { type APIGatewayProxyEventV2, type APIGatewayProxyResultV2 } from 'aws-lambda'
import getArt from './get-art'

const generateArt = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {
  const art = await getArt()

  return {
    statusCode: 200,
    body: JSON.stringify(art)
  }
}

export { generateArt }
