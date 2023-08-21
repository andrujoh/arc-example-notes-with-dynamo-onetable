let arc = require("@architect/functions");
let layout = require("@architect/shared/layout");
// let requireLogin = require("@architect/shared/require-login");
let getNotes = require("./get-notes.js");

// exports.handler = arc.http.async(requireLogin, showProtectedPage);
exports.handler = arc.http.async(showProtectedPage);

// display all notes
async function showProtectedPage(req) {
  // let person = req.session.person;
  // let notes = await getNotes(person.email);
  let notes = await getNotes();

  let greeting = `You don't have any notes! Make some below`;
  if (notes.length) {
    greeting = `You have <strong>${notes.length}</strong> notes.`;
  }

  let list = notes.map(note => {
    return `
      <section class="card">
        <a href=/notes/${note.noteId}>
          <heading>
            ${note.title}
          </heading>
          <p>${note.body}</p>
        </a>
      </section>`;
  });

  // <h2>Welcome to the Notes page <strong>${person?.email ?? "no name"}</strong>!</h2>
  var contents = `
    <section>
      <p>${greeting}</p>
      <section class="cards">
        ${list.join("")}
      </section>
      <form action=/notes method=post>
        <h2>Make a note</h2>
        <div class="input-and-label">
          <input name="title" required="required" type="text" autocomplete="off" value="" placeholder="Title"/>
          <label for="email">Title</label>
        </div>
        <div class="input-and-label">
          <textarea name="body" required="required" autocomplete="off" value="" placeholder="Body text"></textarea>
          <label for="body">Body</label>
        </div>
        <button>Make a note</button>
      </form>
    </section>
  `;

  return {
    html: layout({ contents }),
  };
}
