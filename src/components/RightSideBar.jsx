import { Container, Button } from "react-bootstrap"
import "../assets/css/RightSideBar.css"
import Footer from "./Footer"
import NewsSidebarDx from "./NewsSidebarDx"

const RightSideBar = () => {
  return (
    <Container className="d-flex d-none d-md-block flex-column align-items-center no-margin">
      <div className="linkedIn-Notizie bg-white ">
        <div className="title">
          <h5 className="fw-bolder no-margin">LinkedIn Notizie</h5>
          <i className="info bi bi-info-square-fill"></i>
        </div>
        <div className="news">
          <p style={{ color: "#62615f", fontSize: "1rem", fontWeight: "600" }}>
            Storie principali
          </p>
          <NewsSidebarDx
            title={"Usa: dazi al 15% per tutti"}
            text={"2h fa • 336 lettori"}
          />
          <NewsSidebarDx
            title={"Lavorare è una necessità, ma tutti vogliono andare al mare"}
            text={"3h fa • 158.695 lettori"}
          />
          <NewsSidebarDx
            title={"Notizia molto interessante"}
            text={"6h fa • 158 lettori"}
          />
        </div>
        <Button
          variant="outline-secondary"
          className="my-3"
        >
          Visualizza altro <i className="bi bi-chevron-down"></i>
        </Button>
        <p style={{ color: "#62615f", fontSize: "1rem", fontWeight: "600" }}>
          I rompicapi di oggi
        </p>
        <div className=" rompicapo d-flex">
          <img
            className="rompicapo-img"
            fetchPriority="low"
            alt=""
            src="https://media.licdn.com/media/AAYIBATzAAwAAQAAAAAAAM5DCu1ciPE1T06Vu5hhAwP0xw.png"
            data-loaded="true"
          ></img>
          <div className="d-flex flex-column justify-content-center ms-3">
            <p
              style={{ fontSize: "1rem", fontWeight: "600" }}
              className="mb-0"
            >
              Zip - un rompicapo veloce
            </p>
            <span style={{ color: "#62615f", fontSize: "1rem" }}>
              Risolvilo in 60 secondi o meno!
            </span>
          </div>
        </div>
      </div>
      <div
        className="position-sticky mt-auto"
        style={{ top: "80px" }}
      >
        <Footer />
      </div>
    </Container>
  )
}

export default RightSideBar
