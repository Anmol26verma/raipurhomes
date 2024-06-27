import React from "react";
import { Navbar, Nav,Dropdown, Button, } from "react-bootstrap";
import { FaEdit, FaUser } from "react-icons/fa";
import "./navbar.css";

const navbar = () => {
  return (
    <Navbar className="navbar">
      <div className="logo">
        <Navbar.Brand href="#home">
          <img
            src={require("../images/logo.png")}
            width="80"
            height="80"
            className="logo"
            alt="Logo"
          />
        </Navbar.Brand>
      </div>
      <div className="nav">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Dropdown>
        <Dropdown.Toggle as={Nav.Link} id="dropdown-properties-subtype">
          Properties Sub Type
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#residential">Residential</Dropdown.Item>
          <Dropdown.Divider /> {/* Divider */}
          <Dropdown.Item href="#commercial">Commercial</Dropdown.Item>
          <Dropdown.Divider /> {/* Divider */}
          <Dropdown.Item href="#industrial">Industrial</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item href="#land">Land</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item href="#residential">Residential</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item href="#commercial">Commercial</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item href="#industrial">Industrial</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item href="#land">Land</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item href="#residential">Residential</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item href="#commercial">Commercial</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item href="#industrial">Industrial</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item href="#land">Land</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>        
      <Dropdown>
        <Dropdown.Toggle as={Nav.Link} id="dropdown-properties-subtype">
          Project Wise
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#residential">Individual </Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item href="#commercial">Project </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>   
          <Nav.Link href="#">Explore</Nav.Link>
          <Nav.Link href="#">Blog</Nav.Link>
        </Nav>
      </div>
      <div className="login">
        <Nav>
          <Nav.Link href="#user" id="user">
            <FaUser className="user"/>
          </Nav.Link>
          <Nav.Link href="#login" id="login">Login/Signup</Nav.Link>
          <Button id="post"><FaEdit id="edit"/>
            Post Property</Button>
        </Nav>
      </div>
    </Navbar>
  );
};

export default navbar;
