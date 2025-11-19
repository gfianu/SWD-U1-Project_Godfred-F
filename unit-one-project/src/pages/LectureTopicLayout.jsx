import { useParams, Link, Outlet } from "react-router-dom";
import lectures from "../data/lecturesData";
import TopicSubNav from "../components/TopicSubNav";
import "../styles/LectureTopicLayout.css"; // NEW stylesheet you will add

export default function LectureTopicLayout() {
  const { id } = useParams();
  const lecture = lectures.find((l) => l.id === Number(id));

  if (!lecture) {
    return (
      <section className="lecture-not-found container">
        <h2>Lecture Not Found</h2>
        <p>The lecture you are looking for does not exist.</p>
        <Link to="/lectures" className="btn">Back to Lectures</Link>
      </section>
    );
  }

  const currentLectureId = lecture.id;
  const basePath = `/lectures/${currentLectureId}`;

  return (
    <div className="lecture-layout">

      {/* --------------------------------------------------
          LEFT SIDEBAR (Pearson style)
      -------------------------------------------------- */}
      <aside className="lecture-sidebar">
        <h3 className="sidebar-title">Lectures</h3>

        <ul className="sidebar-lecture-list">
          {lectures.map((lec) => (
            <li key={lec.id}>
              <Link
                to={`/lectures/${lec.id}`}
                className={`sidebar-link ${
                  lec.id === currentLectureId ? "active" : ""
                }`}
              >
                {lec.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* --------------------------------------------------
          MAIN CONTENT AREA
      -------------------------------------------------- */}
      <section className="lecture-main">

        {/* Topic header (Pearson style title + metadata) */}
        <header className="lecture-topic-header">
          <h1 className="lecture-title">{lecture.title}</h1>
          <p className="lecture-meta">
            Topic: {lecture.topic} • Duration: {lecture.duration}
          </p>
        </header>

        {/* Horizontal Pearson-style tabs */}
        <TopicSubNav basePath={basePath} />

        {/* Nested content (video, notes, quizzes, etc.) */}
        <main className="lecture-content-area">
          <Outlet context={{ lecture }} />
        </main>

      </section>
    </div>
  );
}


