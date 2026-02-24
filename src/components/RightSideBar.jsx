import { Container, Button } from "react-bootstrap";
import "../assets/css/RightSideBar.css";
import Footer from "./Footer";
import NewsSidebarDx from "./NewsSidebarDx";

const RightSideBar = () => {
  return (
    <Container className=" d-flex d-none d-md-block flex-column align-items-center">
      <div className="linkedIn-Notizie bg-white ">
        <div className="title">
          <h2>LinkedIn Notizie</h2>
          <i className="info bi bi-info-square-fill"></i>
        </div>
        <div className="news">
          <p style={{ color: "#62615f", fontSize: "1rem", fontWeight: "600" }}>Storie principali</p>
          <NewsSidebarDx />
          <NewsSidebarDx />
          <NewsSidebarDx />
        </div>
        <Button variant="outline-secondary" className="my-3">
          Visualizza altro <i className="bi bi-chevron-down"></i>
        </Button>
        <p style={{ color: "#62615f", fontSize: "1rem", fontWeight: "600" }}>I rompicapi di oggi</p>
        <div className=" rompicapo d-flex">
          <img
            className="rompicapo-img"
            fetchpriority="low"
            alt=""
            src="https://media.licdn.com/media/AAYIBATzAAwAAQAAAAAAAM5DCu1ciPE1T06Vu5hhAwP0xw.png"
            data-loaded="true"
          ></img>
          <div className="d-flex flex-column justify-content-center ms-3">
            <p style={{ fontSize: "1rem", fontWeight: "600" }} className="mb-0">
              Zip - un rompicapo veloce
            </p>
            <span style={{ color: "#62615f", fontSize: "1rem" }}>Risolvilo in 60 secondi o meno!</span>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default RightSideBar;
