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
     </>   
    );

    const mainAccountProjects = (
        <>
        <p>List of projects by artist</p>
        </>
    )

    const loadingMessage = (
        <>
        <p>Loading artist page...</p>
        </>
    )

    return (
        <div>
            <h1>Artist page</h1>
        </div>
    )
}

export default ArtistPage;
