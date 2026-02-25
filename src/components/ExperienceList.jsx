import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchExperiences } from "../redux/actions/experienceActions"
import { Card, Col, Row } from "react-bootstrap"
import { monthAndYear, capitalizeFirstLetter } from "./Utils"

const ExperienceList = (/* { userId } */) => {
  const [userId, setUserId] = useState("653f5b02b397340014d5e7fa")

  const getUsers = () => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_PROFILE_TOKEN}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Error fetching profiles")
        }
      })
      .then((data) => {
        setUserId(data[26]._id)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const dispatch = useDispatch()
  const { list, loading, error } = useSelector((state) => state.experiences)

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    if (userId) {
      dispatch(fetchExperiences(userId))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <Card className="p-3 position-relative mb-3">
      <h4 className="fw-bold p-1">Esperienza</h4>
      <div className="position-absolute fw-bold top-0 end-0 pt-3 pe-4">
        <i class="bi bi-plus-lg fs-4 me-3"></i>
        <i className="bi bi-pencil fs-5"></i>
      </div>

      {list.map((exp, index) => (
        <div
          className={`d-flex gap-3 p-4 ${index !== list.length - 1 ? "border-bottom" : ""}`}
        >
          <img
            src={exp.image}
            alt={`${exp.company} image`}
            style={{ width: "50px" }}
            className="align-self-start rounded-1"
          />
          <div
            key={exp._id}
            className=""
          >
            <p className="fw-bold no-margin">
              {capitalizeFirstLetter(exp.role)}
            </p>
            <p className="no-margin">{exp.company} · Tempo pieno </p>
            <p className="text-black-50 no-margin">
              {monthAndYear(exp.startDate)} - {monthAndYear(exp.updatedAt)}
            </p>
            {exp.area && (
              <p className="text-black-50 no-margin">{exp.area}, Italy</p>
            )}
            <p className="">{exp.description}</p>
            <p className="fw-bold">
              <i class="bi bi-gem"></i> &nbsp; Lavoratore incredibile,
              Irresposabilità, Disorganizzazione{" "}
            </p>
          </div>
        </div>
      ))}
    </Card>
  )
}

export default ExperienceList
