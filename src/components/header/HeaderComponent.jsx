import "./HeaderComponent.scss";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import useDarkMode from "../../hooks/useDarkMode";

function Header() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
      </nav>
      <button
        className="fancy-btn dark-mode-btn"
        type="button"
        onClick={toggleDarkMode}
      ></button>
    </header>
  );
}

export default Header;
