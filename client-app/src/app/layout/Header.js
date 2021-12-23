import React from "react";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import { FaGraduationCap } from "react-icons/fa";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} href="/">
          <FaGraduationCap className="fs-2 mx-2" />
          Admissions
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} href="/applications">
              Applications
            </Nav.Link>
            <Nav.Link as={NavLink} href="/enrollments">
              Enrollments
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} href="/login">
              Sign In
            </Nav.Link>
            <Nav.Link href="#memes">Sign Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
