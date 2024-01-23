import React from "react";
import styles from '../styles/NavBar.module.css';
import { Navbar, Container, Nav, } from "react-bootstrap";
import { NavLink } from "react-bootstrap/esm";

const NavBar = () => {
    return (
        <Navbar expand="lg" className={styles.NavBar} >
            
                <Container>

                    <NavLink to="/">
                        <Navbar.Brand href="/">
                            <h1>
                                <i className="fa-solid fa-list-alt"></i>HiDoc
                            </h1>
                        </Navbar.Brand>
                    </NavLink>

                    <Navbar.Toggle />
                    <Navbar.Collapse>
                    <NavLink>
                        <Nav>

                            <NavLink to="/" exact>
                                <Nav.Link href="/browse">
                                        <i class="fa-solid fa-binoculars"></i>
                                        Browse
                                    </Nav.Link>
                            </NavLink>

                            <NavLink to="/search" exact>
                                <Nav.Link href="/search">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                        Search Artist
                                    </Nav.Link>
                            </NavLink>

                            <NavLink to="/watch-list" exact>
                                <Nav.Link href="/watch-list">
                                        <i class="fa-solid fa-eye"></i>
                                        Watch List
                                </Nav.Link>
                            </NavLink>

                            <NavLink to="/sign-up" exact>
                                <Nav.Link href="sign-up">
                                        <i class="fa-solid fa-user-plus"></i>
                                        Sign up
                                    </Nav.Link>
                            </NavLink>

                            <NavLink to="/sign-in" exact>
                                <Nav.Link href="/sign-in">
                                        <i class="fa-solid fa-door-open"></i>
                                        Sign in
                                    </Nav.Link>
                            </NavLink>

                        </Nav>
                    </NavLink>
                    </Navbar.Collapse>

                </Container>

            
        </Navbar>
        
    )
};

export default NavBar;
