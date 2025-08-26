import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <div>TileNote</div>
      <div className={styles.rightWrapper}>
        <button className={styles.rightButton}>↡</button>
        <button className={styles.rightButton}>⭐️</button>
        <button className={styles.rightButton}>🌙</button>
      </div>
    </header>
  );
}
