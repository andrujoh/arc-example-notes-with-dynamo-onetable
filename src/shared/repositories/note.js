// const { BaseDynamoRepository } = require("./base");
const { BaseDynamoRepository } = require("./dynamo/base");

class NoteRepository extends BaseDynamoRepository {
  async fetchByNoteId({ noteId }) {
    // return this.model.get({ PK: `${noteId}`, SK: "A" });
    return this.model.get({ noteId, SK: "A" });
  }
}

module.exports = NoteRepository;
