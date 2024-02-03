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
                setProjects(data);
                setHasLoaded(true);
            } catch (err) {
                console.log(err);
            }
        };

        setHasLoaded(false);
        fetchProjects();
    }, [filter, pathname]);

    return (
        <Row>
            <Col>
                {hasLoaded ? (
                    <>
                        <p> test loaded </p>

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
