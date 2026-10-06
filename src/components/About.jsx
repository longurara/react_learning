import { useState } from 'react'
import { Button, Card, Collapse, Container } from 'react-bootstrap'

export default function About() {
    const [open, setOpen] = useState(false)

    return (
        <Container className="py-4">
            <Card className="shadow-sm mx-auto" style={{ maxWidth: '760px' }}>
                <Card.Body>
                    <h1>About Football Players</h1>
                    <p className="text-muted">A simple collection of player profiles and market information.</p>
                    <Button variant="dark" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
                        {open ? 'Hide details' : 'Show details'}
                    </Button>
                    <Collapse in={open}>
                        <div className="mt-3">
                            <p className="mb-0">Browse the player list, open a profile for full details, and watch a highlight video from the detail page.</p>
                        </div>
                    </Collapse>
                </Card.Body>
            </Card>
        </Container>
    )
}
