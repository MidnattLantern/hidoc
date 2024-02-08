// referenced from Moments tutorial
import React, { useEffect , useState} from "react";

import {
//    Col,
//    Row,
    Container,
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
import InfiniteScroll from "react-infinite-scroll-component";
import Project from "../projects/Project";
import { fetchMoreData } from "../../utils/utils";

//test
import { useLocation } from "react-router";

function ArtistPage() {

    //test
    const [projects, setProjects] = useState({ results: [] });

    const [hasLoaded, setHasLoaded] = useState(false);
    const [artistProjects, setArtistProjects] = useState({ results: [] });

    const currentUser = useCurrentUser();
    const { id } = useParams();
    const setAccountData = useSetAccountData();
    const {pageAccount} = useAccountData();

    // credits: help from tutor Jason
    const account = pageAccount && pageAccount.results && pageAccount.results.length > 0 ? pageAccount.results[0] : null;

   const is_owner = currentUser?.username === account?.owner;

   //test
   const { pathname } = useLocation();
   const [query] = useState("");

   //axiosReq.get(`/art-accounts/${id}/`),
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const [{data: pageAccount}] = await Promise.all([
                    axiosReq.get(`/art-accounts/${id}/`),

                    //test
                    axiosReq.get(`/projects/?owner__artaccount=${id}`),


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
        fetchProjects();
    }, [id, setAccountData]);

    // test 2nd useEffect
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data } = await axiosReq.get(`/projects/?owner__artaccount=${id}`);
//                setProjects(data);
                setProjects(prev => ({ ...prev, results: data}));
                setHasLoaded(true);
            } catch (err) {
                console.log(err);
            }
        };

        setHasLoaded(false);
        const timer = setTimeout(() => {
            fetchProjects();
        }, 2000)
        return () => {
            clearTimeout(timer);
        }
    }, [query, pathname, id]);

//    console.log(account)
    console.log("test: ", artistProjects.results.length)

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
        {artistProjects.results.length ? (
            <>
             <InfiniteScroll
             children={artistProjects.results.map((post) => (
                <Project key={post.id} {...post} setProjects={setArtistProjects} />
             ))}
             dataLength={artistProjects.results.length}
             //Asset src={NoResults} message="artist hasn't posted anything"
             loader={"loading..."}
             hasMore={!!artistProjects.next}
             next={() => fetchMoreData(artistProjects, setArtistProjects)}
             />
            </>
        ) : (
            <p>test artstprojects.results.length is false</p>
        )}


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


                {hasLoaded ? (
                    <>
                        {projects.results.length ? (
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
                                <p> no projects </p>
                            </Container>
                        )}
                    </>
                ) : (
                    <Container>
                        <p> loading projects... </p>
                    </Container>
                )}


        </div>
    )
}

export default ArtistPage;
