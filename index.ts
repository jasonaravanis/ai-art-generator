import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";

module.exports.getImage = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello world!",
        input: event,
      },
      null,
      2
    ),
  };
}