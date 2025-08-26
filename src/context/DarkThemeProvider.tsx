import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface DarkThemeProviderPops {
  children: ReactNode;
}

interface DarkThemeContextType {
  isDark: boolean;
  toggleDarkTheme: () => void;
}

const DarkThemeContext = createContext<DarkThemeContextType | null>(null);

export default function DarkThemeProvider({ children }: DarkThemeProviderPops) {
  const [isDark, setIsDark] = useState<boolean>(false);
  const toggleDarkTheme = () => {
    setIsDark((prev) => !prev);
    updateDOMTheme(!isDark);
  };

  useEffect(() => {
    const isDarkTheme =
      localStorage.theme === "darkTheme" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(isDarkTheme);
    updateDOMTheme(isDarkTheme);
  }, []);

  return (
    <DarkThemeContext.Provider value={{ isDark, toggleDarkTheme }}>
      {children}
    </DarkThemeContext.Provider>
  );
}

function updateDOMTheme(isDark: boolean) {
  const html = document.documentElement;

  if (isDark) {
    html.classList.add("darkTheme");
    localStorage.theme = "darkTheme";
  } else {
    html.classList.remove("darkTheme");
    localStorage.theme = "lightTheme";
  }
}

export const useDarkTheme = () => {
  const context = useContext(DarkThemeContext);
  if (!context) {
    throw new Error("useDarkTheme must be used within a DarkThemeProvider");
    // An error indicates that the context is used outside the provider
    // or the provider is missing
  }
  return context;
};
