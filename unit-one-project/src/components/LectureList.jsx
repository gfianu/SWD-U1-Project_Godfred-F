import { useState } from "react";
import { Link } from "react-router";
import "../styles/LectureList.css";

function LectureList({ lectures = [] }) {
  const [search, setSearch] = useState("");

  const filtered = lectures.filter(
    (lec) =>
      lec.title.toLowerCase().includes(search.toLowerCase()) ||
      lec.topic.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="lecture-list container">
      <h2>Lecture Library</h2>

      <input
        type="text"
        className="lecture-search"
        placeholder="Search lectures or topics..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search lectures"
      />

      <ul>
        {filtered.length === 0 ? (
          <li className="no-results">No lectures found.</li>
        ) : (
          filtered.map((lecture) => (
            <li key={lecture.id} className="lecture-list-item">
              <div className="topic-links">
                <Link to={`/lectures/${lecture.id}`} className="btn">
                  <h3>{lecture.title}</h3>
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
