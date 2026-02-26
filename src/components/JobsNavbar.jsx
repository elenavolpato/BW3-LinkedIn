import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../assets/css/TopBar.css";

import { Button } from "react-bootstrap";
import { logoutUser } from "../redux/actions/loginAuth";
import { useState } from "react";

const TopBar = () => {
  const profileData = useSelector((state) => state.profile?.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery) {
      navigate(`/jobs?search=${encodeURIComponent(trimmedQuery)}`);
    }
  };

  const handleLogout = function () {
    dispatch(logoutUser());
    navigate("/login");
  };

  const { isAuthenticated } = useSelector((state) => state.auth || {});

  return (
    <Navbar expand="lg" className="linkedin-navbar bg-white shadow-sm customNavbar">
      <Container fluid className="p-0">
        <Navbar.Brand href="#" className="me-1">
          <i className="bi bi-linkedin text-primary fs-2"></i>
        </Navbar.Brand>

        <div className="linkedin-search-container flex-grow-1 mb-3 mb-md-0">
          <Form className="linkedin-search" onSubmit={handleSearch}>
            <i className="bi bi-search search-icon"></i>
            <Form.Control
              type="search"
              placeholder="Cerca Lavoro"
              className="search-input"
              aria-label="Cerca su LinkedIn"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form>
        </div>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto align-items-center" navbarScroll>
            <Link to="/" className="nav.link text-decoration-none nav-item-custom">
              <i className="bi bi-house-door-fill nav-icon"></i>
              <span className="nav-text">Home</span>
            </Link>

            <Nav.Link href="#rete" className="nav-item-custom">
              <i className="bi bi-people-fill nav-icon"></i>
              <span className="nav-text">Rete</span>
            </Nav.Link>

            <Link to="/jobs" className="nav-link nav-item-custom">
              <i className="bi bi-briefcase-fill nav-icon"></i>
              <span className="nav-text">Lavoro</span>
            </Link>

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
                  <img src={profileData?.image} alt="Il tuo profilo" className="nav-profile-avatar rounded-circle mb-1" width="28" height="28" />

                  <div className="d-flex align-items-center custom-caret-parent">
                    <span className="nav-text me-1">Tu</span>
                  </div>
                </div>
              }
              id="profile-dropdown"
              align="end"
              className="nav-item-custom no-caret"
            >
              <NavDropdown.Item>
                <div className="d-flex gap-1" onClick={() => navigate("/profile")}>
                  <img src={profileData?.image} className="rounded-4" width="40" height="40" alt="Il tuo profilo" />
                  <div>
                    <div className="d-flex align-items-center gap-1">
                      <h5 className="mb-0 fs-5">
                        {profileData?.name || "Nome"} {profileData?.surname || "Cognome"}
                      </h5>
                      <i className="bi bi-shield-check" style={{ fontSize: "1.1rem" }}></i>
                    </div>
                    <p>{profileData?.title}</p>
                  </div>
                </div>
                <Button className=" d-block w-100 text-primary bg-light rounded-5 py-0 buttonViewProfile fw-bold" onClick={() => navigate("/profile")}>
                  Visualizza profilo
                </Button>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#settings">
                <h6 className="mb-0">Account</h6>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <span className="text-secondary">Impostazioni e privacy</span>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <span className="text-secondary">Guida</span>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <span className="text-secondary">Lingua</span>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#settings" className="d-flex flex-column">
                <h6 className="mb-0">Gestisci</h6>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <span className="text-secondary">Post e attivitá</span>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <span className="text-secondary">Account per la pubblicazione di offerte di lavoro</span>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              {isAuthenticated && (
                <NavDropdown.Item className="text-secondary" onClick={handleLogout}>
                  Esci
                </NavDropdown.Item>
              )}
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
              className="nav-item-custom no-caret px-0 py-0 border-start"
            >
              <NavDropdown.Item href="#settings" className="mb-4">
                <h3>Le mie app</h3>
              </NavDropdown.Item>
              <NavDropdown.Item href="#settings">
                <h6>Vendi</h6>
              </NavDropdown.Item>
              <NavDropdown.Item href="#settings">
                <h6>Gruppi</h6>
              </NavDropdown.Item>
              <NavDropdown.Item href="#logout">
                <small className="text-secondary">Talent</small>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
