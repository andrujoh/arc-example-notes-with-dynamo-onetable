const NoteRepository = require("../../../shared/repositories/note");

const newNotes = [
  {
    noteId: "01GY0MKR515GESH1RBA1933MR8",
    title: "My thoughts exactly",
    body: "You wish you had my thoughts!",
  },
  {
    noteId: "01GY0MKXDTZRWVET0Y5B03GG6F",
    title: "Your food smells funny",
    body: "I kinda don't want it!",
  },
];

const createNotes = async () => {
  const noteRepo = await new NoteRepository().init();

  const promises = newNotes.map(note => noteRepo.create(note));
  const createdNotes = await Promise.all(promises);

  return createdNotes;
};

console.log(`Seededing done`);

module.exports = { createNotes, newNotes };
