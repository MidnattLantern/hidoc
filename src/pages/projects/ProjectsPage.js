// plural projectS
import React, { useEffect, useState } from "react";
import {
    Row,
    Col,
    Container,
} from "react-bootstrap";

import Project from "./Project";
//import Asset from "../../components/Asset";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

function ProjectsPage({ message, filter = "" }) {
    const [projects, setProjects] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data } = await axiosReq.get(`/projects/?${filter}`);
                console.log(data);
                setProjects(data);
                setHasLoaded(true);
            } catch (err) {
                console.log(err);
            }
        };

        setHasLoaded(false);
        fetchProjects();
    }, [filter, pathname]);

    console.log('projects:')
    console.log(projects);

    return (
        <Row>
            <Col>
                {hasLoaded ? (
                    <>
                        {projects.length ? (
                            projects.map((post) => (
                                <Project key={post.id} {...post} setProjects={setProjects} />
                            ))
                        ) : (
                            <Container>
                                <p> test 3</p>
                            </Container>
                        )}
                    </>
                ) : (
                    <Container>
                        <p> test loading </p>
                    </Container>
                )}
            </Col>
        </Row>
    );
}

export default ProjectsPage;