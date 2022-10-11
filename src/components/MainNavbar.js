import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/twitter-64.png";
import "./MainNavbar.css";

const MainNavbar = () => {
  return (
    <Navbar variant="dark" expand="lg" className="main-navbar">
      <Container>
        <Navbar.Brand>
          <Link to={""}>
            <img
              src={logo}
              width="32"
              height="32"
              className="d-inline-block align-top"
              alt="Twitter Logo"
            />
          </Link>
        </Navbar.Brand>
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
