import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensures component is mounted on the client to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg bg-gray-800 duration-200 transition-colors"
    >
      {theme === "dark" ? (
        <i className="fa-regular fa-sun w-7 text-sky-500"></i>
      ) : (
        <i className="fa-regular fa-moon w-7 text-sky-500"></i>
      )}
    </button>
  );
}
