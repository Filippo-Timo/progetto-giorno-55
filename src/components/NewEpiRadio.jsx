import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

const NewEpiRadio = () => {
    return (
        <Container>
            <h2 className=" mb-4 text-light">Nuovi episodi radio <i class="bi bi-caret-right-fill"></i></h2>
            <Row>
                {/* Da "sm" in giù */}
                <Col xs={6} md={2}>
                    <div className="text-center">
                        <img src="https://placedog.net/250/250" alt="Prólogo con Abuelo" className="img-fluid rounded w-100" />
                        <p className="text-light">Prólogo con Abuelo</p>
                    </div>
                </Col>
                <Col xs={6} md={2}>
                    <div className="text-center">
                        <img src="https://placedog.net/250/250" alt="The Wanderer" className="img-fluid rounded w-100" />
                        <p className="text-light">The Wanderer</p>
                    </div>
                </Col>
                <Col xs={6} md={2}>
                    <div className="text-center">
                        <img src="https://placedog.net/250/250" alt="Michael Bublé, Carly Pearce & Zane Lowe" className="img-fluid rounded w-100" />
                        <p className="text-light">Michael Bublé, Carly Pearce & Zane Lowe</p>
                    </div>
                </Col>
                <Col xs={6} md={2}>
                    <div className="text-center">
                        <img src="https://placedog.net/250/250" alt="Stephan Moccio & Zane Lowe" className="img-fluid rounded w-100" />
                        <p className="text-light">Stephan Moccio & Zane Lowe</p>
                    </div>
                </Col>
                <Col xs={6} md={2}>
                    <div className="text-center">
                        <img src="https://placedog.net/250/250" alt="Chart Spotlight: Julia Michaels" className="img-fluid rounded w-100" />
                        <p className="text-light">Chart Spotlight: Julia Michaels</p>
                    </div>
                </Col>
                <Col xs={6} md={2}>
                    <div className="text-center">
                        <img src="https://placedog.net/250/250" alt="Chart Spotlight: Julia Michaels" className="img-fluid rounded w-100" />
                        <p className="text-light">Chart Spotlight: Julia Michaels</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default NewEpiRadio;