import type { Note } from "../../types";

interface NoteCardProps {
  note: Note;
  onDelete: (noteId: string) => void;
}

export default function NoteCard({ note, onDelete }: NoteCardProps) {
  const handleDelete = () => {
    onDelete(note.id);
  };

  return (
    <>
      <h1>{note.text}</h1>
      <p>{note.createdAt}</p>
      <button onClick={handleDelete}>🗑️</button>
    </>
  );
}
