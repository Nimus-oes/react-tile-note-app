import type { Note } from "../../types";
import styles from "./NoteCard.module.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

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

  const getLocalDate = () => {
    const date = new Date(note.createdAt);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className={styles.container} style={{ backgroundColor: note.color }}>
      <p className={styles.textWrapper}>{note.text}</p>
      <div className={styles.bottomWrapper}>
        <p className={styles.date}>{getLocalDate()}</p>
        <div className={styles.btnWrapper}>
          <button onClick={handleUpdate} className={styles.favBtn}>
            {note.isFavorite ? <FaStar /> : <FaRegStar />}
          </button>
          <button onClick={handleDelete} className={styles.delBtn}>
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
}
