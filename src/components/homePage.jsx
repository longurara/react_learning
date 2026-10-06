import { Button, Container, Form, Row } from 'react-bootstrap';
export default function HomePage() {
  return (
    <>
      <Container>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
              value = {formData.name}
              onChange = {(e) => setFormData({ ...formData, name: e.target.value })}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
              value = {formData.email}
              onChange = {(e) => setFormData({ ...formData, email: e.target.value })}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Enter your phone number" />
              value = {formData.phone}
              onChange = {(e) => setFormData({ ...formData, phone: e.target.value })}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Select aria-label="Default select example" name="major">
                <option>Open this select menu</option>
                <option value="1">SE</option>
                <option value="2">IA</option>
                <option value="3">AI</option>
                value = {formData.major}
                onChange = {(e) => setFormData({ ...formData, major: e.target.value })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Comments</Form.Label>
              <Form.Control as="textarea" rows={3} />
              value = {formData.comments}
              onChange = {(e) => setFormData({ ...formData, comments: e.target.value })}
            </Form.Group>
            <Form.Group>
              <Form.Check type="switch" id="formSwitch1" label="Check this switch" />
            </Form.Group>
            <Form.Group>
              <Button type="submit">Submit</Button>
              value = {formData.submit}
              onChange = {(e) => setFormData({ ...formData, submit: e.target.value })}
            </Form.Group>
          </Form>
        </Row>
      </Container>
    </>
  )
}
