import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <div>TileNote</div>
      <div className={styles.rightWrapper}>
        <button className={styles.sorterBtn}>↡</button>
        <button className={styles.favBtn}>⭐️</button>
        <button className={styles.themeBtn}>🌙</button>
      </div>
    </header>
  );
}
