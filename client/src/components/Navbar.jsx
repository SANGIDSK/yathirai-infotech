import { useState } from "react";
import "./Navbar.css";

const navItems = [
  { id: "home", label: "HOME", icon: "⌂" },
  { id: "about", label: "ABOUT US", icon: "◈" },
  { id: "courses", label: "COURSES", icon: "⚡" },
  { id: "contact", label: "CONTACT US", icon: "✉" },
];

export default function Navbar({ activePage, setActivePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id) => {
    setActivePage(id);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        {/* Logo */}
        <div className="navbar__logo" onClick={() => handleNav("home")}>
          <div className="navbar__logo-img">
            {/* Place your logo here — replace src with your logo path */}
            <img
              src="/logo.png"
              alt="Yathirai Logo"
              onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
            />
            <div className="navbar__logo-fallback" style={{ display: "none" }}>YI</div>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__brand">YATHIRAI</span>
            <span className="navbar__sub">INFOTECH</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="navbar__links">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`navbar__link ${activePage === item.id ? "active" : ""}`}
                onClick={() => handleNav(item.id)}
              >
                <span className="navbar__link-icon">{item.icon}</span>
                <span>{item.label}</span>
                <span className="navbar__link-underline" />
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`navbar__mobile-link ${activePage === item.id ? "active" : ""}`}
            onClick={() => handleNav(item.id)}
          >
            <span className="navbar__link-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
