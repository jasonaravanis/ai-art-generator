import { GetParameterCommand, SSMClient } from "@aws-sdk/client-ssm"

const getSecret = async (secretName: string): Promise<string | null> => {
    const secretsManagerClient = new SSMClient();
    const command = new GetParameterCommand({
        Name: secretName,
    })
    const response = await secretsManagerClient.send(command);

    return response.Parameter?.Value ?? null
}

export default getSecret