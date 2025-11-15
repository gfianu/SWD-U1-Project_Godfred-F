import { useParams, Link } from "react-router";
import lecturesData from "../data/lecturesData";
import "../styles/LectureDetail.css";

function LectureDetail() {
  const { id } = useParams();
  const lecture = lecturesData.find((lec) => lec.id === Number(id));

  // Handle case where the lecture ID doesn't exist
  if (!lecture) {
    return (
      <section className="lecture-detail container">
        <h2>Lecture Not Found</h2>
        <p>Sorry, we could not find the lecture you were looking for.</p>
        <Link to="/lectures" className="btn">
          Back to Lectures
        </Link>
      </section>
    );
  }

  return (
    <section className="lecture-detail container">
      <header className="lecture-header">
        <h2 className="lecture-title">{lecture.title}</h2>
        <p className="lecture-meta">
          <span>
            <strong>Topic:</strong> {lecture.topic}
          </span>
          <span>
            <strong>Duration:</strong> {lecture.duration}
          </span>
        </p>
      </header>

      <article className="lecture-description">
        <p>{lecture.description}</p>
      </article>

      <section className="lecture-video">
        <div className="video-placeholder">
          <p>🎥 Video Placeholder</p>
          <button className="btn-primary">Play Video</button>
        </div>
      </section>

      <section className="lecture-comments">
        <h3>Comments</h3>
        <p className="comment-empty">
          No comments yet. Be the first to comment!
        </p>
        <button className="btn">Add Comment</button>
      </section>

      <footer className="lecture-footer">
        <Link to="/lectures" className="btn-secondary">
          ← Back to All Lectures
        </Link>
      </footer>
    </section>
  );
}

export default LectureDetail;
