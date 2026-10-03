import { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router';

class Header extends Component {
    render() {
        return (
            <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="mb-4">
                <Container>
                    <Navbar.Brand as={Link} to="/">Football Players</Navbar.Brand>
                    <Navbar.Toggle aria-controls="main-navigation" />
                    <Navbar.Collapse id="main-navigation">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/" active>Home</Nav.Link>
                            <Nav.Link as={Link} to="/list#players">Players</Nav.Link>
                            <Nav.Link as={Link} to="/list#psg">PSG</Nav.Link>
                            <Nav.Link as={Link} to="/#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;