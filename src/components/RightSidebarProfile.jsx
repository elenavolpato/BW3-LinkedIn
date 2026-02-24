import { Container } from "react-bootstrap";
import "../assets/css/RightSidebarProfile.css";

const RightSideBarProfile = () => {
  return (
    <>
      <Container className="container-right-sidebar-profile d-flex flex-column gap-3 bg-white p-3">
        <div className="lingua-profilo">
          <div className="d-flex align-items-center justify-content-between gap-2">
            <h2>Lingua del profilo</h2>
            <i className="bi bi-pencil"></i>
          </div>
          <span>Italiano</span>
        </div>
        <div className="divider"></div>
        <div className="lingua-profilo">
          <div className="d-flex align-items-center justify-content-between gap-2">
            <h2>Profilo Pubblico e URL</h2>
            <i className="bi bi-pencil"></i>
          </div>
          <span>www.linkedin.com/in/magnificorettore-99999aura</span>
        </div>
      </Container>
    </>
  );
};

export default RightSideBarProfile;
