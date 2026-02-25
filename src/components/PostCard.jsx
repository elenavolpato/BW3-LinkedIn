import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/css/PostCard.css"
import { Button } from "react-bootstrap"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { togglePostExpanded } from "../redux/actions/postUiActions"
import { Card } from "react-bootstrap"

function PostCard(props) {
  const dispatch = useDispatch()
  const descRef = useRef(null)

  const lines = 3
  const postId = props.id

  const expanded = useSelector((state) => !!state.postUi.expandedById[postId])

  const [showToggle, setShowToggle] = useState(false)

  const computeShouldShow = () => {
    const el = descRef.current
    if (!el) return false

    // per "mostra meno"
    if (expanded) return true

    // per il clamp a 3 righe: se il testo è più alto di quello che ci sta in 3 righe, mostro "altro"
    return el.scrollHeight > el.clientHeight + 1
  }

  // Misura quando cambia testo o stato expanded
  useEffect(() => {
    const next = computeShouldShow()
    setShowToggle((prev) => (prev === next ? prev : next))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.description, expanded, lines])

  // per adaattarlo responsivamente
  useEffect(() => {
    const onResize = () => {
      const next = computeShouldShow()
      setShowToggle((prev) => (prev === next ? prev : next))
    }

    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.description, expanded, lines])

  // per adaattarlo responsivamente
  useEffect(() => {
    const onResize = () => {
      const next = computeShouldShow()
      setShowToggle((prev) => (prev === next ? prev : next))
    }

    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.description, expanded, lines])

  return (
    <Card className="p-3 mb-3">
      {/* caption */}
      <div className="post-caption">
        <img
          className="post-img"
          src="https://placedog.net/50/50"
          alt="foto profilo"
        />
        <div className="post-profile">
          <p className="mb-0 fs-6 fw-bold">{props.name}</p>
          <p className="mb-0">{props.position}</p>
          <p className="mb-0">{props.date}</p>
        </div>
      </div>

      {/* descrizione */}
      <div>
        <p
          ref={descRef}
          className="post-description"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: expanded ? "initial" : lines,
            overflow: expanded ? "visible" : "hidden",
          }}
        >
          {props.description}
        </p>

        {showToggle && (
          <Button
            variant="link"
            className="post-desc-toggle p-0"
            onClick={() => dispatch(togglePostExpanded(postId))}
          >
            {expanded ? "Mostra meno" : "Mostra di più"}
          </Button>
        )}
      </div>

      {/* contenuto immagine/video */}
      <div>
        {props.img ? (
          <img
            className="post-media-img"
            src={props.image}
            alt="contenuto del post"
          />
        ) : props.video ? (
          <video
            className="post-media-video"
            src={props.video}
            controls
            preload
          ></video>
        ) : null}
      </div>

      {/* pulsanti */}
      <div className="d-flex justify-content-evenly mt-4 border-top pt-2 ">
        <Button
          className="border-0 fw-bolder my-0"
          variant="outline-secondary"
        >
          <i class="fa-regular fa-thumbs-up"></i>
          <br />
          Consiglia
        </Button>
        <Button
          className="border-0 fw-bolder my-0"
          variant="outline-secondary"
        >
          <i class="fa-regular fa-comment"></i> <br />
          Commenta
        </Button>
        <Button
          className="border-0 fw-bolder my-0"
          variant="outline-secondary"
        >
          <i class="fa-solid fa-retweet"></i> <br />
          Diffondi il post
        </Button>
        <Button
          className="border-0 fw-bolder my-0"
          variant="outline-secondary"
        >
          <i class="fa-solid fa-paper-plane"></i> <br />
          Invia
        </Button>
      </div>
    </Card>
  )
}

export default PostCard
