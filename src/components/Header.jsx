import { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="mb-4">
                <Container>
                    <Navbar.Brand href="#home">Football Players</Navbar.Brand>
                    <Navbar.Toggle aria-controls="main-navigation" />
                    <Navbar.Collapse id="main-navigation">
                        <Nav className="ms-auto">
                            <Nav.Link active href="#home">Home</Nav.Link>
                            <Nav.Link href="#players">Players</Nav.Link>
                            <Nav.Link href="#psg">PSG</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;