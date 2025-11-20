import { useLocation } from "react-router";
import "../styles/Notes.css";

function Notes() {
  const { search } = useLocation();
  const topic = new URLSearchParams(search).get("topic");

  return (
    <section className="notes-page container">
      <h2>Lecture Notes {topic ? `— ${topic}` : ""}</h2>
      <p>
        This section will include lecture summaries, downloadable notes, and
        topic-specific material.
      </p>
    </section>
  );
}

export default Notes;
