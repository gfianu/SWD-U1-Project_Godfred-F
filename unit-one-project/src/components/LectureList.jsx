import { Link } from "react-router";
import lecturesData from "../data/lecturesData";

function LectureList() {
  return (
    <section className="lecture-list">
      <h2>Lectures</h2>
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
      </ul>
    </section>
  );
}

export default LectureList;
