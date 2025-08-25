import type { Note } from "../../types";
import NoteCard from "../NoteCard/NoteCard";

interface NoteCardListProps {
  notes: Note[];
  onDelete: (noteId: string) => void;
  onUpdate: (noteToUpdate: Note) => void;
}

export default function NoteCardList({
  notes,
  onDelete,
  onUpdate,
}: NoteCardListProps) {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <NoteCard note={note} onDelete={onDelete} onUpdate={onUpdate} />
        </li>
      ))}
    </ul>
  );
}
