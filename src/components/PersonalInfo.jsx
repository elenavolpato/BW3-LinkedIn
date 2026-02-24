import { Container, Row, Col, Button, Card, CardImg } from "react-bootstrap";
import "../assets/css/PersonalInfo.css";

const PersonalInfo = () => {
  return (
    <>
      <Container>
        <Card>
          <Col className="position-relative">
            <CardImg
              src="https://placedog.net/1200/300"
              alt="background image"
              className="position-relative profile-bg-img "
              style={{
                backgroundImage: "url(https://placedog.net/1200/300)",
              }}
            ></CardImg>
            <img
              src="https://placedog.net/180/180"
              alt="profile img"
              className="border border-5 border-white rounded-circle profile-img ms-3 z-1 position-relative"
            />

            <Row className="p-3 g-2">
              <Col md={6}>
                <div className="d-flex align-items-center gap-2 mb-0 pb-0">
                  <h1 className="mb-0 pb-0">Name name</h1>
                  <i className="bi bi-shield-check"></i>
                  <h6 className="text-black-50 pt-2"> She/Her</h6>
                </div>
                <p className="no-margin">Job Title</p>
                <p className="text-black-50 ">
                  Cidade, Mundo, Universo ·&nbsp;
                  <span className="text-primary fw-bold">Contact info</span>
                </p>
                <p className="text-primary fw-bold">100.000.000 followers · 500+ connections</p>

                <div className="position-relative work-status-box rounded p-3">
                  <i className="bi bi-pencil position-absolute fw-bold top-0 end-0 pt-3 pe-4"></i>
                  <p className="fw-bold no-margin">Open to work</p>
                  <p>Javascript developer roles</p>
                  <Button className="border-0 m-0 p-0" variant="outline-primary">
                    Show details
                  </Button>
                </div>
              </Col>
              <Col md={6}>
                <div className="d-flex gap-3 ">
                  <div className="icon-company">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="company-accent-4"
                      aria-hidden="true"
                      viewBox="0 0 128 128"
                      data-token-id="358"
                      className="_34d7bc0d f306d0a7 cb3e98fc _2f025f10 _05d79b4e"
                      role="img"
                      fetchPriority="low"
                      aria-label=""
                      preserveAspectRatio="xMidYMid slice"
                    >
                      <g display="var(--svgDisplayLight)">
                        <path fill="#e7e2dc" d="M0 0h128v128H0z"></path>
                        <path fill="#9db3c8" d="M48 16h64v112H48z"></path>
                        <path fill="#788fa5" d="M16 80h32v48H16z"></path>
                        <path fill="#56687a" d="M48 80h32v48H48z"></path>
                      </g>
                      <g display="var(--svgDisplayDark)">
                        <path fill="#38434f" d="M0 0h128v128H0z"></path>
                        <path fill="#9db3c8" d="M48 16h64v112H48z"></path>
                        <path fill="#788fa5" d="M16 80h32v48H16z"></path>
                        <path fill="#56687a" d="M48 80h32v48H48z"></path>
                      </g>
                    </svg>
                  </div>
                  <p>Amazing worker | Wherever</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Card>
      </Container>
    </>
  );
};

export default PersonalInfo;
