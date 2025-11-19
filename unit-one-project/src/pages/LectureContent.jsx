import { useOutletContext } from "react-router";

export default function LectureContent() {
  const { lecture } = useOutletContext();

  return (
    <article className="lecture-description">
      <p>{lecture.description}</p>

      <div className="lecture-video" style={{ marginTop: "1rem" }}>
        {/* We'll embed your video later. For now show the URL as safe text */}
        <div className="video-placeholder">
          <p>
            Video URL: <span className="muted">{lecture.videoUrl}</span>
          </p>
        </div>
      </div>
    </article>
  );
}
