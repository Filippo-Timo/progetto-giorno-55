import { Container, Row, Col } from 'react-bootstrap';

const MyFooter = () => {
    return (
        <footer className="text-white py-4" style={{ backgroundColor: "#323232" }}>
            <Container>
                <Row className="d-flex justify-content-between align-items-center">
                    <Col className="mb-4 ms-3">
                        <p className="mb-0 text-secondary"><span className="fw-bold text-light">Italia</span> | English (UK)</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="mb-4 ms-3">
                        <p className="mb-2 text-secondary">Copyright © 2024 <span className="fw-bold text-light">Apple Inc.</span> Tutti i diritti riservati.</p>
                        <div className="d-flex flex-wrap">
                            <a href="#" className="text-white text-decoration-none me-2">Condizioni dei servizi internet |</a>
                            <a href="#" className="text-white text-decoration-none me-2"> Apple Music e privacy |</a>
                            <a href="#" className="text-white text-decoration-none me-2"> Avviso sui cookie |</a>
                            <a href="#" className="text-white text-decoration-none me-2"> Supporto |</a>
                            <a href="#" className="text-white text-decoration-none me-2"> Feedback |</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default MyFooter;