import PostCard from "../components/PostCard"
import "../assets/css/feed.css"
import RightSideBar from "../components/RightSideBar"
import LeftSidebar from "../components/LeftSideBar"
import { Container, Row, Col } from "react-bootstrap"
import { useEffect, useState } from "react"

const Feed = () => {
  const [posts, setPosts] = useState([])

  const fetchURL = "https://striveschool-api.herokuapp.com/api/posts/"
  const apiKEy =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTljMTE1ODBiYzFkZTAwMTU3N2I3OWQiLCJpYXQiOjE3NzE4MzU3MzYsImV4cCI6MTc3MzA0NTMzNn0.sqNA4zaClXn_qt6yLcLVvYsT1sOeGx_2BmLmdLBSF40"

  const getPosts = () => {
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
        console.log(data)
        setPosts(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    // post
    <Container className="feed-container">
      <Row className="justify-content-center">
        {/* colonna sx */}
        <Col md={3}>
          <LeftSidebar />
        </Col>

        <Col md={6}>
          {posts.map((post) => (
            <PostCard
              key={post._id}
              id={post._id}
              name={
                post.user?.name && post.user.name.trim() !== ""
                  ? post.user.name
                  : "Ero troppo pigro per metterlo"
              }
              position={post.user.title}
              date={new Date(post.createdAt).toLocaleDateString()}
              description={post.text}
              image={post.image}
              video={post.video}
            />
          ))}
        </Col>
        {/* colonna dx */}
        <Col md={3}>
          <RightSideBar />
        </Col>
      </Row>
    </Container>
  )
}
export default Feed
