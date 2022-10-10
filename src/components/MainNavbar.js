import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const MainNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Twitter-Showcase</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={""} className="nav-link">
              Home
            </Link>
            <Link to={"search"} className="nav-link">
              Search
            </Link>
            <Link to={"random"} className="nav-link">
              Random
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
