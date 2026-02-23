import PostCard from "../components/PostCard"
import "./feed.css"
import RightSideBar from "../components/RightSideBar"
import LeftSidebar from "../components/LeftSideBar"
import { Container, Row, Col } from "react-bootstrap"

const Feed = () => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <LeftSidebar />
        </Col>
        <Col md={6}>
          <PostCard
            id={1}
            name="Mario Rossi"
            position="Software Engineer"
            date="1 Gennaio 2024"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </Col>
        <Col md={3}>
          <RightSideBar />
        </Col>
      </Row>
    </Container>
  )
}
export default Feed
