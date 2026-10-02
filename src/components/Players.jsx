import { useState } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'

export default function Players({ playDataFromContainer }) {
    const [player, setPlayer] = useState(null)

    return (
        <Container id="players" className="mb-5">
            <h2 className="mb-4">All players</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
            {playDataFromContainer.map((p) => (
                    <Col key={p.id}>
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src={p.img} alt={p.name} className="player-image" />
                            <Card.Body className="text-center d-flex flex-column">
                                <Card.Title>{p.name}</Card.Title>
                                <Card.Text className="text-muted">{p.club}</Card.Text>
                                <Button className="mt-auto" variant="dark" onClick={() => setPlayer(p)}>Detail</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {player && (
                <Modal show onHide={() => setPlayer(null)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{player.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={player.img} alt={player.name} className="img-fluid rounded mb-3" />
                        <p className="text-muted">{player.club}</p>
                        <p className="mb-0">{player.info}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setPlayer(null)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            )}
        </Container>
        );
    }
