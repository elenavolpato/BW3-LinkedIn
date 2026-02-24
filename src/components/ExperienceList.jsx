import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchExperiences } from "../redux/actions/experienceActions"

const ExperienceList = (/* { userId } */) => {
  const [userId /* , setUserId */] = useState("653f5b02b397340014d5e7fa")
  /*  const getUsers = () => {
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
        setUserId(data[0]._id)
        console.log(userId)
      })
      .catch((err) => {
        console.error(err)
      })
  } */

  const dispatch = useDispatch()
  const { list, loading, error } = useSelector((state) => state.experiences)

  /*   useEffect(() => {
    getUsers()
  }, []) */

  useEffect(() => {
    if (userId) {
      dispatch(fetchExperiences(userId))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <ul>
        {list.length > 0 &&
          list.map((exp) => <li key={exp.id}>{exp.title}</li>)}
      </ul>
    </div>
  )
}

export default ExperienceList
