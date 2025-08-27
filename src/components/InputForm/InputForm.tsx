import type { Note } from "../../types";
import { v4 as uuidv4 } from "uuid";
import styles from "./InputForm.module.css";

interface InputFormProps {
  onAdd: (noteToAdd: Note) => void;
}

export default function InputForm({ onAdd }: InputFormProps) {
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
    });

    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input name="text" className={styles.inputField} />
      <button className={styles.button}>Add</button>
    </form>
  );
}
