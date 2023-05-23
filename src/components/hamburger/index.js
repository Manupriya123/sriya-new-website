import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./index.css";

function OffcanvasExample() {
  return (
    <>
      {[false, "sm"].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className="mb-4 pt-2 ham_nav text-dark"
        >
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="text-dark"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <div className="logo-container ">
                    <a href="https://sriya.ai/">
                      <img
                        height="43"
                        width="130"
                        src="https://ml1ygrea7hcj.i.optimole.com/w:300/h:116/q:mauto/f:avif/https://sriya.ai/wp-content/uploads/2023/04/cropped-Color-logo-no-background-1.png"
                        alt="ariya.ai"
                      />
                    </a>
                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="text-dark">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Platform</Nav.Link>
                  <NavDropdown
                    title="UseCase"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action4">Markets</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      UseCase Builder
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="About Us"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action4">
                      Our History
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Our Team
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Our Market Place
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Our Vision
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Resource"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action4">
                      Case Study
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Articles
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Events</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Academy</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action2">Contact Us</Nav.Link>
                  <Nav.Link href="#action2">Demo</Nav.Link>
                  <Nav.Link href="#action2">Login</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
