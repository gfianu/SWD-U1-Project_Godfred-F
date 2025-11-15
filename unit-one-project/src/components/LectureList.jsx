import { useState } from "react";
import { Link } from "react-router";
import lecturesData from "../data/lecturesData";
import "../styles/LectureList.css";

function LectureList() {
  const [search, setSearch] = useState("");

  const filteredLectures = lecturesData.filter((lecture) =>
    lecture.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="lecture-list">
      <h2>Lectures</h2>

      {/* Search Bar */}
      <input
        type="text"
        className="lecture-search"
        placeholder="Search lectures..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {lecturesData.map((lecture) => (
          <li key={lecture.id}>
            <h3>{lecture.title}</h3>
            <p>Topic: {lecture.topic}</p>
            <Link to={`/lectures/${lecture.id}`} className="btn">
              View Details
            </Link>
          </li>
        ))}

        {filteredLectures.length === 0 && (
          <p className="no-results">No lectures found.</p>
        )}

      </ul>
    </section>
  );
}

export default LectureList;
