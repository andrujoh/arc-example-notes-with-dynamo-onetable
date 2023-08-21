const schema = require("../schemas/schema-0.0.1");

module.exports = {
  version: "0.0.1",
  description: "Example migration 0.0.1",
  schema,
  async up(db, migrate, params) {
    if (!params.dry) {
      await db.saveSchema(schema);

      const note = {
        noteId: "01GY0MH1NXSPM2YHZ6XF099YSN",
        title: "some title",
        body: "some body",
      };

      // await db.createTables();

      await db.create("Note", note);
    }
  },
  async down(db, migrate, params) {
    if (!params.dry) {
      const note = await db.scan("Note", {
        noteId: "noteId1",
      })[0];
      await db.remove("Note", { noteId: note.noteId });

      await db.removeSchema(schema);
    }
  },
};
