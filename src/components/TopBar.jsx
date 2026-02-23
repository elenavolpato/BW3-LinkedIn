import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "../assets/css/TopBar.css";

const TopBar = function () {
  return (
    <>
      <Navbar expand="lg" className=" bg-body-light">
        <Container>
          <Navbar.Brand href="#">
            <i className="bi bi-linkedin text-primary fs-2"></i>
          </Navbar.Brand>
          <div className="linkedin-search-container">
            <div className="linkedin-search">
              <i className="bi bi-search search-icon"></i>
              <Form.Control type="search" placeholder="Cerca" className="search-input" />
            </div>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#action1" className="d-flex flex-column align-items-center nav-item-custom">
                <i className="bi bi-house-door-fill nav-icon"></i>
                <span className="nav-text">Home</span>
              </Nav.Link>

              <Nav.Link href="#action2" className="d-flex flex-column align-items-center nav-item-custom">
                <i className="bi bi-people-fill nav-icon"></i> {/* esempio altra icona */}
                <span className="nav-text">La mia rete</span>
              </Nav.Link>

              {/* altri item allo stesso modo */}
            </Nav>

            <Form className="d-flex">
              <NavDropdown title="Tu" id="navbarScrollingDropdown" className="fs-6">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
              </NavDropdown>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;
