import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import JobsNavbar from "./JobsNavbar";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("search") || "";

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("search") || "";
    fetchJobs(query);
  }, [location.search]);

  const fetchJobs = async (query = "") => {
    setLoading(true);
    setError(null);

    try {
      let url = "https://strive-benchmark.herokuapp.com/api/jobs";
      if (query.trim()) {
        url += `?search=${encodeURIComponent(query.trim())}`;
      }

      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Errore ${res.status}: ${res.statusText}`);
      }

      const responseData = await res.json();

      const jobsArray = responseData.data || responseData || [];
      setJobs(jobsArray);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message || "Impossibile caricare gli annunci di lavoro");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <JobsNavbar />

      <Container fluid className="pt-5 mt-4">
        {" "}
        <Row className="justify-content-center">
          <Col lg={10} xl={9}>
            {loading && (
              <div className="text-center my-5 py-5">
                <Spinner animation="border" variant="primary" />
                <p className="mt-3 text-muted">Caricamento offerte di lavoro...</p>
              </div>
            )}

            {error && (
              <Alert variant="danger" className="text-center">
                {error}
              </Alert>
            )}

            {!loading && !error && jobs.length === 0 && (
              <Alert variant="info" className="text-center py-4">
                {searchQuery ? `Nessun annuncio trovato per "${searchQuery}"` : "Al momento non ci sono offerte di lavoro disponibili."}
              </Alert>
            )}

            {!loading && !error && jobs.length > 0 && (
              <>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="mb-0 fw-semibold">{searchQuery ? `Risultati per "${searchQuery}"` : "Offerte di lavoro"}</h4>
                  <small className="text-muted">{jobs.length} annunci trovati</small>
                </div>

                {jobs.map((job) => (
                  <div
                    key={job._id}
                    className="bg-white rounded-3 shadow-sm mb-3 p-3 border border-light-subtle job-item"
                    style={{ transition: "all 0.2s ease" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.12)";
                      e.currentTarget.style.borderColor = "#0a66c2";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.borderColor = "#dee2e6";
                    }}
                  >
                    <div className="d-flex flex-column flex-md-row gap-3">
                      <div className="flex-shrink-0 text-center text-md-start">
                        <img
                          src={
                            job.company_logo_url ||
                            `https://ui-avatars.com/api/?name=${encodeURIComponent(job.company_name || "Company")}&background=random&size=80`
                          }
                          alt={`${job.company_name || "Company"} logo`}
                          width={80}
                          height={80}
                          className="rounded"
                          style={{ objectFit: "contain", background: "#f3f2ef" }}
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/80?text=Logo";
                          }}
                        />
                      </div>

                      <div className="flex-grow-1">
                        <h5 className="mb-1 fw-bold text-dark">{job.title}</h5>
                        <div className="text-primary fw-medium mb-1">{job.company_name}</div>

                        <div className="text-muted small mb-3 d-flex flex-wrap gap-3">
                          <span>
                            <i className="bi bi-geo-alt-fill me-1"></i>
                            {job.candidate_required_location || "Anywhere / Remote"}
                          </span>
                          <span>
                            <i className="bi bi-clock me-1"></i>
                            {job.job_type || "Non specificato"}
                          </span>
                          {job.salary && (
                            <span>
                              <i className="bi bi-currency-euro me-1"></i>
                              {job.salary}
                            </span>
                          )}
                        </div>

                        <div
                          className="text-secondary small mb-3 line-clamp-3"
                          style={{ maxHeight: "4.8em", overflow: "hidden" }}
                          dangerouslySetInnerHTML={{
                            __html:
                              (job.description || "")
                                .replace(/<[^>]+>/g, " ")
                                .replace(/\s+/g, " ")
                                .trim()
                                .substring(0, 240) + (job.description?.length > 240 ? "..." : ""),
                          }}
                        />

                        <div className="d-flex flex-wrap gap-3 align-items-center">
                          {job.category && <span className="badge bg-light text-dark border border-secondary-subtle px-3 py-1">{job.category}</span>}
                          <small className="text-muted">
                            Pubblicato il{" "}
                            {new Date(job.publication_date).toLocaleDateString("it-IT", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </small>
                        </div>
                      </div>

                      <div className="d-flex flex-column justify-content-between align-items-end gap-3 ms-auto mt-3 mt-md-0">
                        <a href={job.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary rounded-pill px-4 fw-medium">
                          Visualizza offerta
                        </a>
                        <button className="btn btn-sm btn-link text-muted p-0" title="Salva nei preferiti">
                          <i className="bi bi-heart fs-5"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Jobs;
