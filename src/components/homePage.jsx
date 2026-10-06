import { Button, Container, Form, Row } from 'react-bootstrap';
import { useState } from 'react';

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    major: '',
    comments: '',
    submit: false
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData));
  }
  return (
    <>
      <Container>
        <Row>
          <Form method ="post" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Select
                aria-label="Default select example"
                name="major"
                value={formData.major}
                onChange={(e) => setFormData({ ...formData, major: e.target.value })}
              >
                <option>Open this select menu</option>
                <option value="1">SE</option>
                <option value="2">IA</option>
                <option value="3">AI</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Comments</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={formData.comments}
                onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="switch"
                id="formSwitch1"
                label="Check this switch"
                checked={formData.submit}
                onChange={(e) => setFormData({ ...formData, submit: e.target.checked })}
              />
            </Form.Group>
            <Form.Group>
              <Button type="submit">Submit</Button>
            </Form.Group>
          </Form>
        </Row>
      </Container>
    </>
  )
}
