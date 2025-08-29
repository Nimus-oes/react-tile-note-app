import type { Note } from "../../types";
import { v4 as uuidv4 } from "uuid";
import styles from "./InputForm.module.css";
import { NOTE_COLORS } from "../../constants";
import { IoMdAddCircle } from "react-icons/io";

interface InputFormProps {
  onAdd: (noteToAdd: Note) => void;
}

export default function InputForm({ onAdd }: InputFormProps) {
  const getRandomColor = () => {
    return NOTE_COLORS[Math.floor(Math.random() * NOTE_COLORS.length)];
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const rawText = formData.get("text");
    const text = typeof rawText === "string" ? rawText.trim() : "";

    if (!text) {
      e.currentTarget.reset();
      return;
    }

    onAdd({
      id: uuidv4(),
      text,
      createdAt: Date.now(),
      isFavorite: false,
      color: getRandomColor(),
    });

    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input name="text" className={styles.inputField} />
      <button className={styles.button}>
        <IoMdAddCircle />
      </button>
    </form>
  );
}
