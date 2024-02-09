// referenced from Moments tutorial
import React, { useEffect , useState} from "react";

import {
//    Col,
//    Row,
    Container,
    Image,
//    Button,
} from "react-bootstrap";
import { fetchMoreData } from "../../utils/utils";

import styles from "../../styles/ArtistPage.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import {
    useAccountData,
    useSetAccountData,
} from "../../contexts/AccountDataContext"
import InfiniteScroll from "react-infinite-scroll-component";
import Project from "../projects/Project";

function ArtistPage() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const currentUser = useCurrentUser();
    const { id } = useParams();
    const setAccountData = useSetAccountData();
    const {pageAccount} = useAccountData();

    // test get projects
    const [projects, setProjects] = useState({ results: [] });

    // credits: help from tutor Jason
    const account = pageAccount && pageAccount.results && pageAccount.results.length > 0 ? pageAccount.results[0] : null;

//    const is_owner = currentUser?.username === account?.owner;

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

    // test 2nd use effect
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data } = await axiosReq.get(`/projects/?owner__artaccount=${id}`);
                setProjects(data)
                setHasLoaded(true);
            } catch (err) {
                console.log(err);
            }
        };
        fetchProjects();
        setHasLoaded(false);
    }, [currentUser, id]);
//    }, [filter, query, pathname, currentUser]);

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
        {projects?.results?.length ? (
            <InfiniteScroll
                children={
                    projects.results.map((post) => (
                        <Project
                        key={post.id} {...post}
                        setProjects={setProjects} />
                    ))
                }
                dataLength={projects.results.length}
                loader={"Loading..."}
                hasMore={!!projects.results.next}
                next={() => fetchMoreData(projects, setProjects)}
            />

        ) : (
            <Container>
                <p> failed to load </p>
            </Container>
        )}
    </>
    )

    return (
        <div className={styles.ArtistPageCard}>
            {hasLoaded ? (
                <>
                {mainAccount}
                {mainAccountProjects}
                </>
            ) : (
                <p>loading...</p>
            ) }
        </div>
    )
}

export default ArtistPage;
