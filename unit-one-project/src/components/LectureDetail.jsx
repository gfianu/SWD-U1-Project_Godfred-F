import { useParams, Link } from "react-router";
import lecturesData from "../data/lecturesData";

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
      <h2>{lecture.title}</h2>
      <p>
        <strong>Topic:</strong> {lecture.topic}
      </p>
      <p>
        <strong>Duration:</strong> {lecture.duration}
      </p>
      <p>{lecture.description}</p>
      <div className="video-placeholder">
        <p>🎥 video: {lecture.videoUrl}</p>
      </div>
      <button className="btn">Add Comment</button>
      <br />
      <Link to="/lectures" className="btn-secondary">
        Back to All Lectures
      </Link>
    </section>
  );
}

export default LectureDetail;
