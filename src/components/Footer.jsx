import "../assets/css/Footer.css";
import { Container, Dropdown } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <a href="#">Informazioni</a>
        <a href="#">Accesibilità</a>
        <a href="#">Centro Assistenza</a>
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
        <a href="#">Opzioni per gli annunci pubblicitari</a>
        <a href="#">Pubblicità</a>
        <Dropdown>
          <Dropdown.Toggle variant="" className="dropdown-toggle">
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
        <div className="d-flex gap-4 justify-content-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/LinkedIn_Logo_2013_(2).svg/1920px-LinkedIn_Logo_2013_(2).svg.png"
            width="56"
            height="14"
            alt="LinkedIn logo"
            className="mt-2"
          />
          <p>LinkedIn Corporation © 2026</p>
        </div>
      </div>
    </>
    // <div className="footer">
    //   <p>© 2024 LinkedIn Corporation. All rights reserved.</p>
    //   <p>LinkedIn Corporation is a wholly owned subsidiary of Microsoft Corporation.</p>
    // </div>
  );
};
export default Footer;
