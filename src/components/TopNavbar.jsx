import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./TopNavbar.css";

const TopNavbar = function () {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          {" "}
          {/* NOT fluid */}
          <Navbar.Brand href="#">
            <i className="bi bi-linkedin text-primary fs-2"></i>
          </Navbar.Brand>
          <div className="linkedin-search">
            <i className="bi bi-search search-icon"></i>
            <Form.Control type="search" placeholder="Search" className="search-input" />
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>

            <Form className="d-flex">
              <Button variant="outline-success">Search</Button>
              <NavDropdown title="Tu" id="navbarScrollingDropdown">
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

export default TopNavbar;
