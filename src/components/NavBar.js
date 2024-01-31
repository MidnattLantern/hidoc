//import React, { useContext } from "react";
import React from "react";
import styles from '../styles/NavBar.module.css';
import { Navbar, Container, Nav, } from "react-bootstrap";
import { NavLink } from "react-router-dom";
//import { CurrentUserContext, SetCurrentUserContext } from "../App";
import { useCurrentUser, useSetCurrentUser, } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    const handleSignOut = async () => {
        try{
            await axios.post('dj-rest-auth/logout/');
            setCurrentUser(null);
        } catch (err) {
            console.log(err)
        }
    };


    const loggedInIcons = (
    <>
        <NavLink to="/watch-list" exact
        className={styles.NavLink}
        activeClassName={styles.Active}
        >
            <i className="fa-solid fa-eye"></i>
            Watch List
        </NavLink>

        <NavLink to="/"
        className={styles.NavLink}
        onClick={handleSignOut}
        >
            <i className="fa-solid fa-door-open"></i>
            Sign out
        </NavLink>

        <NavLink to={`/my-page/${currentUser?.artaccount_id}`}
        className={styles.AccountNavLink}
        activeClassName={styles.Active}
        >
            <Avatar
            src={currentUser?.artaccount_image}
            text="My Page"
            />

        </NavLink>
    {currentUser?.username}
    </>)


    const loggedOutIcons = (
        <>
        <NavLink to="/sign-in" exact
        className={styles.NavLink}
        activeClassName={styles.Active}
        >
            <i className="fa-solid fa-door-open"></i>
            Sign in
        </NavLink>

        <NavLink to="/sign-up" exact
        className={styles.NavLink}
        activeClassName={styles.Active}
        >
            <i className="fa-solid fa-user-plus"></i>
            Sign up
        </NavLink>
        <p>signed out</p>
        </>)


    return (
        <Navbar expand="lg" className={styles.NavBar} >
                    
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
                                <i className="fa-solid fa-binoculars"></i>
                                Browse
                            </NavLink>

                            <NavLink to="/search" exact
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            >
                                <i className="fa-solid fa-magnifying-glass"></i>
                                Search Artist
                            </NavLink>

                            {currentUser ? loggedInIcons : loggedOutIcons}

                            {currentUser?.artaccount_id}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>   
    )
};

export default NavBar;
