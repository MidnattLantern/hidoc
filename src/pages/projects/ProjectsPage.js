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
        fetchProjects();
    }, [filter, query, pathname]);

    return (
        <Row>
            <Col>
            <i className={`fas fa-search`} />
            <Form
            onSubmit={(event) => event.preventDefault()}
            >
                <Form.Control
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                className="mr-sm-2"
                placeholder="search projects"
                />
            </Form>
                {hasLoaded ? (
                    <>
                        {projects.length ? (
                            <InfiniteScroll
                                children={
                                    projects.map((post) => (
                                        <Project key={post.id} {...post} setProjects={setProjects} />
                                    ))
                                }
                                dataLength={projects.length}
                                loader={"Loading..."}
                                hasMore={!!projects.next}
                                next={() => fetchMoreData(projects, setProjects)}
                            />

                        ) : (
                            <Container>
                                <p> test 3</p>
                            </Container>
                        )}
                    </>
                ) : (
                    <Container>
                        <p> loading server... </p>
                    </Container>
                )}
            </Col>
        </Row>
    );
}

export default ProjectsPage;
