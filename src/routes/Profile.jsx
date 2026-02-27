import { Container, Row, Col } from "react-bootstrap"
import ExperienceList from "../components/ExperienceList"
import PersonalInfo from "../components/PersonalInfo"
import RightSidebarProfile from "../components/RightSidebarProfile"
import FooterProfile from "../components/FooterProfile"
import FormazioneProfile from "../components/FormazioneProfile"
import Activities from "../components/Activities"
import ProfileAbout from "../components/ProfileAbout"

const Profile = () => {
  return (
    <Container className="py-3">
      <Row>
        <Col
          lg={9}
          md={10}
          sx={12}
        >
          <PersonalInfo />
          <ProfileAbout />
          <ExperienceList />
          <FormazioneProfile />
          <Activities />
        </Col>
        <Col
          lg={3}
          md={2}
          className="d-none d-lg-block"
        >
          <RightSidebarProfile />
        </Col>
      </Row>
      <FooterProfile />
    </Container>
  )
}
export default Profile
