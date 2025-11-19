import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/TopicSubNav.css";

// Define all secondary tabs for the topic page
const links = [
  { path: "", label: "Lecture" },
  { path: "notes", label: "Notes" },
  { path: "videos", label: "Videos" },
  { path: "quizzes", label: "Quizzes" },
  { path: "dashboard", label: "Dashboard" },
];

export default function TopicSubNav({ basePath }) {
  const [open, setOpen] = useState(false);

  /** Ensure clean paths (avoid double slashes like /lectures/3//notes) */
  const cleanJoin = (root, subpath) => {
    if (!subpath) return root; // for Lecture tab
    return `${root}/${subpath}`.replace(/\/+/g, "/");
  };

  return (
    <nav className="topic-subnav" aria-label="Topic Navigation">
      {/* Mobile Toggle Button */}
      <button
        className="subnav-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="topic-subnav-list"
      >
        ☰
      </button>

      {/* Tab List */}
      <ul id="topic-subnav-list" className={open ? "open" : ""}>
        {links.map(({ path, label }) => {
          const targetPath = cleanJoin(basePath, path);

          return (
            <li key={path}>
              <NavLink
                to={targetPath}
                end={path === ""} // "Lecture" page should match exactly
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

