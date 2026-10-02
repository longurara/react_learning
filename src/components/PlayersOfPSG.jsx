import { Card, Col, Container, Row } from 'react-bootstrap';

export default function PlayersOfPSG({ playerDataPSG}) {
    return (
        <Container id="psg" className="mb-5">
            <h2 className="mb-4">PSG players</h2>
            <Row xs={1} md={2} className="g-4">
            {playerDataPSG.map((player) => (
                    <Col key={player.id}>
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src={player.img} alt={player.name} className="player-image" />
                            <Card.Body className="text-center">
                                <Card.Title>{player.name}</Card.Title>
                                <Card.Text className="text-muted">{player.club}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        );
    }
