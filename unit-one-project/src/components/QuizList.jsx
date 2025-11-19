import { Link } from "react-router-dom";
import "../styles/QuizList.css";

function QuizList({ quizzes = [] }) {
  return (
    <section className="quiz-list-page container">
      <h2>Available Quizzes</h2>

      <ul className="quiz-list">
        {quizzes.length === 0 ? (
          <li className="quiz-list-empty">No quizzes available.</li>
        ) : (
          quizzes.map((quiz) => (
            <li key={quiz.id} className="quiz-card">
              <div>
                <h3 className="quiz-card-title">{quiz.title}</h3>
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

