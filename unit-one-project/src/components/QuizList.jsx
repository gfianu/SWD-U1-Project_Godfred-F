import { Link } from "react-router";
import quizzesData from "../data/quizzesData";
import "../styles/QuizList.css";

export default function QuizList() {
  return (
    <section className="quiz-list-page container">
      <h2 className="quiz-list-title">Available Quizzes</h2>

      {quizzesData.length === 0 ? (
        <p className="quiz-list-empty">No quizzes available yet.</p>
      ) : (
        <ul className="quiz-list">
          {quizzesData.map((quiz) => (
            <li key={quiz.id} className="quiz-card">
              <div className="quiz-card-body">
                <h3 className="quiz-card-title">{quiz.title}</h3>
                <p className="quiz-card-topic">{quiz.topic}</p>
              </div>

              <Link to={`/quizzes/${quiz.id}`} className="btn quiz-card-btn">
                Take Quiz
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

