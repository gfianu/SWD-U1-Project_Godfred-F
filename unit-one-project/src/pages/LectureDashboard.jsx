import { useOutletContext } from "react-router";
import notesData from "../data/notesData";
import quizzesData from "../data/quizzesData";
import "../styles/LectureDashboard.css";

export default function LectureDashboard() {
  const { lecture } = useOutletContext();

  // 🔹 Match notes by lecture title
  const notesEntry = notesData.find((n) => n.title === lecture.title);
  const notesCount = notesEntry ? notesEntry.notes.length : 0;

  // 🔹 Match quizzes by title (your quizzes use identical titles)
  const relatedQuizzes = quizzesData.filter((q) => q.title === lecture.title);
  const quizCount = relatedQuizzes.length;

  // 🔹 Videos count (your lecturesData stores an array of videoURLs)
  const videoCount = lecture.videos ? lecture.videos.length : 0;

  // 🔹 Retrieve last quiz score & last activity from localStorage
  const lastQuizScore =
    localStorage.getItem(`quizScore_${lecture.title}`) || "No recent quiz";

  const lastActivity =
    localStorage.getItem(`activity_${lecture.title}`) || "No recent activity";

  return (
    <section className="lecture-dashboard">
      <h2 className="dashboard-title">Progress — {lecture.title}</h2>

      <div className="dashboard-grid">

        {/* ---- VIDEOS ---- */}
        <div className="dash-card">
          <h3>Videos</h3>
          <p className="dash-number">{videoCount}</p>
          <p className="dash-label">Total videos</p>
        </div>

        {/* ---- NOTES ---- */}
        <div className="dash-card">
          <h3>Notes</h3>
          <p className="dash-number">{notesCount}</p>
          <p className="dash-label">Available notes</p>
        </div>

        {/* ---- QUIZZES ---- */}
        <div className="dash-card">
          <h3>Quizzes</h3>
          <p className="dash-number">{quizCount}</p>
          <p className="dash-label">Available quizzes</p>
        </div>

        {/* ---- LAST QUIZ SCORE ---- */}
        <div className="dash-card">
          <h3>Last Quiz Score</h3>
          <p className="dash-number">{lastQuizScore}</p>
          <p className="dash-label">Most recent attempt</p>
        </div>

        {/* ---- LAST ACTIVITY ---- */}
        <div className="dash-card">
          <h3>Last Activity</h3>
          <p className="dash-activity">{lastActivity}</p>
        </div>
      </div>

      {/* ---- QUICK NAVIGATION ---- */}
      <div className="quick-nav">
        <button
          className="btn"
          onClick={() => (window.location.href = `/lectures/${lecture.id}/videos`)}
        >
          Go to Videos
        </button>
        <button
          className="btn"
          onClick={() => (window.location.href = `/lectures/${lecture.id}/notes`)}
        >
          Go to Notes
        </button>
        <button
          className="btn"
          onClick={() => (window.location.href = `/lectures/${lecture.id}/quizzes`)}
        >
          Go to Quizzes
        </button>
      </div>
    </section>
  );
}

