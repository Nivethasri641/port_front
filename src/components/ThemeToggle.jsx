import { useEffect, useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 900
  );

  useEffect(() => {
    // Theme apply
    if (dark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    // Watch screen resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <button
      onClick={() => setDark(!dark)}
      style={{
        position: "fixed",

        /* ✅ Desktop vs Mobile positioning */
        top: "25px",
        right: isMobile ? "85px" : "20px",

        zIndex: 3000,

        padding: "4px 14px",
        borderRadius: "20px",
        border: "none",
        cursor: "pointer",

        background: "var(--primary)",
        color: "#fff",
        fontWeight: "600",
        fontSize: "0.9rem",

        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease"
      }}
      onMouseEnter={(e) => {
        if (!isMobile) {
          e.currentTarget.style.transform = "scale(1.08)";
        }
      }}
      onMouseLeave={(e) => {
        if (!isMobile) {
          e.currentTarget.style.transform = "scale(1)";
        }
      }}
    >
      {dark ? "🔆" : "🌙"}
    </button>
  );
}

export default ThemeToggle;
