import { Col, Card, Row, Container } from "react-bootstrap"

import "../assets/css/FormazioneProfile.css"

const education = [
  {
    img: "https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_200_200/company-logo_200_200/0/1646830188798/epicodeschool_logo?e=1773273600&v=beta&t=nYx5FE8hxV2P6Rm_xgnYRNdquelEoN6LDcD-FGAHfBI",
    alt: "Formazione Epicode",
    institution: "EPICODE Institute of Technology",
    degree: "Master Full-Stack Developers, Informatica e sviluppo software",
    period: "nov 2025 - mag 2026",
    activities: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Java"],
    description:
      "Percorso intensivo di oltre 1000 ore focalizzato sullo sviluppo web end-to-end. Sto approfondendo tecnologie moderne per creare applicazioni scalabili e performanti.",
  },
  {
    img: "https://media.licdn.com/dms/image/v2/C4D0BAQG12formuFdJg/company-logo_200_200/company-logo_200_200/0/1630469288270/technion_logo?e=1773273600&v=beta&t=bhMoWlQ0RLm-o_Grcqw7cw8bVc0q3OqtwbtMkIGy-a0",
    alt: "NGS-Group",
    institution: "Technion - Institute of Technology",
    degree: "Master of Business Administration",
    period: "1995 - 1997",
    activities: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Java"],
    description: null,
  },
]

const FormazioneProfile = function () {
  return (
    <>
      <Card className="p-3 mb-3">
        <div className=" d-flex justify-content-between">
          <h4 className="fw-bold p-1 mb-0">Formazione</h4>
          <div>
            <i className="bi bi-plus-lg fs-4 me-3 "></i>
            <i className="bi bi-pencil fs-5 "></i>
          </div>
        </div>
        <Card.Body className="p-0">
          {education.map((educ, index) => (
            <div
              className={`d-flex gap-3 p-4 ${index !== education.length - 1 ? "border-bottom" : ""}`}
            >
              <img
                src={educ.img}
                alt={educ.alt}
                style={{ width: "50px" }}
                className="align-self-start rounded-1"
              />
              <div
                key={index}
                className=""
              >
                <p className="fw-bold no-margin">{educ.institution}</p>
                <p className="no-margin">{educ.degree} </p>
                <p className="text-black-50 no-margin">{educ.period}</p>
                {educ.area && (
                  <p className="text-black-50 no-margin">{educ.area}, Italy</p>
                )}

                <p className="fw-bold">
                  {educ.activities.map((act) => (
                    <span>{act}</span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </Card.Body>
      </Card>
    </>
  )
}

export default FormazioneProfile
