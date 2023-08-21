let arc = require("@architect/functions");
const NoteRepository = require("@architect/shared/repositories/note");
let requireLogin = require("@architect/shared/require-login");

// exports.handler = arc.http.async(requireLogin, edit);
exports.handler = arc.http.async(edit);

async function edit(req) {
  // get the note (including title, body and noteId) from the form post
  let note = req.body;
  // note.email = req.session.person.email;

  // save the updated note
  // let data = await arc.tables();
  // await data.notes.put(note);
  const noteRepo = await new NoteRepository().init();
  await noteRepo.update(note);

  return {
    location: "/notes",
  };
}
