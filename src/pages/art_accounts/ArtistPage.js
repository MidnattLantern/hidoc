// referenced from Moments tutorial
import React, { useEffect , useState} from "react";

import {
    Col,
    Row,
    Container,
    Image,
    Button,
} from "react-bootstrap";

import Asset from "../../components/Asset";
import styles from "../../styles/ArtistPage.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

function ArtistPage() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const currentUser = useCurrentUser();
    const { id } = useParams();

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
            {hasLoaded ? (
                <p>loaded</p>
            ) : (
                <p>loading...</p>
            ) }
            {mainAccount}
            {mainAccountProjects}
            <Button>
                Create project
            </Button>
        </div>
    )
}

export default ArtistPage;
