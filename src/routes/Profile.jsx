import { Container, Row, Col } from "react-bootstrap"
import PersonalInfo from "../components/PersonalInfo"
import ProfileAbout from "../components/ProfileAbout"
const Profile = () => {
  return (
    <Container className="profile-container">

      <Row className="justify-content-center">

        <Col md={12} lg={9}>

          <PersonalInfo />
          <ProfileAbout />

        </Col>

        <Col lg={3}></Col>

      </Row>

    </Container>
  )
}
export default Profile
