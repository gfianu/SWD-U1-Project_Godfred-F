import { useState } from "react";
import { useParams, Link } from "react-router";
import quizzesData from "../data/quizzesData";
import "../styles/QuizPage.css";

export default function QuizPage() {
  const { id } = useParams();
  const quiz = quizzesData.find((q) => q.id === Number(id));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (!quiz) {
    return (
      <section className="quiz-page">
        <h2>Quiz Not Found</h2>
        <Link to="/quizzes" className="btn-secondary">
          Back to Quizzes
        </Link>
      </section>
    );
  }

  const currentQuestion = quiz.questions[currentIndex];

  function handleSelect(option) {
    if (selected) return; // lock answer after choosing
    setSelected(option);

    if (option === currentQuestion.correct) {
      setScore((prev) => prev + 1);
    }
  }

  function handleNext() {
    setSelected(null);

    if (currentIndex === quiz.questions.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  }

  return (
    <section className="quiz-page">
      <h2>{quiz.title}</h2>

      {!finished ? (
        <>
          {/* Card wrapper matches CSS */}
          <div className="quiz-card">
            <h3>
              Question {currentIndex + 1} of {quiz.questions.length}
            </h3>
            <p>{currentQuestion.question}</p>

            <ul className="quiz-options">
              {currentQuestion.options.map((opt) => (
                <li
                  key={opt}
                  onClick={() => handleSelect(opt)}
                  className={selected === opt ? "selected" : ""}
                >
                  {opt}
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation uses .quiz-nav (CSS expects this) */}
          <div className="quiz-nav">
            <button
              onClick={handleNext}
              disabled={!selected}
            >
              {currentIndex === quiz.questions.length - 1
                ? "Finish Quiz"
                : "Next"}
            </button>
          </div>
        </>
      ) : (
        <div className="quiz-result-box">
          <h2>Quiz Complete!</h2>
          <p>
            You scored <strong>{score}</strong> out of{" "}
            <strong>{quiz.questions.length}</strong>.
          </p>

          <div className="quiz-nav">
            <Link to="/quizzes">
              <button>Back to Quizzes</button>
            </Link>

            <button onClick={() => window.location.reload()}>
              Retake Quiz
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

