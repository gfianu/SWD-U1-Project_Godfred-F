import { useOutletContext, Link } from "react-router-dom";
import quizzes from "../data/quizzesData";

export default function LectureQuizzes() {
  const { lecture } = useOutletContext();

  // Match quiz by exact title (quizzes use identical titles)
  const filtered = quizzes.filter((q) => q.title === lecture.title);

  return (
    <section>
      <h2>Quizzes for {lecture.title}</h2>

      {filtered.length === 0 ? (
        <p className="muted">No quizzes available for this lecture yet.</p>
      ) : (
        <ul>
          {filtered.map((q) => (
            <li key={q.id}>
              <h3>{q.title}</h3>

              {/* FIXED — Correct nested route */}
              <Link to={`${q.id}`} className="btn">
                Take Quiz
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}


