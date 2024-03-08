// plural projectS
import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import styles from "../../styles/ProjectsPage.module.css";

import Project from "./Project";
import Asset from "../../components/Asset";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import style from "../../styles/ProjectsPage.module.css";
import { useCurrentUser } from '../../contexts/CurrentUserContext';


function ProjectsPage({ message, filter = "" }) {
    const [projects, setProjects] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();
    const currentUser = useCurrentUser();

    const [query] = useState("");

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data } = await axiosReq.get(`/projects/?${filter}`);
                setProjects(data);
                setHasLoaded(true);
            } catch (err) {
//                console.log(err);
            }
        };

        setHasLoaded(false);
        const timer = setTimeout(() => {
            fetchProjects();
        }, 2000);
        return () => {
            clearTimeout(timer);
        };
    }, [filter, query, pathname, currentUser]);

    return (
        <div className={styles.ProjectsPageCard}>
            <Col>
            <Form
            className={style.SearchBar}
            onSubmit={(event) => event.preventDefault()}
            />
                {hasLoaded ? (
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
                                <Asset message={message} />
                            </Container>
                        )}
                    </>
                ) : (
                    <Container>
                        <p> loading projects... </p>
                    </Container>
                )}
            </Col>
        </div>
    );
}

export default ProjectsPage;
