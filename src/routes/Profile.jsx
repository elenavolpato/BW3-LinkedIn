import { Container, Row, Col } from "react-bootstrap";
import ExperienceList from "../components/ExperienceList";
import PersonalInfo from "../components/PersonalInfo";
import RightSidebarProfile from "../components/RightSidebarProfile";
import FooterProfile from "../components/FooterProfile";

const Profile = () => {
  return (
    <Container className="pt-3">
      <Row>
        <Col lg={9} md={10} sx={12}>
          <PersonalInfo />
          <ExperienceList />
          <FooterProfile />
        </Col>
        <Col lg={3} md={2} className="d-none d-lg-block">
          <RightSidebarProfile />
        </Col>
      </Row>
    </Container>
  );
};
export default Profile;
