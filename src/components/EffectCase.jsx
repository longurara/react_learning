import React, { useEffect } from 'react'
import { Button, ButtonGroup, Card, Container } from 'react-bootstrap'

export default function EffectCase() {
    const [count, setCount] = React.useState(0)
    useEffect(() => {
        document.title = `Counting now: ${count}` //template literal
    }, [count]) //dependency array, if count changes, useEffect will run again
    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleDecrement = () => {
        setCount(count - 1)
    }
    const handleReset = () => {
        setCount(0)
    }
    return (
        <Container className="mb-4">
            <Card body>
                <Card.Title>Effect state</Card.Title>
                <Card.Text>Count: {count}</Card.Text>
                <ButtonGroup>
                    <Button onClick={handleIncrement}>+</Button>
                    <Button variant="outline-primary" onClick={handleDecrement}>-</Button>
                    <Button variant="outline-secondary" onClick={handleReset}>Reset</Button>
                </ButtonGroup>
            </Card>
        </Container>

    )
}
