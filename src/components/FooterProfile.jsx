import "../assets/css/FooterProfile.css";
import { Dropdown, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Row className="footer-profilo gap-3">
        <Col className="ml-0">
          <a href="#">Informazioni</a>
        </Col>
        <Col className="ml-0">
          <a href="#">Accesibilità</a>
        </Col>
        <Col className="ml-0">
          <a href="#">Talent Solutions</a>
        </Col>
      </Row>
      <Row>
        <Col className="ml-0">
          <a href="#">Carriera</a>
        </Col>
        <Col className="ml-0">
          <a href="#">Soluzioni di marketing</a>
        </Col>
        <Col className="ml-0">
          <a href="#">Sales Solutions</a>
        </Col>
      </Row>
      <Row>
        <Col className="ml-0">
          <a href="#">Mobile</a>
        </Col>
        <Col className="ml-0">
          <a href="#">Piccole Imprese</a>
        </Col>
        <Col className="ml-0">
          <a href="#">Centro Assistenza</a>
        </Col>
      </Row>
      <Row>
        <Col className="ml-0">
          <Dropdown>
            <Dropdown.Toggle variant="" className="dropdown-toggle">
              Privacy e condizioni
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Informativa sulla privacy</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Contratto di licenza</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Termini e condizioni delle pagine</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Informativa sui cookie</Dropdown.Item>
              <Dropdown.Item href="#/action-5">Informativa sui copyright</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col className="ml-0">
          <a href="#">Opzioni per gli annunci pubblicitari</a>
        </Col>
        <Col className="ml-0">
          <a href="#">Pubblicità</a>
        </Col>
      </Row>

      <Dropdown>
        <Dropdown.Toggle variant="" className="dropdown-toggle ">
          Servizi alle aziende
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Assumi su LinkedIn</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Vendi con LinkedIn</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Inizia con Premium</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Admin Center</Dropdown.Item>
          <Dropdown.Item href="#/action-5">Informativa sui copyright</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <a href="#">LinkedIn Corporation © 2026</a>
    </>
  );
};
export default Footer;
