import { useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'

export default function StateFunc() {
    const [car, setCar] = useState({
        color : "blue",
        price : 20000,
        nation : "EU"
    })

    return (
            <Container className="mb-4">
                <Card body>
                    <Card.Title>Object state</Card.Title>
                    <Card.Text>{car.color}, {car.price}, {car.nation}</Card.Text>
                    <Button onClick={() => setCar({ ...car, color: "red" })}>
                    Change Color
                    </Button>
                </Card>
            </Container>
    )
    }
