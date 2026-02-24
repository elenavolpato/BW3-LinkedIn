import { Container } from "react-bootstrap"
import ExperienceList from "../components/ExperienceList"
import PersonalInfo from "../components/PersonalInfo"

const Profile = () => {
  return (
    <Container>
      <PersonalInfo />
      <ExperienceList />
    </Container>
  )
}
export default Profile
