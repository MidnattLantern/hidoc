import React from "react";
import styles from '../styles/NavBar.module.css';
import { Navbar, Container, Nav, } from "react-bootstrap";
import { NavLink } from "react-router-dom";

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
                    
                        <Nav>

                            <NavLink to="/" >
                                <i class="fa-solid fa-binoculars"></i>
                                Browse
                            </NavLink>

                            <NavLink to="/search" >
                                <i class="fa-solid fa-magnifying-glass"></i>
                                Search Artist
                            </NavLink>

                            <NavLink to="/watch-list" >
                                <i class="fa-solid fa-eye"></i>
                                Watch List
                            </NavLink>

                            <NavLink to="/sign-up" >
                                <i class="fa-solid fa-user-plus"></i>
                                Sign up
                            </NavLink>

                            <NavLink to="/sign-in" >
                                <i class="fa-solid fa-door-open"></i>
                                Sign in
                            </NavLink>

                        </Nav>
                    
                    </Navbar.Collapse>

                </Container>

            
        </Navbar>
        
    )
};

export default NavBar;
