import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand href="#home">My Music</Navbar.Brand>
        </Link>
        <Nav className="ml-auto">
          <Link to="/" className="nav-link active">
            Home
          </Link>
          <Nav.Link href="#features">Favorites</Nav.Link>
          <Nav.Link href="#pricing">Add a music</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default withRouter(NavBar);
