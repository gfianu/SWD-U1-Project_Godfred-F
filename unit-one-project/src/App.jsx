import { Routes, Route } from "react-router";
import "./App.css";

// Persistent layout
import Header from "./components/Header";
import Footer from "./components/Footer";

// Static pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Notes from "./pages/Notes";

// Lecture system
import LectureList from "./components/LectureList";
import LectureTopicLayout from "./pages/LectureTopicLayout";
import LectureContent from "./pages/LectureContent";
import LectureNotes from "./pages/LectureNotes";
import LectureVideos from "./pages/LectureVideos";
import LectureQuizzes from "./pages/LectureQuizzes";
import LectureDashboard from "./pages/LectureDashboard";

// Quizzes
import QuizList from "./components/QuizList";
import QuizPage from "./components/QuizPage";

// Main dashboard
import Dashboard from "./components/Dashboard";

// Data
import lecturesData from "./data/lecturesData";
import quizzesData from "./data/quizzesData";

function App() {
  return (
    <div id="body-container">
      <Header />
      <main>
        <Routes>
          {/* Landing pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Lecture list page */}
          <Route
            path="/lectures"
            element={<LectureList lectures={lecturesData} />}
          />

          {/* Topic layout with sidebar NavBar */}
          <Route
            path="/lectures/:id/*"
            element={<LectureTopicLayout lectures={lecturesData} />}
          >
            <Route index element={<LectureContent />} />
            <Route path="notes" element={<LectureNotes />} />
            <Route path="videos" element={<LectureVideos />} />
            <Route path="quizzes" element={<LectureQuizzes />} />
            <Route path="dashboard" element={<LectureDashboard />} />
          </Route>

          {/* Standalone Notes page */}
          <Route path="/notes" element={<Notes />} />

          {/* Quizzes */}
          <Route path="/quizzes" element={<QuizList quizzes={quizzesData} />} />
          <Route path="/quizzes/:id" element={<QuizPage />} />

          {/* User dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
