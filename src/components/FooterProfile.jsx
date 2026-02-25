import "../assets/css/FooterProfile.css";
import { Dropdown, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Row className="footer-profilo">
        <Col className="ml-0">
          <a href="#">Informazioni</a>
        </Col>
        <Col className="ml-0">
          <a href="#">Accesibilità</a>
        </Col>
        <Col className="ml-0">
          <a href="#">Talent Solutions</a>
        </Col>
        <Col>
          <div className="d-flex gap-2">
            <i class="bi bi-question-circle-fill"></i>
            <div className="align-items-center gap-2">
              <h2 style={{ fontSize: "1rem", color: "#62615f", fontWeight: "bold" }}>Domande?</h2>
              <p style={{ fontSize: "0.8rem", color: "#62615f" }}>Visita il Nostro Centro assistenza</p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="d-flex flex-column gap-2">
            <a href="#">Seleziona lingua</a>
            <select className="linguage-dropdown">
              <option>Italiano</option>
              <option>Inglese</option>
              <option>Francese</option>
            </select>
          </div>
        </Col>
      </Row>
      <Row style={{ maxWidth: "1050px" }}>
        <Col className="ml-0">
          <a href="#">Carriera</a>
        </Col>
        <Col className="ml-0">
          <a href="#">Soluzioni di marketing</a>
        </Col>
        <Col className="ml-0">
          <a href="#">Sales Solutions</a>
        </Col>
        <Col>
          <div className="d-flex gap-2">
            <i class="bi bi-gear-fill"></i>
            <div className="align-items-center gap-2">
              <h2 style={{ fontSize: "1rem", color: "#62615f", fontWeight: "bold" }}>Gestisci il tuo account e la tua privacy</h2>
              <p style={{ fontSize: "0.8rem", color: "#62615f" }}>Vai alle impostazioni</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ maxWidth: "1050px" }}>
        <Col className="ml-0">
          <a href="#">Mobile</a>
        </Col>
        <Col className="ml-0">
          <a href="#">Piccole Imprese</a>
        </Col>
        <Col className="ml-0">
          <a href="#">Centro Assistenza</a>
        </Col>
        <Col>
          <div className="d-flex gap-2">
            <i class="bi bi-shield-shaded"></i>
            <div className="align-items-center gap-2">
              <h2 style={{ fontSize: "1rem", color: "#62615f", fontWeight: "bold" }}>Trasparenza sui contenuti consigliati</h2>
              <p style={{ fontSize: "0.8rem", color: "#62615f" }}>Scopri sui contenuti cosigliati.</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="ml-0">
          <Dropdown>
            <Dropdown.Toggle variant="" className="dropdown-class">
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
        <Dropdown.Toggle variant="" className="dropdown-class my-3">
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
