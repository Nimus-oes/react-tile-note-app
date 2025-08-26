import { useState } from "react";
import NoteCardList from "./components/NoteCardList/NoteCardList";
import type { Note } from "./types";
import InputForm from "./components/InputForm/InputForm";
import styles from "./App.module.css";
import Header from "./components/Header/Header";

export default function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (noteToAdd: Note) => {
    setNotes((prev) => [...prev, noteToAdd]);
  };

  const deleteNote = (noteId: string) => {
    setNotes(notes.filter((item) => item.id !== noteId));
  };

  const setFavorite = (noteToUpdate: Note) => {
    setNotes(
      notes.map((item) => (item.id === noteToUpdate.id ? noteToUpdate : item)),
    );
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <InputForm onAdd={addNote} />
        <NoteCardList
          notes={notes}
          onDelete={deleteNote}
          onUpdate={setFavorite}
        />
      </main>
    </>
  );
}
