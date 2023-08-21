let arc = require("@architect/functions");
let requireLogin = require("@architect/shared/require-login");
let save = require("./save");

// exports.handler = arc.http.async(requireLogin, create)
exports.handler = arc.http.async(create);

async function create(req) {
  // create the partition and sort keys
  // let email = req.session.person.email;
  let title = req.body.title;
  let body = req.body.body;

  // save the note
  // await save({ email, title, body });
  await save({ title, body });

  return {
    location: "/notes",
  };
}
