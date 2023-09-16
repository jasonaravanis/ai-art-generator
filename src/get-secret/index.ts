import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager"

const getSecret = async (SecretId: string): Promise<string | null> => {
    const secretsManagerClient = new SecretsManagerClient();
    const command = new GetSecretValueCommand({
        SecretId,
    })
    const response = await secretsManagerClient.send(command);

    return response.SecretString ?? null
}

export default getSecret