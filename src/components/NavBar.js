import React from "react";
import styles from '../styles/NavBar.module.css';
import { Navbar, Container, Nav, } from "react-bootstrap";
import { NavLink } from "react-bootstrap/esm";

const NavBar = () => {
    return (
        <Navbar>
        <div>
            <Container>

                <NavLink to="/">
                    <Navbar.Brand href="#home">
                        <i className="fa-solid fa-list-alt"></i> HiDoc
                    </Navbar.Brand>
                </NavLink>

                <NavLink>
                    <Nav>

                        <NavLink to="/"
                        
                        >
                            <p>item 1</p>
                        </NavLink>

                        <NavLink to="/"
                        
                        >
                            <p>item 2</p>
                        </NavLink>

                        <NavLink to="/"
                        
                        >
                            <p>item 3</p>
                        </NavLink>

                    </Nav>
                </NavLink>

            </Container>
        </div>
        </Navbar>
    )
};

export default NavBar;
