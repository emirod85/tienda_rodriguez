import React from 'react';
import CartWidget from './CartWidget';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,NavDropdown,Nav,Form,FormControl,Button} from 'react-bootstrap';

const NavBar = () => {
    return (
    
             
      <header className="App-header">
      <Navbar  className="pe-5 ps-5" bg="light" expand="lg">
  <Navbar.Brand href="#">TiendaEmiRodr</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">Latin Stores</Nav.Link>
      <NavDropdown title="LatinFood" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Products</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Favorites</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">SignUp your store</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#" disabled>
        Link
      </Nav.Link>
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
        
    )
}

export default NavBar
