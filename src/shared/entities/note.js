function ulid({ required = false, generate = false } = {}) {
  return {
    type: String,
    validate: /^[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{26}$/i,
    required,
    generate: generate ? "ulid" : undefined,
  };
}

module.exports = {
  Note: {
    PK: { type: String, value: "NOTE#${noteId}" },
    SK: { type: String, value: "A" },
    noteId: ulid({ required: true, generate: true }),
    // noteId: { type: String, required: true },
    title: { type: String, required: true },
    body: { type: String },

    GSI1PK: { type: String, value: "NOTES" },
    GSI1SK: { type: String, value: "NOTE#${noteId}" },

    // GSI2PK: {
    //   type: String,
    //   value: "VEHICLE#${companyId}#${companyVehicleId}",
    // },
    // GSI2SK: { type: String, value: "PERIOD#${startedAt}#${userId}" },
  },
};
