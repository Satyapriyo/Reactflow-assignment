import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    if (theme !== "dark") {
      toast("Hello Darkness!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  return (
    <div className="mb-2">
      <button className="btn absolute right-0 m-2" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <Toaster />
    </div>
  );
};

export default ThemeToggle;
