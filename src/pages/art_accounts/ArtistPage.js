// referenced from Moments tutorial
import React, { useEffect , useState} from "react";

import {
    Col,
    Row,
    Container,
} from "react-bootstrap";

import Asset from "../../components/Asset";

import styles from "../../styles/ArtistPage.module.css";
import PopularArtAccounts from "./PopularArtAccounts";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function ArtistPage() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const currentUser = useCurrentUser();

    useEffect(() => {
        setHasLoaded(true);
    }, []);

    const mainAccount = (
     <>
     <p>Image</p>
     <p>Username</p>
     <p>List of projects</p>
     </>   
    );

    return (
        <div>
            <h1>Hello walrus</h1>
        </div>
    )
}

export default ArtistPage