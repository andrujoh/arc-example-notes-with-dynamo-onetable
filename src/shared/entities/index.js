const note = require("./note");

const models = {
  ...note,
};

const version = "0.0.1";

const schema = {
  format: "onetable:1.1.0",
  version: version,
  name: version,
  // Has to match app.arc
  indexes: {
    primary: {
      hash: "PK",
      sort: "SK",
    },
    GSI1: {
      hash: "GSI1PK",
      sort: "GSI1SK",
    },
  },
  models,
  params: {
    isoDates: true,
    timestamps: true,
    createdField: "createdAt",
    updatedField: "updatedAt",
  },
};

// User: {
//   pk: { type: String, value: "user:${id}" },
//   sk: { type: String, value: "user:${email}", validate: EmailRegExp },
//   // id: ulid({ required: true, generate: true }),
//   id: { type: String, value: "user:${email}" },
//   email: { type: String, required: true },
//   username: { type: String, required: true },

//   gs1pk: { type: String, value: "user-email:${email}" },
//   gs1sk: { type: String, value: "user:" },
// },

module.exports = { models, schema };
