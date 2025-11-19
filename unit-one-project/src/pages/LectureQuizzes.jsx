import { useOutletContext, Link } from "react-router";
import quizzes from "../data/quizzesData";

export default function LectureQuizzes() {
  const { lecture } = useOutletContext();

  const filtered = quizzes.filter((q) => q.topic === lecture.topic);

  return (
    <section>
      <h2>Quizzes — {lecture.topic}</h2>

      {filtered.length === 0 ? (
        <p className="muted">No quizzes for this topic yet.</p>
      ) : (
        <ul>
          {filtered.map((q) => (
            <li key={q.id}>
              <h3>{q.title}</h3>
              <Link to={`/quizzes/${q.id}`} className="btn">Take Quiz</Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
