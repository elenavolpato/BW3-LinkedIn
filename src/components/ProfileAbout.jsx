import { Card } from "react-bootstrap"
import "../assets/css/ProfileAbout.css"

function ProfileAbout() {
  return (
    <Card className="p-3 mb-3 about-container">
      <h4 className="fw-bold p-">About</h4>
      <div className="p-2">
        <p className="m-0">Wot?? Of course: ME! because is my profail</p>

        <p className="mt-2">
          Ciao! Sono io! Quello del profilo. Ho esperienza e competenze molto
          varie, so:{" "}
        </p>
        <ul className="">
          <li>leggere</li>
          <li>scrivere</li>
          <li>parlare</li>
          <li>ascoltare</li>
          <li>camminare</li>
          <li>a volte anche correre</li>
        </ul>
        <p>
          Anche se ogni tanto, lo ammetto, mi dimentico di respirare, ma è solo
          perché sono così concentrato su quello che sto facendo. Es iu can si
          Ai'm veri gud in inglisc. Ai studiei in a scull very very inglish.
        </p>
      </div>
    </Card>
  )
}

export default ProfileAbout
