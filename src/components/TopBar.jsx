import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "../assets/css/TopBar.css";
import { Button } from "react-bootstrap";

const TopBar = () => {
  return (
    <Navbar expand="lg" className="linkedin-navbar bg-white shadow-sm px-0 px-md-5">
      <Container fluid className="px-3 px-lg-4">
        <Navbar.Brand href="#" className="me-3 me-lg-4">
          <i className="bi bi-linkedin text-primary fs-2"></i>
        </Navbar.Brand>

        <div className="linkedin-search-container flex-grow-1 mx-lg-4">
          <div className="linkedin-search">
            <i className="bi bi-search search-icon"></i>
            <Form.Control type="search" placeholder="Cerca" className="search-input" aria-label="Cerca su LinkedIn" />
          </div>
        </div>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto align-items-center gap-1 gap-lg-3" navbarScroll>
            <Nav.Link href="#home" className="nav-item-custom">
              <i className="bi bi-house-door-fill nav-icon"></i>
              <span className="nav-text">Home</span>
            </Nav.Link>

            <Nav.Link href="#rete" className="nav-item-custom">
              <i className="bi bi-people-fill nav-icon"></i>
              <span className="nav-text">Rete</span>
            </Nav.Link>

            <Nav.Link href="#lavoro" className="nav-item-custom">
              <i className="bi bi-briefcase-fill nav-icon"></i>
              <span className="nav-text">Lavoro</span>
            </Nav.Link>

            <Nav.Link href="#messaggi" className="nav-item-custom">
              <i className="bi bi-chat-dots-fill nav-icon"></i>
              <span className="nav-text">Messaggistica</span>
            </Nav.Link>

            <Nav.Link href="#notifiche" className="nav-item-custom">
              <i className="bi bi-bell-fill nav-icon"></i>
              <span className="nav-text">Notifiche</span>
            </Nav.Link>

            <NavDropdown
              title={
                <div className="d-flex flex-column align-items-center">
                  <img
                    src="https://avatar.iran.liara.run/public/boy?username=tu-profilo"
                    alt="Il tuo profilo"
                    className="nav-profile-avatar rounded-circle mb-1"
                    width="28"
                    height="28"
                  />

                  <div className="d-flex align-items-center custom-caret-parent">
                    <span className="nav-text me-1">Tu</span>
                  </div>
                </div>
              }
              id="profile-dropdown"
              align="end"
              className="nav-item-custom no-caret"
            >
              <NavDropdown.Item href="#profile">
                <div className="d-flex gap-1">
                  <img src="https://avatar.iran.liara.run/public/boy?username=tu-profilo" width="40" height="40" alt="Il tuo profilo" />
                  <div>
                    <div className="d-flex align-items-center gap-1">
                      <h5 className="mb-0 fs-5">Elena</h5>
                      <i
                        className="bi bi-check-circle-fill"
                        style={{ fontSize: "1.1rem" }} // dimensione simile al badge LI
                      ></i>
                    </div>
                    <p>fasdfdasfasdfsdsfaadsfasfsdaffafdsfdsaf</p>
                  </div>
                </div>
                <Button className=" d-block w-100">Visualizza profilo</Button>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#settings">Impostazioni e privacy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Esci</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={
                <div className="d-flex flex-column align-items-center">
                  <i className="bi bi-grid-3x3-gap-fill nav-icon"></i>

                  <div className="d-flex align-items-center custom-caret-parent">
                    <span className="nav-text me-1">Per le aziende</span>
                  </div>
                </div>
              }
              id="profile-dropdown"
              align="end"
              className="nav-item-custom no-caret px-0 border-start"
            >
              <NavDropdown.Divider />
              <NavDropdown.Item href="#settings">Impostazioni e privacy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Esci</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
