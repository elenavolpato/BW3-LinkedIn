import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/PostCard.css";
import { Button } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglePostExpanded } from "../redux/actions/postUiActions";

function PostCard(props) {
    const dispatch = useDispatch();
    const descRef = useRef(null);

    const LINES = 3;
    const postId = props.id;

    const expanded = useSelector(
        (state) => !!state.postUi.expandedById[postId]
    );

    const [showToggle, setShowToggle] = useState(false);

    const computeShouldShow = () => {
        const el = descRef.current;
        if (!el) return false;

        // Se è espanso, deve esistere il bottone per poter richiudere
        if (expanded) return true;

        // Se il contenuto reale supera quello visibile => clamp attivo
        return el.scrollHeight > el.clientHeight + 1;
    };

    // Misura quando cambia testo o stato expanded
    useEffect(() => {
        const next = computeShouldShow();
        setShowToggle((prev) => (prev === next ? prev : next));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.description, expanded, LINES]);

    // Misura su resize (responsive)
    useEffect(() => {
        const onResize = () => {
            const next = computeShouldShow();
            setShowToggle((prev) => (prev === next ? prev : next));
        };

        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.description, expanded, LINES]);

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
                        WebkitLineClamp: expanded ? "initial" : LINES,
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
                        {expanded ? "Mostra meno" : "Altro"}
                    </Button>
                )}
            </div>
        </div>
    );
}

export default PostCard;