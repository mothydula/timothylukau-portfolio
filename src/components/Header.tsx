import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";

const Header: React.FC = () => {
  const StyledNavbar = styled(Navbar)`
    font-family: AkiraFont;
    a {
      transition: transform 0.2s;
      &:hover {
        transform: scale(1.05);
      }
    }
  `;

  return (
    <StyledNavbar expand="lg" className="py-6">
      <Container>
        <Navbar.Brand
          className="hover-zoom"
          href="https://linkedin.com/in/timlukau"
        >
          TIM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/tools">Tools</Nav.Link>
            <Nav.Link href="/professional-work">Professional Work</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default Header;
