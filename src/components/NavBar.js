import React, { useContext } from "react";
import styles from '../styles/NavBar.module.css';
import { Navbar, Container, Nav, } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../App";

const NavBar = () => {
    const currentUser = useContext(CurrentUserContext);
    const loggedInIcons = (
    <>
    {currentUser?.username}
    <p>signed in</p>
    </>)
    const loggedOutIcons = (
    <>
    <p>signed out</p>
    </>)

    return (
        <Navbar expand="lg" className={styles.NavBar} >
                    {currentUser ? loggedInIcons : loggedOutIcons}
                <Container>

                    <NavLink to="/">
                        <Navbar.Brand className={styles.Logo}>
                            
                                <i className="fa-solid fa-list-alt"></i>HiDoc
                            
                        </Navbar.Brand>
                    </NavLink>

                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav>

                            <NavLink to="/" exact
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            >
                                <i class="fa-solid fa-binoculars"></i>
                                Browse
                            </NavLink>

                            <NavLink to="/search" exact
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            >
                                <i class="fa-solid fa-magnifying-glass"></i>
                                Search Artist
                            </NavLink>

                            const signedInIcons = <>

                            <NavLink to="/watch-list" exact
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            >
                                <i class="fa-solid fa-eye"></i>
                                Watch List
                            </NavLink>

                            <NavLink to="/sign-out" exact
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            >
                                <i class="fa-solid fa-door-open"></i>
                                Sign out
                            </NavLink>

                            <NavLink to="/my-page" exact
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            >
                                <i class="fa-solid fa-door-open"></i>
                                My page
                            </NavLink>

                            </>
                            const signedOutIcons = <>

                            <NavLink to="/sign-in" exact
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            >
                                <i class="fa-solid fa-door-open"></i>
                                Sign in
                            </NavLink>

                            <NavLink to="/sign-up" exact
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            >
                                <i class="fa-solid fa-user-plus"></i>
                                Sign up
                            </NavLink>

                            </>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>   
    )
};

export default NavBar;
