let arc = require("@architect/functions");
const NoteRepository = require("@architect/shared/repositories/note");
let Hashids = require("hashids");
let hashids = new Hashids();

module.exports = async function save({ title, body }) {
  const noteRepo = await new NoteRepository().init();
  return await noteRepo.create({
    // email,
    title,
    body,
    // noteId: `NOTE#${hashids.encode(Date.now())}`,
  });
  // let data = await arc.tables();
  // return data.notes.put({
  //   // email,
  //   title,
  //   body,
  //   pk: hashids.encode(Date.now()),
  //   // noteId: hashids.encode(Date.now()),
  //   sk: "A",
  // });
};
