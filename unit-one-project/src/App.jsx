import { Routes, Route } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LectureList from "./components/LectureList";
import LectureDetail from "./components/LectureDetail";
import QuizList from "./components/QuizList";
import QuizDetail from "./components/QuizDetail";
import Dashboard from "./components/Dashboard";
import Notes from "./pages/Notes";
import { useState } from "react";
import lecturesData from "./data/lecturesData";
import quizzesData from "./data/quizzesData";

function App() {
  const [lectures, setLectures] = useState(lecturesData);
  const [quizzes, setQuizzes] = useState(quizzesData);

  return (
    <>
      <Header />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/lectures"
            element={<LectureList lectures={lectures} />}
          />
          <Route path="/lectures/:id" element={<LectureDetail />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/quizzes" element={<QuizList quizzes={quizzes} />} />
          <Route path="/quizzes/:id" element={<QuizDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
