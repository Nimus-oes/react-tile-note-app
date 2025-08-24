import type { Note } from "../../types";

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <div>
      <h1>{note.title}</h1>
      <h3>{note.content}</h3>
    </div>
  );
}
