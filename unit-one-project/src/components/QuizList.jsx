import { Link, useLocation } from "react-router";
import "../styles/QuizList.css";

function QuizList({ quizzes = [] }) {
  const { search } = useLocation();
  const topic = new URLSearchParams(search).get("topic");

  const filtered = topic ? quizzes.filter((q) => q.topic === topic) : quizzes;

  return (
    <section className="quiz-list-page container">
      <h2>Available Quizzes {topic ? `— ${topic}` : ""}</h2>

      <ul className="quiz-list">
        {filtered.length === 0 ? (
          <li className="quiz-list-empty">No quizzes found.</li>
        ) : (
          filtered.map((quiz) => (
            <li key={quiz.id} className="quiz-card">
              <div>
                <h3 className="quiz-card-title">{quiz.title}</h3>
                <p className="muted">{quiz.topic}</p>
              </div>

              <Link to={`/quizzes/${quiz.id}`} className="btn quiz-card-btn">
                Take Quiz
              </Link>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}

export default QuizList;
