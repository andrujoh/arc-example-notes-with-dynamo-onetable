const arc = require("@architect/functions");
const { schema } = require("../../entities/index");
const { Table } = require("dynamodb-onetable");
const { createDynamoDbClient } = require("../../dynamodb");

class BaseDynamoRepository {
  client;
  table;
  model;

  async init(props) {
    let tableName = process.env.DYNAMO_TABLE_NAME ?? "notes-staging-notes";
    process.env.NODE_ENV = "testing";
    // if (process.env.NODE_ENV === "testing") {
    this.client = createDynamoDbClient();
    // }
    // else if (process.env.NODE_ENV === "test") {
    //   const tables = await arc.tables();
    //   this.client = tables._doc;
    //   tableName = tables.name("notes");
    // } else {
    //   this.client = createDynamoDbClient();
    //   console.log("this.client:", this.client);
    // }

    this.table = new Table({
      client: this.client,
      name: tableName,
      schema,
      partial: true,
      logger: (level, message, context) => {
        if (props?.logging) {
          console.log(`${new Date().toLocaleString()}: ${level}: ${message}`);
          console.log(JSON.stringify(context, null, 4) + "\n");
        }
      },
    });

    this.model = this.table.getModel(this.repoName);

    return this;
  }

  get repoName() {
    return this.constructor.name.replace("Repository", "");
  }

  async create(model, params) {
    return this.model.create(model, params);
  }

  async find(model, params) {
    return this.model.find(model, params);
  }

  async get(model, params) {
    return this.model.get(model, params);
  }

  async remove(model, params) {
    return this.model.remove(model, params);
  }

  async scan(model, params) {
    return this.model.scan(model, params);
  }

  async update(model, params) {
    return this.model.update(model, params);
  }

  async tableFetch(entityNames, properties, params) {
    return this.table.fetch(entityNames, properties, params);
  }

  async tableQuery(properties, params) {
    return this.table.queryItems(properties, params);
  }

  async tableScan(properties, params) {
    return this.table.scanItems(properties, params);
  }

  groupByType(items, params) {
    return this.table.groupByType(items, params);
  }
}

exports.BaseDynamoRepository = BaseDynamoRepository;
