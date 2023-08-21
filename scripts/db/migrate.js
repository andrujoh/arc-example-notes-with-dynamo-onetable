const { Migrate } = require("onetable-migrate");
const migrations = require("../../src/db/migrations");
const { createDynamoDbClient } = require("../../src/shared/dynamodb");

// TODO: read env. Since it is a script, arc cant save the env variables
const main = async () => {
  try {
    console.log(`process.env.NODE_ENV`, process.env.NODE_ENV);
    const client = createDynamoDbClient();
    const tableName = process.env.DYNAMO_TABLE_NAME || "notes-staging-notes";
    const config = { client, name: tableName, partial: true };

    const migrate = new Migrate(config, { migrations });
    console.log("migrate:", migrate);
    await migrate.init();

    const version = "0.0.1";
    const direction = "up";

    // TODO: up and down support
    await migrate.apply(direction === "up" ? 1 : -1, version);
  } catch (ex) {
    console.error(ex);
    process.exit(1);
  }
  process.exit(0);
};

main();
