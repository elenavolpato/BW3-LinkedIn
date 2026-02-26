import "../assets/css/PostForm.css"
import { Alert, Spinner } from "react-bootstrap"
import { useState } from "react"

function PostForm({ onPostCreated }) {
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchURL = "https://striveschool-api.herokuapp.com/api/posts/"
  const apiKEy =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTljMTE1ODBiYzFkZTAwMTU3N2I3OWQiLCJpYXQiOjE3NzE4MzU3MzYsImV4cCI6MTc3MzA0NTMzNn0.sqNA4zaClXn_qt6yLcLVvYsT1sOeGx_2BmLmdLBSF40"

  function handleSubmit(e) {
    e.preventDefault()
    if (!text.trim()) return

    setLoading(true)
    setError(null)

    fetch(fetchURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKEy}`,
      },
      body: JSON.stringify({ text }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Errore nella creazione del post")
        }
      })
      .then((data) => {
        //console.log(data)
        setText("")
        setLoading(false)

        onPostCreated?.(data) // Funzione per aggiornare la lista dei post nel componente padre
      })
      .catch((err) => {
        console.log(err)
        setError(err.message)
        setLoading(false)
      })
  }

  return (
    <div>
      <div className="post-form-container mb-3">
        <div className="form-post">
          <img
            className="form-img"
            src="https://placedog.net/50/50"
            alt=""
          />
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
          <button className="post-button fw-bolder text-secondary">
            <i className="bi bi-image-fill blue-color me-1"></i>Foto
          </button>
          <button
            className="post-button fw-bolder text-secondary"
            onClick={handleSubmit}
          >
            <i className="bi bi-chat-right-text-fill orange-color me-1"></i>
            Posta
          </button>
        </div>
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
  )
}

export default PostForm
