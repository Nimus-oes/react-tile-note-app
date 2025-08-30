import type { Filter, Note, Sorter } from "../../types";
import NoteCard from "../NoteCard/NoteCard";
import styles from "./NoteCardList.module.css";

interface NoteCardListProps {
  notes: Note[];
  onDelete: (noteId: string) => void;
  onUpdate: (noteToUpdate: Note) => void;
  filter: Filter;
  sorter: Sorter;
}

export default function NoteCardList({
  notes,
  onDelete,
  onUpdate,
  filter,
  sorter,
}: NoteCardListProps) {
  const filteredNotes = getFilteredNotes(notes, filter);
  const sortedNotes = getSortedNotes(filteredNotes, sorter);
  const noNotes = sortedNotes.length === 0;
  const noNotesMsg =
    filter === "fav"
      ? "No favorites yet."
      : "No notes created. Write a new one!";

  return (
    <>
      <ul className={styles.container}>
        {sortedNotes.map((note) => (
          <li key={note.id}>
            <NoteCard note={note} onDelete={onDelete} onUpdate={onUpdate} />
          </li>
        ))}
      </ul>
      {noNotes && <p className={styles.noNotesMsg}>{noNotesMsg}</p>}
    </>
  );
}

function getFilteredNotes(notes: Note[], filter: Filter) {
  return filter === "all" ? notes : notes.filter((item) => item.isFavorite);
}

function getSortedNotes(notes: Note[], sorter: Sorter) {
  return [...notes].sort((a, b) =>
    sorter === "asc" ? a.createdAt - b.createdAt : b.createdAt - a.createdAt,
  );
}
