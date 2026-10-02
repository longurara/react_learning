import { Component } from 'react';
import { Container } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <footer className="bg-dark text-white text-center py-3 mt-5">
                <Container>
                    <p className="mb-0">Copyright © 2022</p>
                </Container>
            </footer>
        );
    }
}

export default Footer;