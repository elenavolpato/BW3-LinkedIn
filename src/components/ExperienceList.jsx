import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addExperience,
  fetchExperiences,
} from "../redux/actions/experienceActions";
import { Card, Button } from "react-bootstrap";
import { monthAndYear, capitalizeFirstLetter } from "./Utils";
import AddExperience from "./AddExperience";

const ExperienceList = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.experiences);
  const userId = useSelector((state) => state.profile?.profile._id);
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleSave = (formData) => {
    dispatch(addExperience(formData, userId));
    setShowModal(false);
  };

  useEffect(() => {
    dispatch(fetchExperiences(userId));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Card className="p-3 position-relative mb-3">
      <h4 className="fw-bold p-1">Esperienza</h4>
      <div className="position-absolute fw-bold top-0 end-0 pt-3 pe-4">
        <Button variant="outline-secondary" className="border-0 pe-0">
          <i
            className="bi bi-plus-lg fs-4 me-3"
            onClick={() => handleOpen()}
          ></i>
        </Button>
        <Button variant="outline-secondary" className="border-0 ">
          <i className="bi bi-pencil fs-5"></i>
        </Button>
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
          <div key={exp._id} className="">
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
              <i className="bi bi-gem"></i> &nbsp; Lavoratore incredibile,
              Irresposabilità, Disorganizzazione{" "}
            </p>
          </div>
        </div>
      ))}
      <AddExperience
        show={showModal}
        onClose={handleClose}
        onSave={handleSave}
      />
    </Card>
  );
};

export default ExperienceList;
