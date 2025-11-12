import { useState } from "react";
import { Link } from "react-router";
import "../styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      
        {/* Placeholder for ChemLearn graphical logo */}
        <h1>ChemLearn</h1>

      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>

      <nav>

      <ul className={menuOpen ? "open" : ""}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/lectures">Lectures</Link></li>
          <li><Link to="/notes">Notes</Link></li>
          <li><Link to="/quizzes">Quizzes</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
      </ul>
      </nav>
    </header>
  );
}

export default Header;
