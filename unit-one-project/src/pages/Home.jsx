import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import "../styles/HomePage.css";

function Home() {
  const buttonRef = useRef(null);

  // Scroll to the Get Started button when page loads
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  return (
    <section className="start-hero">
      <div className="start-content">
        <h1 className="chemlearn-logo">ChemLearn</h1>

        <p className="tagline">
          Master Organic Chemistry with Lectures, Notes, and Quizzes.
        </p>

        <Link to="/lectures" ref={buttonRef} className="get-started-btn">
          Get Started
        </Link>
      </div>
    </section>
  );
}

export default Home;

