function ulid({ required = false, generate = false } = {}) {
  return {
    type: String,
    validate: /^[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{26}$/i,
    required,
    generate: generate ? "ulid" : undefined,
  };
}

module.exports = {
  format: "onetable:1.1.0",
  version: "0.0.1",
  name: "0.0.1",
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
  models: {
    Note: {
      PK: { type: String, value: "NOTE#${noteId}" },
      SK: { type: String, value: "A" },
      id: ulid({ required: true, generate: true }),
      // noteId: { type: String, required: true },
      title: { type: String, required: true },
      body: { type: String },

      GSI1PK: { type: String, value: "NOTES" },
      GSI1SK: { type: String, value: "NOTE#${noteId}" },
    },
  },
  params: {
    isoDates: true,
    timestamps: true,
    createdField: "createdAt",
    updatedField: "updatedAt",
  },
};
