import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";
import getPrompt from "./get-prompt";

module.exports.getImage = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {

  const prompt = getPrompt();

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello world!",
        prompt,
      },
      null,
      2
    ),
  };
}