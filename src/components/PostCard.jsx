import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/PostCard.css";
import { Button } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglePostExpanded } from "../redux/actions/postUiActions";

function PostCard(props) {
    const dispatch = useDispatch();
    const descRef = useRef(null);

    const lines = 3;
    const postId = props.id;

    const expanded = useSelector(
        (state) => !!state.postUi.expandedById[postId]
    );

    const [showToggle, setShowToggle] = useState(false);

    const computeShouldShow = () => {
        const el = descRef.current;
        if (!el) return false;

        // per "mostra meno"
        if (expanded) return true;

        // per il clamp a 3 righe: se il testo è più alto di quello che ci sta in 3 righe, mostro "altro"
        return el.scrollHeight > el.clientHeight + 1;
    };

    // Misura quando cambia testo o stato expanded
    useEffect(() => {
        const next = computeShouldShow();
        setShowToggle((prev) => (prev === next ? prev : next));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.description, expanded, lines]);

    // per adaattarlo responsivamente
    useEffect(() => {
        const onResize = () => {
            const next = computeShouldShow();
            setShowToggle((prev) => (prev === next ? prev : next));
        };

        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.description, expanded, lines]);

    return (
        <div className="post-card">

            {/* caption */}
            <div className="post-caption">
                <img
                    className="post-img"
                    src="https://placedog.net/50/50"
                    alt="foto profilo"
                />
                <div className="post-profile">
                    <p className="mb-0 fs-6 fw-bold">Nome profilo {props.name}</p>
                    <p className="mb-0">posizione lavorativa {props.position}</p>
                    <p className="mb-0">data del post {props.date}</p>
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
                {props.img ?
                    (<img
                        className="post-media-img"
                        src={props.img}
                        alt="contenuto del post" />) :
                    props.video ?
                        (<video
                            className="post-media-video"
                            src={props.video}
                            controls
                            preload
                        ></video>) :
                        null}
            </div>

            {/* pulsanti */}
            <div className="post-buttons">
                <button className="post-button">Consiglia</button>
                <button className="post-button">Commenta</button>
                <button className="post-button">Diffondi il post</button>
                <button className="post-button">Invia</button>

            </div>
        </div>
    );
}

export default PostCard;