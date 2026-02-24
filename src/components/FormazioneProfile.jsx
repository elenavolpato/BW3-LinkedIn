import { Col, Card, Row, Container } from "react-bootstrap";

import "../assets/css/FormazioneProfile.css";

const FormazioneProfile = function () {
  return (
    <>
      <Container className="mb-5">
        <Card className="mb-4">
          <div className="p-3 d-flex justify-content-between">
            <h3 className="mb-0">Formazione</h3>
            <div>
              <i className="bi bi-plus-lg fs-4 me-3"></i>
              <i className="bi bi-pencil fs-4"></i>
            </div>
          </div>
          <Card.Body className="p-0">
            <Row className="borderFormazione mx-5">
              <Col xs={1}>
                <img
                  src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_200_200/company-logo_200_200/0/1646830188798/epicodeschool_logo?e=1773273600&v=beta&t=nYx5FE8hxV2P6Rm_xgnYRNdquelEoN6LDcD-FGAHfBI"
                  alt="Formazione Epicode"
                  className="imgFormazion"
                />
              </Col>
              <Col xs={11}>
                <div className="d-flex flex-column">
                  <h3>EPICODE Institute of Technology</h3>
                  <p className="mb-1">Master Full-Stack Developers, Informatica e sviluppo software</p>
                  <span className="text-secondary">nov 2025 - mag 2026</span>
                  <p className="mb-4">Attività e associazioni: HTML, CSS, JavaScript, React, TypeScript, Java</p>
                  <p>
                    Percorso intensivo di oltre 1000 ore focalizzato sullo sviluppo web end-to-end. Sto approfondendo tecnologie moderne per creare applicazioni
                    scalabili e performanti.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mx-5">
              <Col xs={1}>
                <img
                  src="https://media.licdn.com/dms/image/v2/C4D0BAQG12formuFdJg/company-logo_200_200/company-logo_200_200/0/1630469288270/technion_logo?e=1773273600&v=beta&t=bhMoWlQ0RLm-o_Grcqw7cw8bVc0q3OqtwbtMkIGy-a0"
                  alt="NGS-Group"
                  className="imgFormazion"
                />
              </Col>
              <Col xs={11} className="mt-3">
                <div className="d-flex flex-column">
                  <h3>Technion - Institute of Technology</h3>
                  <p className="mb-1">Master of Bussiness Administrator</p>
                  <p>
                    Approximately 36 years before Israel declared independence, a ceremony took place on the barren slopes of Mount Carmel near the Port of
                    Haifa, which was then occupied by the Ottoman Empire. Unknown to the Haifa community witnessing the event, this would be a milestone in
                    history.
                  </p>
                  <span className="text-secondary">1995-1997</span>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default FormazioneProfile;
