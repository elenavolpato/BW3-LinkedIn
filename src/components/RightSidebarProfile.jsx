import { Container } from "react-bootstrap"
import "../assets/css/RightSidebarProfile.css"

const RightSideBarProfile = () => {
  return (
    <>
      <Container
        className="container-right-sidebar-profile d-flex flex-column bg-white p-3 "
        xs={1}
      >
        <div className="lingua-profilo">
          <h2>Lingua del profilo</h2>
          <span>Italiano</span>
        </div>
        <div className="lingua-profilo">
          <h2>Profilo Pubblico e URL</h2>
          <span>www.linkedin.com/in/magnificorettore-99999aura</span>
        </div>
      </Container>
    </>
  )
}

export default RightSideBarProfile
