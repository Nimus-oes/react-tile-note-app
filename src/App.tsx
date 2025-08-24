import { useState } from "react";
import NoteCardList from "./components/NoteCardList/NoteCardList";
import { v4 as uuidv4 } from "uuid";
import type { Note } from "./types";

export default function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: uuidv4(),
      title: "Write a new note!",
      content: "This will be my new note.",
      createdAt: "",
      isFavorite: false,
      isArchived: false,
    },
    {
      id: uuidv4(),
      title: "Make meal preps for the next week",
      content: "The plan is to make tomato soup.",
      createdAt: "",
      isFavorite: false,
      isArchived: false,
    },
  ]);
  return (
    <div>
      <NoteCardList notes={notes} />
    </div>
  );
}
