import { Alert, Button, Container, Form, Row } from 'react-bootstrap';
import * as yup from 'yup';
import { useFormik } from 'formik';

export default function HomePage() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      major: '',
      comments: '',
      agree: false
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validationSchema: yup.object({
      name: yup.string().required('Name is required'),
      email: yup.string().email('Invalid email address').required('Email is required'),
      phone: yup.string().required('Phone number is required'),
      major: yup.string().required('Major is required'),
      comments: yup.string().required('Required').min(10, 'Comments must be at least 10 characters'),
      agree: yup.boolean().oneOf([true], 'You must agree to the terms')
    })
  });

  return (
    <Container>
      <Row>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="homeName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name && <Alert variant="warning">{formik.errors.name}</Alert>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="homeEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && <Alert variant="warning">{formik.errors.email}</Alert>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="homePhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your phone number"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
            {formik.errors.phone && <Alert variant="warning">{formik.errors.phone}</Alert>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="homeMajor">
            <Form.Select
              aria-label="Select your major"
              name="major"
              value={formik.values.major}
              onChange={formik.handleChange}
            >
              <option value="">Open this select menu</option>
              <option value="SE">SE</option>
              <option value="IA">IA</option>
              <option value="AI">AI</option>
            </Form.Select>
            {formik.errors.major && <Alert variant="warning">{formik.errors.major}</Alert>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="homeComments">
            <Form.Label>Comments</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="comments"
              value={formik.values.comments}
              onChange={formik.handleChange}
            />
            {formik.errors.comments && <Alert variant="warning">{formik.errors.comments}</Alert>}
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="switch"
              id="formSwitch1"
              label="Check this switch"
              name="agree"
              checked={formik.values.agree}
              onChange={formik.handleChange}
            />
            {formik.errors.agree && <Alert variant="warning">{formik.errors.agree}</Alert>}
          </Form.Group>
          <Form.Group>
            <Button type="submit">Submit</Button>
          </Form.Group>
        </Form>
      </Row>
    </Container>
  );
}
