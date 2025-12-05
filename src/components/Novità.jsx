import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Novita = () => {
  return (
    <Container>
      <h1 className="text-light">Novità</h1>
      <hr className="text-light pe-5" />
      <Row>
        <Col xs={12} sm={6}>
          <h5 className="text-light">NUOVA STAZIONE RADIO</h5>
          <p className="text-light">Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill</p>
        </Col>
        <Col xs={12} sm={6}>
          <h5 className="text-light">NUOVA STAZIONE RADIO</h5>
          <p className="text-light">Ecco la nuova casa della musica latina</p>
        </Col>
      </Row>
      <Row>
        {/* Primo Card per la versione sm */}
        <Col xs={12} sm={6}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://placedog.net/100" />
          </Card>
        </Col>
        {/* Secondo Card per la versione sm */}
        <Col xs={12} sm={6}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://placedog.net/100" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Novita;