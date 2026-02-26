import { useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperiences } from "../redux/actions/experienceActions";

const LeftSidebar = () => {
  const profileData = useSelector((state) => state.profile?.profile);
  const recentExperience = useSelector((state) => state.experiences.list[1]);
  const dispatch = useDispatch();
  const user = {
    nome: `${profileData.name}  ${profileData.surname}`,
    ruolo: profileData.title,
    luogo: profileData.area,
    fotoProfilo: profileData?.image,
    fotoCopertina: "https://placecats.com/300/200",
  };

  useEffect(() => {
    dispatch(fetchExperiences());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // CARD 1
    <div>
      <Card className="mb-2 shadow-sm overflow-hidden">
        {/* IMG COPERTINA */}
        <Card.Img variant="top" src={user.fotoCopertina} style={{ height: "60px", objectFit: "cover" }} />

        <Card.Body className="text-center position-relative pt-0">
          {/* IMG PROFILO */}
          <div className="position-absolute ms-3" style={{ top: "-35px", left: "0" }}>
            <img
              src={profileData?.image}
              alt="Profilo"
              className="rounded-circle border border-white border-3"
              style={{ width: "85px", height: "85px", objectFit: "cover" }}
            />
          </div>

          <div className="mt-5 d-flex flex-column align-items-start pt-2">
            <h6 className="fw-bold mb-0">{user.nome}</h6>
            <p className="small my-1">{user.ruolo}</p>
            <p className="text-muted small">{user.luogo}</p>
          </div>
          {recentExperience && (
            <div className="d-flex align-items-start gap-2 no-margin">
              <img src={recentExperience.image} alt={`${recentExperience.company} image`} className="company-image rounded-1" />
              <p className="fw-bolder">{recentExperience.role} </p>
            </div>
          )}
        </Card.Body>
      </Card>

      {/* CARD 2 */}
      <Card className="mb-2 shadow-sm">
        <Card.Body className="p-0">
          <div className="pt-2 px-3 d-flex justify-content-between align-items-start">
            <span className="small  fw-bold">Visitatori del profilo</span>
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
          <ListGroup.Item action className="small fw-bold py-2 border-0 ">
            <i className="bi bi-bookmark-fill me-2"></i> Elementi salvati
          </ListGroup.Item>
          <ListGroup.Item action className="small fw-bold py-2 border-0 ">
            <i className="bi bi-people-fill me-2"></i> Gruppi
          </ListGroup.Item>
          <ListGroup.Item action className="small fw-bold py-2 border-0 ">
            <i className="bi bi-newspaper me-2"></i> Newsletter
          </ListGroup.Item>
          <ListGroup.Item action className="small fw-bold py-2 border-0 ">
            <i className="bi bi-calendar-event me-2"></i> Eventi
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default LeftSidebar;
