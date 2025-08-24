import type { Note } from "../../types";
import NoteCard from "../NoteCard/NoteCard";

interface NoteCardListProps {
  notes: Note[];
}

export default function NoteCardList({ notes }: NoteCardListProps) {
  return (
    <div>
      {notes.map((note) => (
        <div>
          <NoteCard note={note} />
        </div>
      ))}
    </div>
  );
}
