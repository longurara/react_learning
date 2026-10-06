import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

export default function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault()
        event.currentTarget.reset()
    }

    return (
        <Container className="py-4">
            <Row className="justify-content-center">
                <Col lg={8}>
                    <Card className="shadow-sm">
                        <Card.Body className="p-4">
                            <h1 className="mb-3">Contact us</h1>
                            <p className="text-muted">Have a question about the players? Send us a message.</p>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="contactName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Your name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="contactEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="contactMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={4} placeholder="Write your message" />
                                </Form.Group>
                                <Button variant="dark" type="submit">Send message</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}