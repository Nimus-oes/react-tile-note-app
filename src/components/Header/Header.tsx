import { useDarkTheme } from "../../context/DarkThemeProvider";
import type { Filter, Sorter } from "../../types";
import styles from "./Header.module.css";

interface HeaderProps {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
  sorter: Sorter;
  onSorterChange: (sorter: Sorter) => void;
}

export default function Header({
  filter,
  onFilterChange,
  sorter,
  onSorterChange,
}: HeaderProps) {
  const handleFilterChange = () => {
    onFilterChange(filter === "all" ? "fav" : "all");
  };

  const handleSorterChange = () => {
    onSorterChange(sorter === "asc" ? "desc" : "asc");
  };

  const { isDark, toggleDarkTheme } = useDarkTheme();

  return (
    <header className={styles.container}>
      <div>TileNote</div>
      <div className={styles.rightWrapper}>
        <button onClick={handleSorterChange} className={styles.sorterBtn}>
          {sorter === "asc" ? "↓" : "↑"}
        </button>
        <button onClick={handleFilterChange} className={styles.favBtn}>
          {filter === "all" ? "⭐️" : "All"}
        </button>
        <button onClick={toggleDarkTheme} className={styles.themeBtn}>
          {isDark ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}
