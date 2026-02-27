import "../assets/css/PostForm.css";
import { Alert, Spinner } from "react-bootstrap";
import { useState } from "react";

function PostForm({ onPostCreated }) {
  // caricamento testo del post
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // caricamento immagine nel post
  const [showImgInput, setShowImgInput] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const fetchURL = "https://striveschool-api.herokuapp.com/api/posts/";
  const apiKEy =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTljMTE1ODBiYzFkZTAwMTU3N2I3OWQiLCJpYXQiOjE3NzE4MzU3MzYsImV4cCI6MTc3MzA0NTMzNn0.sqNA4zaClXn_qt6yLcLVvYsT1sOeGx_2BmLmdLBSF40";

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim() && !imageFile) return;

    setLoading(true);
    setError(null);

    fetch(fetchURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKEy}`,
      },
      body: JSON.stringify({ text }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Errore nella creazione del post");
        return res.json();
      })
      .then((createdPost) => {
        // se post solo testo vado già con la chiamata di refetch
        if (!imageFile) {
          setText("");
          setLoading(false);
          onPostCreated?.(); // refetch di feed
          return;
        }

        // seconda chiamata necessaria (se carico post con immagine)
        const formData = new FormData();
        formData.append("post", imageFile);

        return fetch(`${fetchURL}${createdPost._id}`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKEy}`,
          },
          body: formData,
        })
          .then((uploadRes) => {
            if (!uploadRes.ok)
              throw new Error("Errore nel caricamento immagine");
            return uploadRes.json();
          })
          .then(() => {
            setText("");
            setImageFile(null);
            setShowImgInput(false);
            setLoading(false);

            onPostCreated?.(); // refetch di feed
          });
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setLoading(false);
      });
  }

  return (
    <div>
      <div className="post-form-container mb-3">
        <div className="form-post">
          <img className="form-img" src="https://placedog.net/50/50" alt="" />
          <textarea
            className="form-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Crea un post..."
            rows={1}
          />
        </div>
        <div className="form-actions">
          <button className="post-button fw-bolder text-secondary">
            <i className="bi bi-play-btn-fill green-color me-1"></i>Video
          </button>
          <button
            type="button"
            className="post-button"
            onClick={() =>
              setShowImgInput((show) => {
                const next = !show;
                if (!next) setImageFile(null); // se nascondo input, resetto immagine
                return next;
              })
            }
          >
            <i className="bi bi-image-fill blue-color me-1"> </i>
            Foto
          </button>
          <button className="post-button" onClick={handleSubmit}>
            <i className="bi bi-chat-right-text-fill orange-color me-1"></i>
            Posta
          </button>
        </div>
        {/* mostra campo inserisci immagine */}
        <div>
          {showImgInput && (
            <div className=" fs-6 text-muted">
              <input
                className="my-3 ms-5 d-block"
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
              />
            </div>
          )}
        </div>
        {/* mostra anteprima immagine */}
        {showImgInput && imageFile && (
          <div className="mt-2">
            <img
              src={URL.createObjectURL(imageFile)}
              alt="preview"
              style={{
                width: "100%",
                maxHeight: 300,
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <button
              type="button"
              className="post-button mt-2"
              onClick={() => setImageFile(null)}
            >
              Rimuovi immagine
            </button>
          </div>
        )}
      </div>

      {loading && (
        <Spinner
          className="d-block mx-auto mb-5"
          animation="border"
          role="status"
        ></Spinner>
      )}
      {error && <Alert variant="danger">Errore nel pubblicare il post</Alert>}
    </div>
  );
}

export default PostForm;
