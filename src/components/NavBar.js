import React from "react";
import styles from '../styles/NavBar.module.css';
import { Navbar, Container, Nav, } from "react-bootstrap";
import { NavLink } from "react-bootstrap/esm";

const NavBar = () => {
    return (
        <Navbar expand="lg" className={styles.NavBar} >
        <div>
            <Container>

                <NavLink to="/">
                    <Navbar.Brand href="#home">
                        <i className=""></i>
                        <h1>HiDoc</h1>
                    </Navbar.Brand>
                </NavLink>

                <NavLink>
                    <Nav>

                        <NavLink to="/"
                        >
                            <h2>
                                <i class="fa-solid fa-binoculars"></i>
                                Browse
                            </h2>
                        </NavLink>

                        <NavLink to="/"
                        >
                            <h2>
                                <i class="fa-solid fa-magnifying-glass"></i>
                                Search Artist
                            </h2>
                        </NavLink>

                        <NavLink to="/"
                        >
                            <h2>
                                <i class="fa-solid fa-eye"></i>
                                Watch List
                            </h2>
                        </NavLink>

                    </Nav>
                </NavLink>

            </Container>
        </div>
        </Navbar>
    )
};

export default NavBar;
