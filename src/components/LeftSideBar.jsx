import { Card, ListGroup } from "react-bootstrap";

const LeftSidebar = () => {
  const user = {
    nome: "Diego Armando",
    ruolo: "Football player",
    luogo: "Paestum",
    fotoProfilo: "https://placebear.com/200/300",
    fotoCopertina: "https://placecats.com/300/200",
  };

  return (
    // CARD 1
    <div style={{ width: "225px" }}>
      <Card className="mb-2 shadow-sm overflow-hidden">
        {/* IMG COPERTINA */}
        <Card.Img variant="top" src={user.fotoCopertina} style={{ height: "60px", objectFit: "cover" }} />

        <Card.Body className="text-center position-relative pt-0">
          {/* IMG PROFILO */}
          <div className="position-absolute ms-3" style={{ top: "-35px", left: "0" }}>
            <img
              src={user.fotoProfilo}
              alt="Profilo"
              className="rounded-circle border border-white border-3"
              style={{ width: "72px", height: "72px", objectFit: "cover" }}
            />
          </div>

          <div className="mt-5 d-flex flex-column align-items-start">
            <h6 className="fw-bold mb-0">{user.nome}</h6>
            <p className="small my-1">{user.ruolo}</p>
            <p className="text-muted small">{user.luogo}</p>
          </div>
        </Card.Body>
      </Card>

      {/* CARD 2 */}
      <Card className="mb-2 shadow-sm">
        <Card.Body className="p-0">
          <div className="pt-2 px-3 d-flex justify-content-between align-items-start">
            <span className="small text-light fw-bold">Visitatori del profilo</span>
            <span className="text-primary fw-bold small">4</span>
          </div>
          <div className="pb-2 pt-2 px-3">
            <span className="small fw-bold">Vedi tutte le analisi</span>
          </div>
        </Card.Body>
      </Card>

      {/* CARD 3 */}
      <Card className="shadow-sm">
        <ListGroup variant="flush">
          <ListGroup.Item action className="small fw-bold py-2 border-0 text-light">
            <i className="bi bi-bookmark-fill me-2"></i> Elementi salvati
          </ListGroup.Item>
          <ListGroup.Item action className="small fw-bold py-2 border-0 text-light">
            <i className="bi bi-people-fill me-2"></i> Gruppi
          </ListGroup.Item>
          <ListGroup.Item action className="small fw-bold py-2 border-0 text-light">
            <i className="bi bi-newspaper me-2"></i> Newsletter
          </ListGroup.Item>
          <ListGroup.Item action className="small fw-bold py-2 border-0 text-light">
            <i className="bi bi-calendar-event me-2"></i> Eventi
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default LeftSidebar;
