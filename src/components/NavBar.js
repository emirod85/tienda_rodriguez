import React from "react";
import CartWidget from "./CartWidget";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="App-header">
      <Navbar className="pe-5 ps-5" bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">TiendaEmiRodr</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="#action2">Productos</Nav.Link>
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <Link to="/categoria/Bass">Bajo eléctrico</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/categoria/Electric">Electric guitar</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/categoria/Acoustic">Acoustic guitar</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/categoria/Clasic">Clasic guitar</Link>
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Contact Us</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
        Link
      </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <CartWidget />
      </Navbar>
    </header>
  );
};

export default NavBar;
