const { createNotes } = require("./entities/note");

const seed = async () => {
  // await init() // do env variables and such

  await createNotes();
};

seed();
