let arc = require("@architect/functions");
let layout = require("@architect/shared/layout");
const NoteRepository = require("@architect/shared/repositories/note");
// let requireLogin = require("@architect/shared/require-login");

// exports.handler = arc.http.async(requireLogin, showNote);
exports.handler = arc.http.async(showNote);

// display a note
async function showNote(req) {
  let noteId = req.params.noteId;
  // let email = req.session.person && req.session.person.email;
  // let data = await arc.tables();
  // // let note = await data.notes.get({ noteId, email });

  const noteRepo = await new NoteRepository().init();
  const note = await noteRepo.get({ noteId });

  let html = `
    <article>
      <h2>Edit note</h2>
      <form action=/notes/${noteId} method=post>
        <input type=hidden name=noteId value=${noteId}>
        <div class="input-and-label">
          <input 
          type=text 
          name=title 
          placeholder="Enter title" 
          value="${note.title}"
          required>
        </div>
        <div class="input-and-label">
          <textarea 
          class=form-control 
          name=body 
          placeholder="Enter text">${note.body}
          </textarea>
        </div>
        <button type=submit>Save changes</button>
      </form>

      <form action=/notes/${noteId}/delete method=post>
        <button class="danger" type=submit>Delete</button>
      </form>
    </article>
  `;

  return {
    html: layout({ contents: html }),
  };
}
