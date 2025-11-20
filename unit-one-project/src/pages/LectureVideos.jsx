import { useEffect } from "react";
import { useOutletContext } from "react-router";

export default function LectureVideos() {
  const { lecture } = useOutletContext();
  const videos = lecture.videos || [];

  // Log last activity when user visits the videos tab
  useEffect(() => {
    localStorage.setItem(`activity_${lecture.title}`, "Viewed Videos");
  }, [lecture.title]); // runs when switching between lecture topics

  return (
    <section>
      <h2>Videos — {lecture.title}</h2>

      {videos.length === 0 ? (
        <p className="muted">No videos available for this topic yet.</p>
      ) : (
        <ul className="video-list">
          {videos.map((v, idx) => (
            <li key={idx} style={{ marginBottom: "2rem" }}>
              <h3>{v.title}</h3>

              <iframe
                src={v.url}
                title={v.title}
                allowFullScreen
                style={{
                  width: "100%",
                  height: "360px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  marginTop: "0.5rem",
                }}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}



