// referenced from Moments tutorial
import React, { useEffect , useState} from "react";

import {
//    Col,
//    Row,
//    Container,
    Image,
    Button,
} from "react-bootstrap";

//import Asset from "../../components/Asset";
//import styles from "../../styles/ArtistPage.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import {
    useAccountData,
    useSetAccountData,
} from "../../contexts/AccountDataContext"

function ArtistPage() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const currentUser = useCurrentUser();
    const { id } = useParams();
    const setAccountData = useSetAccountData();
    const {pageAccount} = useAccountData();

    // credits: help from tutor Jason
    const account = pageAccount && pageAccount.results && pageAccount.results.length > 0 ? pageAccount.results[0] : null;

   const is_owner = currentUser?.username === account?.owner;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [{data: pageAccount}] = await Promise.all([
                    axiosReq.get(`/art-accounts/${id}/`)
                ])
                setAccountData(prevState => ({
                    ...prevState,
                    pageAccount: {results: [pageAccount]},
                }));
                setHasLoaded(true);
            } catch (err) {
                console.log(err)
            }
        };
        fetchData();
    }, [id, setAccountData]);

    console.log(account)

    const mainAccount = (
     <>
     <h1>{account?.owner}</h1>
     <Image src={account?.image}/>
     <p>Projects: {account?.projects_count}</p>
     </>   
    );

    const mainAccountProjects = (
        <>
        <p>List of projects by artist</p>
        </>
    )

    return (
        <div>
            {hasLoaded ? (
                <>
                {mainAccount}
                {mainAccountProjects}
                </>
            ) : (
                <p>loading...</p>
            ) }

            { hasLoaded && is_owner ? (
                <>
                    <Button>
                    Create project
                    </Button>
                </>
            ) : (
                <></>
            ) }

        </div>
    )
}

export default ArtistPage;
