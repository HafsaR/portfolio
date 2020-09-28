import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <div>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}

        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Portfolio</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
            <Nav.Link href="/portfolio">Portfolios</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
