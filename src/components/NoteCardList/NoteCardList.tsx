import type { Note } from "../../types";
import NoteCard from "../NoteCard/NoteCard";

interface NoteCardListProps {
  notes: Note[];
  onDelete: (noteId: string) => void;
}

export default function NoteCardList({ notes, onDelete }: NoteCardListProps) {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <NoteCard note={note} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
