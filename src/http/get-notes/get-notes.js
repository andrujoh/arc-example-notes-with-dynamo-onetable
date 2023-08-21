const NoteRepository = require("@architect/shared/repositories/note");

module.exports = async function getNotes() {
  const noteRepo = await new NoteRepository().init();

  const allNotes = await noteRepo.scan({});
  console.log("allNotes:", allNotes);

  return allNotes;
};
