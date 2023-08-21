let arc = require("@architect/functions");
const NoteRepository = require("@architect/shared/repositories/note");
let requireLogin = require("@architect/shared/require-login");

// exports.handler = arc.http.async(requireLogin, deleteNote);
exports.handler = arc.http.async(deleteNote);

async function deleteNote(req) {
  const noteId = req.params.noteId;
  const noteRepo = await new NoteRepository().init();
  await noteRepo.remove({ noteId });
  // let data = await arc.tables();
  // await data.notes.delete({
  //   noteId: req.params.noteId,
  //   // email: req.session.person.email,
  // });
  return {
    location: "/notes",
  };
}
