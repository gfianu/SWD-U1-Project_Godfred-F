import { useOutletContext } from "react-router";

export default function LectureNotes() {
  const { lecture } = useOutletContext();

  return (
    <section>
      <h2>Notes — {lecture.topic}</h2>
      <p className="muted">Lecture notes for this topic will be available here.</p>
      {/* Later you can map an array of notes and render them */}
    </section>
  );
}