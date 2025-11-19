import { useOutletContext } from "react-router";

export default function LectureVideos() {
  const { lecture } = useOutletContext();

  return (
    <section>
      <h2>Videos — {lecture.topic}</h2>
      <p className="muted">Embedded videos for this topic will appear here.</p>
      <div className="video-placeholder" style={{ marginTop: "1rem" }}>
        <p>Video URL: <span className="muted">{lecture.videoUrl}</span></p>
      </div>
    </section>
  );
}
