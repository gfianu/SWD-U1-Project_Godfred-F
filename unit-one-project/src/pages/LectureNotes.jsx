import { useEffect } from "react";
import { useOutletContext } from "react-router";
import notesData from "../data/notesData";

export default function LectureNotes() {
  const { lecture } = useOutletContext();

  //Log last activity when user opens the Notes tab
  useEffect(() => {
    localStorage.setItem(`activity_${lecture.title}`, "Viewed Notes");
  }, [lecture.title]);

  // 1️⃣ Find matching notes by lecture title
  const match = notesData.find(
    (entry) => entry.title.trim() === lecture.title.trim()
  );

  const lectureNotes = match ? match.notes : [];

  return (
    <section className="lecture-notes">
      <h2>Notes — {lecture.title}</h2>

      {lectureNotes.length === 0 ? (
        <p className="muted">No notes available for this topic yet.</p>
      ) : (
        <ul className="notes-list">
          {lectureNotes.map((note) => (
            <li key={note.id} className="note-item">
              <h3>{note.name}</h3>

              <div className="note-links">
                {/* Note PDF */}
                {note.noteUrl ? (
                  <a
                    href={note.noteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    View Notes
                  </a>
                ) : (
                  <span className="muted">Notes not uploaded yet</span>
                )}

                {/* Answer Key */}
                {note.keyUrl ? (
                  <a
                    href={note.keyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    View Key
                  </a>
                ) : (
                  <span className="muted">(No key available)</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

