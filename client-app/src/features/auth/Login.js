import React from "react";

import { Container, Row, Col, Form, Button, Breadcrumb } from "react-bootstrap";

function Login() {
  return (
    <>
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item href="#">Admission</Breadcrumb.Item>
          <Breadcrumb.Item active>Login</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Container className="mt-5">
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold d-none">Username</Form.Label>
                <Form.Control type="email" placeholder="Enter username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bold d-none">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Remember me on this device"
                />
              </Form.Group>
              <hr />
              <Button variant="outline-success" type="submit" className="mx-2">
                Submit
              </Button>
              <Button variant="outline-secondary" type="submit">
                Cancel
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
