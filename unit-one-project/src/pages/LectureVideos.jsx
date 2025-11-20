import { useOutletContext } from "react-router";
import convertDriveUrl from "../utils/convertDriveUrl";

export default function LectureVideos() {
  const { lecture } = useOutletContext();
  const videos = lecture.videos || [];

  return (
    <section>
      <h2>Videos — {lecture.title}</h2>

      {videos.length === 0 ? (
        <p className="muted">No videos available for this topic yet.</p>
      ) : (
        <ul className="video-list">
          {videos.map((v, idx) => (
            <li key={idx} style={{ marginBottom: "2rem", listStyle: "none" }}>
              <h3>{v.name}</h3>

              <iframe
                src={convertDriveUrl(v.url)}
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



