import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import  Button  from "react-bootstrap/Button";
//
import icon from "../asset/images/round-table.png";

const Navbar1 = () => {
  return (
    <Navbar bg="light" expand="lg" className="text-center">
      <Container>
        <Navbar.Brand href="/" >
          <img src={icon} width={30} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="/">หน้าแรก</Nav.Link>
            <Nav.Link href="/Borrowitems">ยืมของ</Nav.Link>
          </Nav>
          <div>
          <Button  variant="primary" href="/RentRoom">การจองห้อง</Button>
        </div>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
};

export default Navbar1;
