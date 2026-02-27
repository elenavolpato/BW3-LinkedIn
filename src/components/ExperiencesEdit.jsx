import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchExperiences,
  updateExperience,
  deleteExperience,
} from "../redux/actions/experienceActions";

import { Card, Button, Form, Toast, Row, Col } from "react-bootstrap";
import {
  monthsNames,
  getMonthNumber,
  monthAndYear,
  capitalizeFirstLetter,
} from "./Utils";

const ExperienceEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list, loading, error } = useSelector((state) => state.experiences);
  const userId = useSelector((state) => state.profile?.profile._id);
  const [selectedExp, setSelectedExp] = useState(null);
  const [formData, setFormData] = useState({});
  const [showToast, setShowToast] = useState(false);

  console.log("list", list);

  useEffect(() => {
    dispatch(fetchExperiences(userId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const buildDate = (month, year) => {
    if (!month || !year) return null;
    const monthNumber = String(getMonthNumber(month) + 1).padStart(2, "0");
    return `${year}-${monthNumber}-01`;
  };

  const handleEditOpen = (exp) => {
    setSelectedExp(exp);

    const startDate = new Date(exp.startDate);
    const endDate = exp.endDate ? new Date(exp.endDate) : null;

    setFormData({
      role: exp.role || "",
      company: exp.company || "",
      area: exp.area || "",
      description: exp.description || "",
      meseInizio: monthsNames[startDate.getUTCMonth()],
      annoInizio: String(startDate.getUTCFullYear()),
      meseFine: endDate ? monthsNames[endDate.getUTCMonth()] : "",
      annoFine: endDate ? String(endDate.getUTCFullYear()) : "",
    });
    dispatch(fetchExperiences(userId));
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    const payload = {
      role: formData.role,
      company: formData.company,
      area: formData.area,
      description: formData.description,
      startDate: buildDate(formData.meseInizio, formData.annoInizio),
      endDate: null,
    };

    console.log("payload", payload);
    dispatch(updateExperience(payload, userId, selectedExp._id));
    setSelectedExp(null);
  };

  const handleDelete = async (expId) => {
    await dispatch(deleteExperience(userId, expId));
    setSelectedExp(null);
    setShowToast(true);
    dispatch(fetchExperiences(userId)); // refresh the list
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Card className="container mt-3 pb-3" style={{ maxWidth: "700px" }}>
      {/* Toast notification */}
      <div
        style={{
          position: "fixed",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
        }}
      >
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
          bg="dark"
        >
          <Toast.Body className="text-white d-flex align-items-center gap-2">
            <i className="bi bi-check-circle-fill text-success"></i>
            Esperienza eliminata con successo
          </Toast.Body>
        </Toast>
      </div>

      <div className="d-flex align-items-center gap-3 mb-4">
        <Button
          variant="outline-secondary"
          className="border-0"
          onClick={() => navigate(-1)}
        >
          <i className="bi bi-arrow-left fs-5"></i>
        </Button>
        <h4 className="fw-bold mb-0">Modifica esperienze</h4>
      </div>

      {list.map((exp, index) => (
        <div key={exp._id}>
          <div className="d-flex align-items-start gap-3 py-3">
            <img
              src={exp.image}
              alt={`${exp.company} image`}
              style={{ width: "50px" }}
              className="rounded-1"
            />
            <div className="flex-grow-1">
              <p className="fw-bold mb-0">{capitalizeFirstLetter(exp.role)}</p>
              <p className="mb-0">{exp.company} · Tempo pieno</p>
              <p className="text-black-50 mb-0">
                {monthAndYear(exp.startDate)} - {monthAndYear(exp.updatedAt)}
              </p>
              {exp.area && (
                <p className="text-black-50 mb-0">{exp.area}, Italy</p>
              )}
              <p className="mb-0">{exp.description}</p>
            </div>
            <Button
              variant="outline-secondary"
              className="border-0"
              onClick={() => handleEditOpen(exp)}
            >
              <i className="bi bi-pencil fs-5"></i>
            </Button>
          </div>

          {selectedExp?._id === exp._id && (
            <Card className="p-3 mb-3 border-primary">
              <Form>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Ruolo</Form.Label>
                      <Form.Control
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Azienda</Form.Label>
                      <Form.Control
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Area</Form.Label>
                  <Form.Control
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Anno inizio</Form.Label>
                      <Form.Control
                        name="annoInizio"
                        value={formData.annoInizio}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Mese inizio</Form.Label>
                      <Form.Select
                        name="meseInizio"
                        value={formData.meseInizio}
                        onChange={handleChange}
                        required
                      >
                        <option value="">
                          {capitalizeFirstLetter(formData.meseInizio)}
                        </option>
                        {monthsNames.map((month) => (
                          <option key={month} value={month}>
                            {month}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Descrizione</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </Form.Group>
                <div className="d-flex justify-content-between">
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(exp._id)}
                  >
                    Elimina
                  </Button>
                  <div className="d-flex gap-2">
                    <Button
                      variant="secondary"
                      onClick={() => setSelectedExp(null)}
                    >
                      Annulla
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                      Salva
                    </Button>
                  </div>
                </div>
              </Form>
            </Card>
          )}
          {index !== list.length - 1 && <hr />}
        </div>
      ))}
    </Card>
  );
};

export default ExperienceEdit;
