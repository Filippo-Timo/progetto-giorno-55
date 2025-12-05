import { Row, Col, Button } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

const Esplora = () => {
    return (
        <div className="container">
            <h2 className="text-light mb-4">Altro da esplorare</h2>
            <Row>
                <Col xs={12} md={4}>
                    <div className="mb-4">
                        <Button className="text-light d-flex justify-content-between w-100 border-0 rounded py-3" style={{ backgroundColor: "#2a2a2a" }}>
                            <span className="text-danger">Esplora per genere</span>
                            <i class="bi bi-caret-right-fill text-danger"></i>
                        </Button>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="mb-4">
                        <Button className="text-light d-flex justify-content-between w-100 border-0 rounded py-3" style={{ backgroundColor: "#2a2a2a" }}>
                            <span className="text-danger">Worldwide</span>
                            <i class="bi bi-caret-right-fill text-danger"></i>
                        </Button>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="mb-4">
                        <Button className="text-light d-flex justify-content-between w-100 border-0 rounded py-3" style={{ backgroundColor: "#2a2a2a" }}>
                            <span className="text-danger">Video musicali</span>
                            <i class="bi bi-caret-right-fill text-danger"></i>
                        </Button>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="mb-4">
                        <Button className="text-light d-flex justify-content-between w-100 border-0 rounded py-3" style={{ backgroundColor: "#2a2a2a" }}>
                            <span className="text-danger">Decenni</span>
                            <i class="bi bi-caret-right-fill text-danger"></i>
                        </Button>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="mb-4">
                        <Button className="text-light d-flex justify-content-between w-100 border-0 rounded py-3" style={{ backgroundColor: "#2a2a2a" }}>
                            <span className="text-danger">Classifiche</span>
                            <i class="bi bi-caret-right-fill text-danger"></i>
                        </Button>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="mb-4">
                        <Button className="text-light d-flex justify-content-between w-100 border-0 rounded py-3" style={{ backgroundColor: "#2a2a2a" }}>
                            <span className="text-danger">Nuovi artisti</span>
                            <i class="bi bi-caret-right-fill text-danger"></i>
                        </Button>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="mb-4">
                        <Button className="text-light d-flex justify-content-between w-100 border-0 rounded py-3" style={{ backgroundColor: "#2a2a2a" }}>
                            <span className="text-danger">Attività e stati d'animo</span>
                            <i class="bi bi-caret-right-fill text-danger"></i>
                        </Button>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="mb-4">
                        <Button className="text-light d-flex justify-content-between w-100 border-0 rounded py-3" style={{ backgroundColor: "#2a2a2a" }}>
                            <span className="text-danger">Audio spaziale</span>
                            <i class="bi bi-caret-right-fill text-danger"></i>
                        </Button>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="mb-4">
                        <Button className="text-light d-flex justify-content-between w-100 border-0 rounded py-3" style={{ backgroundColor: "#2a2a2a" }}>
                            <span className="text-danger">Hit del passato</span>
                            <i class="bi bi-caret-right-fill text-danger"></i>
                        </Button>
                    </div>
                </Col>


            </Row>
        </div>
    );
};

export default Esplora;