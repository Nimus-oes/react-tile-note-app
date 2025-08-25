import type { Note } from "../../types";

interface NoteCardProps {
  note: Note;
  onDelete: (noteId: string) => void;
  onUpdate: (noteToUpdate: Note) => void;
}

export default function NoteCard({ note, onDelete, onUpdate }: NoteCardProps) {
  const handleDelete = () => {
    onDelete(note.id);
  };

  const handleUpdate = () => {
    onUpdate({ ...note, isFavorite: !note.isFavorite });
  };

  return (
    <>
      <h1>{note.text}</h1>
      <p>{note.createdAt}</p>
      <button onClick={handleUpdate}>{note.isFavorite ? "★" : "☆"}</button>
      <button onClick={handleDelete}>🗑️</button>
    </>
  );
}
