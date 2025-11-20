import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/LectureList.css";

function LectureList({ lectures = [] }) {
  const [search, setSearch] = useState("");

  // Filter by title ONLY (your new data has no "topic")
  const filtered = lectures.filter((lec) =>
    lec.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="lecture-list container">
      <h2 className="lecture-heading">Lecture Library</h2>

      <input
        type="text"
        className="lecture-search"
        placeholder="Search lectures..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search lectures"
      />

      <ul className="lecture-list-ul">
        {filtered.length === 0 ? (
          <li className="no-results">No lectures found.</li>
        ) : (
          filtered.map((lecture) => (
            <li key={lecture.id} className="lecture-list-item">
              <div className="lecture-card">
                <h3>{lecture.title}</h3>

                <Link to={`/lectures/${lecture.id}`} className="lecture-btn">
                  View Topic
                </Link>
              </div>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}

export default LectureList;

