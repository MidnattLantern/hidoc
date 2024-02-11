//import React, { useContext } from "react";
import React from "react";
import styles from '../styles/NavBar.module.css';
import {
    Navbar,
    Container,
    Nav,
    Image,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
//import { CurrentUserContext, SetCurrentUserContext } from "../App";
import { useCurrentUser, useSetCurrentUser, } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import Logo from "../assets/HiDoc-logo.png";
import { removeTokenTimestamp } from "../utils/utils";

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const { expanded, setExpanded, ref } = useClickOutsideToggle();

    const handleSignOut = async () => {
        try{
            await axios.post('dj-rest-auth/logout/');
            setCurrentUser(null);
            removeTokenTimestamp();
        } catch (err) {
            console.log(err)
        }
    };

const addProjectIcon = (
    <NavLink
    to="/projects/create"
    exact
    className={styles.NavLink}
    activeClassName={styles.Active}
    >
        <i class="far fa-plus-square"></i> Create project
    </NavLink>
)


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

        <NavLink to={`/artist-page/${currentUser?.artaccount_id}`}
        className={styles.AccountNavLink}
        activeClassName={styles.Active}
        >
            <Avatar
            src={currentUser?.artaccount_image}
            text="My Page"
            />

        </NavLink>

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
        </>)


    return (
        <Navbar expanded={expanded} expand="md" fixed="top" className={styles.NavBar} >
                <Container>

                    <NavLink to="/">
                        <Navbar.Brand className={styles.Logo}>
                                <Image
                                src={Logo}
                                className={styles.Logo}
                                />
                        </Navbar.Brand>
                    </NavLink>

                    {currentUser && addProjectIcon}

                    <Navbar.Toggle
                    ref={ref}
                    onClick={() => setExpanded(!expanded)}
                    aria-controls="basic-navbar-nav"
                    />
                    <Navbar.Collapse>
                        <Nav>

                            <NavLink to="/" exact
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            >
                                <i className="fa-solid fa-binoculars"></i>
                                Browse
                            </NavLink>

                            {currentUser ? loggedInIcons : loggedOutIcons}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>   
    )
};

export default NavBar;
