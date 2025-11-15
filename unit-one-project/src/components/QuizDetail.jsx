import { useParams, Link } from "react-router";
import { useState } from "react";
import quizzesData from "../data/quizzesData";

function QuizDetail() {
  const { id } = useParams();
  const quiz = quizzesData.find((q) => q.id === Number(id));
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  if (!quiz) {
    return (
      <section className="quiz-detail container">
        <h2>Quiz Not Found</h2>
        <Link to="/quizzes" className="btn">
          Back to Quizzes
        </Link>
      </section>
    );
  }

  const handleOptionSelect = (questionIndex, option) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: option });
  };

  const handleSubmit = () => {
    let newScore = 0;
    quiz.questions.forEach((q, i) => {
      if (selectedAnswers[i] === q.answer) newScore++;
    });
    setScore(newScore);
  };

  return (
    <section className="quiz-detail container">
      <h2>{quiz.title}</h2>
      <p>{quiz.description}</p>

      <form onSubmit={(e) => e.preventDefault()}>
        {quiz.questions.map((q, index) => (
          <div key={index} className="quiz-question">
            <h4>{q.question}</h4>
            {q.options.map((option, i) => (
              <label key={i}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  onChange={() => handleOptionSelect(index, option)}
                  checked={selectedAnswers[index] === option}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <button type="button" className="btn" onClick={handleSubmit}>
          Submit Quiz
        </button>
      </form>

      {score !== null && (
        <div>
          <h3>
            Your Score: {score} / {quiz.questions.length}
          </h3>
        </div>
      )}

      <Link to="/quizzes" className="btn-secondary">
        Back to Quizzes
      </Link>
    </section>
  );
}

export default QuizDetail;
