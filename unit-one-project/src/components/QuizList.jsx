import { Link } from "react-router";
import quizzesData from "../data/quizzesData";

function QuizList() {
  return (
    <section className="quiz-list container">
      <h2>Available Quizzes</h2>
      <ul>
        {quizzesData.map((quiz) => (
          <li key={quiz.id} className="quiz-item">
            <h3>{quiz.title}</h3>
            <p>{quiz.topic}</p>
            <Link to={`/quizzes/${quiz.id}`} className="btn">
              Take Quiz
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default QuizList;
