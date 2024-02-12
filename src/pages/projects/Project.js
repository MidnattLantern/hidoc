import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import styles from "../../styles/Project.module.css";

import { Link, useLocation } from "react-router-dom";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// future feature
import DocumentaitonCreateForm from "../documentations/DocumentationCreateForm";
import Documentation from "../documentations/Documentation";


// most from the api: https://hidoc-api-80e680483d64.herokuapp.com/
const Project = (props) => {
    const {
        id,
        owner,
        project_title,
        project_description,
        feature_poster,
        updated_at,
        watch_proj_id,
        setProjects,
        deployed_link,
    } = props;

    // test
    const [project, setProject] = useState({ results: [] });
    const [documentations, setDocumentations] = useState({ results: [] });

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: project}, { data: documentations}] = await Promise.all([
                    axiosReq.get(`/documentations/?project=${id}`),
                ]);
                setProject({ results: [project] });
                setDocumentations(documentations);
            } catch (err) {
//                console.log(err)
            }
        };

        handleMount();
    }, [id]);

    // && isProjDetail will hide some options in Browse view, and reveal in Project detail view
    const location = useLocation();
    const CurrentPath = location.pathname;
    const isProjDetail = CurrentPath === `/projects/${id}`;

    // Edit according to the training ref model. Different from edit parag-doc or img-doc (future features)
    const handleEditProject = () => {
        history.push(`/projects/${id}/edit`);
    };

    const handleDeleteProject = async () => {
        try {
            await axiosRes.delete(`/projects/${id}/`);
            history.goBack();
        } catch (err) {
//            console.log(err);
        }
    };

// test
const handleDeleteDocumentation = async () => {
    try {
        await axiosRes.delete(`/documentations/${id}/`);
        setProject((prevProject) => ({
            results: [
                {
                    ...prevProject.results[0],
                },
            ],
        }));

        // after deletion, the array is updated
        setDocumentations((prevDocumentations => ({
            ...prevDocumentations,
            results: prevDocumentations.results.filter((documentation) => documentation.id !== id),
        })));
    } catch (err) {
//        console.log(err)
    }
};

    const handleWatchProject = async () => {
        try {
//            console.log('Sending POST request to /watch-projects/ with data:', { project:id });
            const {data} = await axiosRes.post('/watch-projects/', {project:id});
//            console.log('Successfully received data from the API:', data);
//            console.log('Watching project')

            setProjects((prevProjects) => ({
                ...prevProjects,
                results: prevProjects.results.map((project) => {
                    return project.id === id
                    ? {...project, watch_proj_count: project.watch_proj_count + 1, watch_proj_id: data.id}
                    : project;
                }),
            }));
        } catch(err){
//            console.error('Error during API call:', err);
//            console.log('Likely error: already watching project')
        }
    };

    const handleUnwatchProject = async () => {
        try {
//        console.log('Sending DELETE request to /watch-projects/ with data:', { project: id, watch_proj_id });
        await axiosRes.delete(`/watch-projects/${watch_proj_id}`);
//        console.log('Successfully deleted watch project:', watch_proj_id);
//        console.log('Unwatching project')
        
            setProjects((prevProjects) => ({
                ...prevProjects,
                results: prevProjects.results.map((post) => {
                    return post.id === id
                    ? {...post, watch_proj_count: post.watch_proj_count -1, watch_proj_id: null }
                    : post;
                }),
            }));
        } catch(err){
//    console.error('Error during API call:', err);
//    console.log('Likely error: already unwatched project')
        }
    };

    const moreDropdown = (
        <div className={styles.MoreDropdown}>
            {is_owner && <MoreDropdown
            handleEditProject={handleEditProject}
            handleDeleteProject={handleDeleteProject}
            />}
        </div>
    )

    return (
        <div className={styles.ProjectCard}>

            <Row>
                <Col>
                    <Container>
                        <Link to={`/projects/${id}`}>
                            <Card.Img
                            className={styles.PosterFrame}
                            src={feature_poster}
                            />
                        </Link>
                    </Container>
                </Col>

                <Col>
                    <Container>

                    {moreDropdown}

                    <h1>{owner}</h1>

                        {isProjDetail && deployed_link !== "" ? (
                            <div>
                                <a
                                href={deployed_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.Link}>
                                    <p>Deployed at: {deployed_link}</p>
                                </a>
                            </div>
                        ) : (
                            <></>
                        ) }


                    <div>
                        {isProjDetail ? (
                                <div>
                                    <h2>{project_title}</h2>
                                </div>
                            ) : (
                                <div>
                                    <Link
                                    to={`/projects/${id}`}>
                                    <Button
                                    className={styles.ProjectTitle}
                                    >
                                        {project_title === "" ? (
                                            <>
                                            <h3><i class="fa-solid fa-book-open-reader"></i></h3>
                                            </>
                                        ) : (
                                            <>
                                            <h2>{project_title}</h2>
                                            </>
                                        )}
                                    </Button>
                                </Link>
                                </div>
                            )}

                    </div>


                    <div className={styles.DescriptionFrame}>
                        {project_description === "" ? (
                            <>
                            <p>Created by {owner}</p>
                            </>
                        ) : (
                            <>
                            <p>{project_description}</p>
                            </>
                        )}
                    </div>

                        <p>Latest update: {updated_at}</p>
                    <div>
                        {is_owner && isProjDetail ? (
                            <div>
                                <Button
                                className={styles.Button}
                                onClick={handleEditProject}
                                > 
                                Edit project
                                </Button>
                            </div>
                        ) : currentUser && isProjDetail ? (
                            <div>

                                <div>
                                    { currentUser && watch_proj_id ? (

                                        <Button
                                        onClick={handleUnwatchProject}
                                        className={styles.UnwatchButton}
                                        >
                                        <i className="fa-solid fa-eye" /> Unwatch project
                                        </Button>
                                    ) : (
                                        <Button
                                        onClick={handleWatchProject}
                                        className={styles.WatchButton}
                                        >
                                        <i className="fa-solid fa-eye" /> Watch project
                                        </Button>
                                    )}
                                </div>
                            </div>

                        ) : isProjDetail && (
                            <div>
                                <p> Don't lose this project, <br/>
                                <Link
                                to={`/sign-in`}
                                className={styles.Link}
                                >
                                Sign In </Link> or <Link
                                to={`/sign-up`}
                                className={styles.Link}
                                >
                                Sign Up </Link> <br/>
                                to watch this project!
                                </p>
                            </div>
                        )}


                    </div>
                    </Container>
                </Col>
            </Row>

            {currentUser && is_owner && isProjDetail ? (
                    <>
                    <DocumentaitonCreateForm
                    project={id}
                    setProject={setProject}
                    setDocumentations={setDocumentations}
                    />
  
                    </>
                ) : (
                <></>
                )}

                {documentations.results.length ? (
                documentations.results.map(documentations => (
                    <div>
                        <Documentation
                        key={documentations.id}
                        {...documentations}
                        setProject={setProject}
                        setDocumentations={setDocumentations}
                        />
                    </div>
                ))
            ) : (
                <></>
            )}

        </div>
    )
}
// Double Documentation snippet: before refresh/ revisit

export default Project
