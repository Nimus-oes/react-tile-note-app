import { useEffect, useState } from "react";
import NoteCardList from "./components/NoteCardList/NoteCardList";
import type { Note, Filter, Sorter } from "./types";
import InputForm from "./components/InputForm/InputForm";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import DarkThemeProvider from "./context/DarkThemeProvider";

export default function App() {
  const [notes, setNotes] = useState<Note[]>(getNotesFromLocalStorage);
  const [filter, setFilter] = useState<Filter>("all");
  const [sorter, setSorter] = useState<Sorter>("desc");

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
  const updateFilter = (filter: Filter) => {
    setFilter(filter);
  };
  const updateSorter = (sorter: Sorter) => {
    setSorter(sorter);
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <DarkThemeProvider>
      <Header
        filter={filter}
        onFilterChange={updateFilter}
        sorter={sorter}
        onSorterChange={updateSorter}
      />
      <main className={styles.main}>
        <InputForm onAdd={addNote} />
        <NoteCardList
          notes={notes}
          onDelete={deleteNote}
          onUpdate={setFavorite}
          filter={filter}
          sorter={sorter}
        />
      </main>
    </DarkThemeProvider>
  );
}

function getNotesFromLocalStorage() {
  const notes = localStorage.getItem("notes");
  return notes ? JSON.parse(notes) : [];
}
