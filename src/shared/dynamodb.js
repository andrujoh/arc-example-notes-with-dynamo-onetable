const DynamoDB = require("aws-sdk/clients/dynamodb");

const createDynamoDbClient = () => {
  const dynamoConfig = {
    apiVersion: "2012-08-10",
    region: "eu-west-2",
    // region: "local",
    accessKeyId: process.env.DYNAMO_ACCESS_KEY_ID || "fake_id",
    secretAccessKey: process.env.DYNAMO_SECRET_KEY || "fake_secret",
  };

  process.env.ARC_TABLES_PORT = 8002;
  // if (process.env.NODE_ENV === "testing") {
  // }
  dynamoConfig.endpoint = "http://localhost:" + process.env.ARC_TABLES_PORT;
  console.log("dynamoConfig.endpoint:", dynamoConfig.endpoint);

  const client = new DynamoDB.DocumentClient(dynamoConfig);
  return client;
};
exports.createDynamoDbClient = createDynamoDbClient;

// TODO: why cant this be local? And why is this connecting to aws?
// aws dynamodb list-tables --endpoint-url http://localhost:5001
