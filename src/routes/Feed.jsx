import PostCard from "../components/PostCard"
import { useEffect, useState } from "react"
import { Container, Col, Row } from "react-bootstrap"
import Alert from "react-bootstrap/Alert"
import { Spinner } from "react-bootstrap"
import "./feed.css"


const Feed = () => {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchURL = 'https://striveschool-api.herokuapp.com/api/posts/'
  const apiKEy = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTljMTE1ODBiYzFkZTAwMTU3N2I3OWQiLCJpYXQiOjE3NzE4MzU3MzYsImV4cCI6MTc3MzA0NTMzNn0.sqNA4zaClXn_qt6yLcLVvYsT1sOeGx_2BmLmdLBSF40'

  const getPosts = () => {
    fetch(fetchURL, {
      headers: {
        authorization: 'Bearer ' + apiKEy
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Errore nel recupero dei post')
        }
      })
      .then((data) => {
        console.log(data)
        setPosts(data);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setError(err.message)
        setLoading(false)
      })
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
<<<<<<< HEAD
    // post
    <Container className="feed-container">
=======

    // post  
    <Container fluid className="feed-container">
>>>>>>> 957cc0e16b00fcfa5ac9b22e56429c214dd26298
      <Row className="justify-content-center">

        {/* colonna sx */}
        <Col md={3}>

        </Col>

        {loading ? (<Spinner animation="border" />) : error ? (<Alert variant="danger" className="text-center">{error}</Alert>) : (
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
          </Col>)}

        {/* colonna dx */}
        <Col md={3}>

        </Col>
      </Row>
    </Container>
  )


}
export default Feed
