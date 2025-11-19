import { useOutletContext } from "react-router";

export default function LectureDashboard() {
  const { lecture } = useOutletContext();

  return (
    <section>
      <h2>Progress — {lecture.topic}</h2>
      <p className="muted">Topic progress, quiz history, and saved notes will show here.</p>
    </section>
  );
}
