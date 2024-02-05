// plural projectS
import React, { useEffect, useState } from "react";
import {
    Row,
    Col,
    Container,
    Form,
} from "react-bootstrap";

import Project from "./Project";
//import Asset from "../../components/Asset";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import style from "../../styles/ProjectsPage.module.css"
import { useCurrentUser } from '../../contexts/CurrentUserContext';

function ProjectsPage({ message, filter = "" }) {
    const [projects, setProjects] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();

    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data } = await axiosReq.get(`/projects/?${filter}search=${query}`);
                console.log(data);
                setProjects(data);
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
    }, [filter, query, pathname]);

    return (
        <Row>
            <Col>
            <Form
            className={style.SearchBar}
            onSubmit={(event) => event.preventDefault()}
            >
                <Form.Control
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                placeholder="search projects"
                />
            </Form>
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
                                <p> failed to load </p>
                            </Container>
                        )}
                    </>
                ) : (
                    <Container>
                        <p> loading projects... </p>
                    </Container>
                )}
            </Col>
        </Row>
    );
}

export default ProjectsPage;
