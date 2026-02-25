import { Container } from "react-bootstrap"
import "../assets/css/RightSidebarProfile.css"
import { Card, Button, Image } from "react-bootstrap"
import { PersonPlusFill, ShieldFillCheck } from "react-bootstrap-icons"

const users = [
  {
    id: 1,
    name: "Roberto Mele",
    role: "Computer, Biomedical and Telecommunications engineer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Emanuele Imparato",
    role: "Studente presso Università degli Studi di Napoli...",
    img: null,
    initial: "E",
    verified: true,
  },
  {
    id: 3,
    name: "Marco Grande",
    role: "Studente presso Università degli Studi di Napoli...",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 4,
    name: "Vincenzo D'Alò",
    role: "Software Engineer presso Minsait an Indra Company",
    img: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    id: 5,
    name: "Luca D'Anna",
    role: "Studente presso Università degli Studi di Napoli...",
    img: null,
    verified: true,
  },
]

const RightSideBarProfile = () => {
  return (
    <>
      <Container
        className="container-right-sidebar-profile d-flex flex-column bg-white p-3 "
        xs={1}
      >
        <div className="lingua-profilo">
          <div className="d-flex align-items-center justify-content-between gap-2 ">
            <h2>Lingua del profilo</h2>
            <i className="bi bi-pencil"></i>
          </div>
          <span>Italiano</span>
        </div>
        <div className="divider  mt-3 pb-3"></div>
        <div className="lingua-profilo">
          <div className="d-flex align-items-center justify-content-between gap-2 ">
            <h2>Profilo Pubblico e URL</h2>
            <i className="bi bi-pencil"></i>
          </div>
          <span>www.linkedin.com/in/aeibrag</span>
        </div>
      </Container>
      <Card className="linkedin-sidebar mt-3">
        <Card.Body>
          <h6 className="sidebar-title">Persone che potresti conoscere</h6>
          <p className="sidebar-subtitle">Dalla tua scuola o università</p>

          {users.map((user) => (
            <div
              key={user.id}
              className="user-item"
            >
              <div className="user-info">
                {user.img ? (
                  <Image
                    src={user.img}
                    roundedCircle
                    className="user-avatar"
                  />
                ) : (
                  <div className="avatar-placeholder">
                    {user.initial || "U"}
                  </div>
                )}

                <div className="user-text">
                  <div className="user-name">
                    {user.name}
                    {user.verified && (
                      <ShieldFillCheck className="verified-icon" />
                    )}
                  </div>
                  <div className="user-role">{user.role}</div>

                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="connect-btn"
                  >
                    <PersonPlusFill className="me-1" />
                    Collegati
                  </Button>
                </div>
              </div>
            </div>
          ))}

          <div className="show-more">Mostra tutto</div>
        </Card.Body>
      </Card>
    </>
  )
}

export default RightSideBarProfile
