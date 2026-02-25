import { Card, CardBody } from "react-bootstrap"
import { useSelector } from "react-redux"

const Activities = () => {
  const username = useSelector((state) => state.profile?.profile.name)

  return (
    <Card className="p-3 mb-3">
      <h4 className="fw-bold p-1 mb-0">Activity</h4>
      <CardBody className="ps-2b border-bottom">
        <p className="text-black-50 no-margin">683 followers</p>
        <h5 className="fw-bold  mb-0 no-margin">
          {username} non ha post recenti{" "}
        </h5>
        <p className="no-margin">
          I post recenti condivisi da {username} verranno visualizzati qui.
        </p>
      </CardBody>
      <div className="text-black-50 text-center pt-3 fw-bolder">
        Mostra altro <i className="bi bi-arrow-right"></i>
      </div>
    </Card>
  )
}

export default Activities
