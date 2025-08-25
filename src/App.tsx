import { useState } from "react";
import NoteCardList from "./components/NoteCardList/NoteCardList";
import type { Note } from "./types";
import InputForm from "./components/InputForm/InputForm";

export default function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (noteToAdd: Note) => {
    setNotes((prev) => [...prev, noteToAdd]);
  };

  const deleteNote = (noteId: string) => {
    setNotes(notes.filter((item) => item.id !== noteId));
  };

  return (
    <div>
      <InputForm onAdd={addNote} />
      <NoteCardList notes={notes} onDelete={deleteNote} />
    </div>
  );
}
