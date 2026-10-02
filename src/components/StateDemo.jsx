import { Component } from 'react'
import { Button, ButtonGroup, Card, Container } from 'react-bootstrap'

export default class StateDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        }
        render() {
            return (
                <Container className="mb-4">
                    <Card body>
                        <Card.Title>Class state</Card.Title>
                        <Card.Text>Count: {this.state.count}</Card.Text>
                        <ButtonGroup>
                            <Button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</Button>
                            <Button variant="outline-primary" onClick={() => this.setState({ count: this.state.count - 1 })}>Decrement</Button>
                        </ButtonGroup>
                    </Card>
                </Container>
            )
        }
    }
