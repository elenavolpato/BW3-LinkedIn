import { Container, Row, Col } from "react-bootstrap"
import { useEffect, useState } from "react"
import { Spinner, Alert } from "react-bootstrap"
import "../assets/css/feed.css"
import PostCard from "../components/PostCard"
import RightSideBar from "../components/RightSideBar"
import LeftSidebar from "../components/LeftSideBar"
import PostForm from "../components/PostForm"

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchURL = "https://striveschool-api.herokuapp.com/api/posts/"
  const apiKEy = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTljMTE1ODBiYzFkZTAwMTU3N2I3OWQiLCJpYXQiOjE3NzE4MzU3MzYsImV4cCI6MTc3MzA0NTMzNn0.sqNA4zaClXn_qt6yLcLVvYsT1sOeGx_2BmLmdLBSF40"

  const getPosts = () => {
    setLoading(true)
    setError(null)

    fetch(fetchURL, {
      headers: {
        authorization: "Bearer " + apiKEy,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Errore nel recupero dei post")
        }
      })
      .then((data) => {

        const sortedPosts = [...data].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        const limit = sortedPosts.slice(0, 20);

        console.log(limit)
        setLoading(false)
        setPosts(limit)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
        setError(err.message)
      })
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getPosts()
  }, [])

  return (
    // post
    <Container className="feed-container">
      <Row className="justify-content-center">

        {/* colonna sx */}
        <Col md={3} className="sticky-side" >
          <LeftSidebar />
        </Col>

        {/* colonna centrale */}
        <Col md={6}>
          <PostForm
            onPostCreated={getPosts}
          />
          {loading ? (
            <Spinner className="d-block mx-auto mt-5" animation="border" />
          ) : error ? (
            <Alert className="text-center" variant="danger">
              {error}
            </Alert>
          ) : (
            posts.map((post) => (
              <PostCard
                key={post._id}
                id={post._id}
                name={
                  post.user?.name && post.user.name.trim() !== ""
                    ? post.user.name
                    : "Ero troppo pigro per metterlo"
                }
                position={post.user?.title ?? ""}
                date={new Date(post.createdAt).toLocaleDateString()}
                description={post.text}
                img={post.image}
                video={post.video}
              />
            ))
          )}
        </Col>

        {/* colonna dx */}
        <Col md={3} className="sticky-side">
          <RightSideBar />
        </Col>
      </Row>
    </Container>
  )
}
export default Feed
