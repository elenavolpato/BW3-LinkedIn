import { useState } from "react";
import { Form, Row, Col, Button, Modal } from "react-bootstrap";
import { monthsNames } from "./Utils";

function AddExperience({ show, onClose, onSave }) {
  const [formData, setFormData] = useState({
    titolo: "",
    tipoImpiego: "",
    azienda: "",
    attuale: false,
    meseInizio: "",
    annoInizio: "",
    localita: "",
    tipoLocalita: "",
    descrizione: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    console.log("saved data", formData);
    onSave(formData);
  };
  return (
    <>
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Titolo</Form.Label>
              <Form.Control
                name="titolo"
                placeholder="Es. Responsabile vendite"
                value={FormData.titolo}
                onChange={handleChange}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tipo di impiego</Form.Label>
              <Form.Select
                name="tipoImpiego"
                value={formData.tipoImpiego}
                onChange={handleChange}
                required
              >
                <option value="">Seleziona</option>
                <option>Tempo pieno</option>
                <option>Part-time</option>
                <option>Freelance</option>
                <option>Stage</option>
                <option>Contratto</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Azienda o organizzazione*</Form.Label>
              <Form.Control
                name="azienda"
                placeholder="Es: Microsoft"
                value={formData.azienda}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Check
              className="mb-3"
              type="checkbox"
              label="Attualmente lavoro in questo ruolo"
              name="attuale"
              checked={formData.attuale}
              onChange={handleChange}
            />
            <Form.Label>Data di inizio</Form.Label>
            <Row className="mb-3">
              <Col>
                <Form.Select
                  name="meseInizio"
                  value={formData.meseInizio}
                  onChange={handleChange}
                  required
                >
                  <option value="">Mese*</option>
                  {monthsNames.map((month) => (
                    <option>{month}</option>
                  ))}
                </Form.Select>
              </Col>

              <Col>
                <Form.Control
                  name="annoInizio"
                  placeholder="Anno*"
                  value={formData.annoInizio}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Località</Form.Label>
              <Form.Control
                name="localita"
                placeholder="Es: Milano, Italia"
                value={formData.localita}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tipo di sede</Form.Label>
              <Form.Select
                name="tipoLocalita"
                value={formData.tipoLocalita}
                onChange={handleChange}
              >
                <option value="">Seleziona</option>
                <option>In presenza</option>
                <option>Ibrido</option>
                <option>Da remoto</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="descrizione"
                maxLength={2000}
                value={formData.descrizione}
                onChange={handleChange}
              />
              <div className="text-end small text-muted">
                {formData.descrizione.length}/2000
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={onClose}>
            Anulla
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddExperience;
