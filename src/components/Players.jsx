import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router'
import PlayerImage from './PlayerImage.jsx'

export default function Players({ playDataFromContainer }) {
    return (
        <Container id="players" className="mb-5">
            <h2 className="mb-4">All players</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
            {playDataFromContainer.map((p) => (
                    <Col key={p.id}>
                        <Card className="h-100 shadow-sm">
                            <PlayerImage src={`/${p.img}`} alt={p.name} className="player-image" />
                            <Card.Body className="text-center d-flex flex-column">
                                <Card.Title>{p.name}</Card.Title>
                                <Card.Text className="text-muted">{p.club}</Card.Text>
                                <Link className="btn btn-dark mt-auto" to={`/detail/${p.id}`}>Detail</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Container>
        );
    }
