import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import {
    Card,
    Col,
    Container,
    Row,
    Button,
 } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
//import axios from "axios";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styles from "../../styles/Project.module.css";


// most from the api: https://hidoc-api-80e680483d64.herokuapp.com/ across multiple sub-sections
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

//        projectPage,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

    // && isProjDetail will hide some options in Browse view, and reveal in Project detail view
    const location = useLocation();
    const CurrentPath = location.pathname;
    const isProjDetail = CurrentPath === `/projects/${id}`

    // Edit according to the training ref model. Different from edit parag-doc or img-doc (future features)
    const handleEditProject = () => {
        history.push(`/projects/${id}/edit`)
    }

    const handleDeleteProject = async () => {
        try {
            await axiosRes.delete(`/projects/${id}/`);
            history.goBack();
        } catch (err) {
            console.log(err);
        }
    };

    const handleWatchProject = async () => {
        try {

            // Log a message before making the API call
            console.log('Sending POST request to /watch-projects/ with data:', { project:id });

            const {data} = await axiosRes.post('/watch-projects/', {project:id});

            // Log the response data after a successful API call
            console.log('Successfully received data from the API:', data);
            console.log('Watching project')

            setProjects((prevProjects) => ({
                ...prevProjects,
                results: prevProjects.results.map((project) => {
                    return project.id === id
                    ? {...project, watch_proj_count: project.watch_proj_count + 1, watch_proj_id: data.id}
                    : project;
                }),
            }));
        } catch(err){
            // Log any errors that occur during the API call
            console.error('Error during API call:', err);
            console.log('Likely error: already watching project')
        }
    };

    const handleUnwatchProject = async () => {
        try {

        // Log a message before making the API call
        console.log('Sending DELETE request to /watch-projects/ with data:', { project: id, watch_proj_id });

            await axiosRes.delete(`/watch-projects/${watch_proj_id}`);

        // Log a message after a successful API call
        console.log('Successfully deleted watch project:', watch_proj_id);
        console.log('Unwatching project')
        
            setProjects((prevProjects) => ({
                ...prevProjects,
                results: prevProjects.results.map((post) => {
                    return post.id === id
                    ? {...post, watch_proj_count: post.watch_proj_count -1, watch_proj_id: null }
                    : post;
                }),
            }));
        } catch(err){
    // Log any errors that occur during the API call
    console.error('Error during API call:', err);
    console.log('Likely error: already unwatched project')
        }
    }

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
                    <h1>{owner}</h1>

                        {deployed_link !== "" ? (
                            <>
                            <a href={deployed_link} target="_blank" rel="noopener noreferrer">
                                <p>Deployed at: {deployed_link}</p>
                            </a>
                            </>
                        ) : (
                            <></>
                        ) }


                    <div>
                        {isProjDetail ? (
                                <>
                                    <h2>{project_title}</h2>
                                </>
                            ) : (
                                <>
                                    <Link
                                    to={`/projects/${id}`}
                                >
                                    <Button
                                    className={styles.ProjectTitle}
                                    >
                                        <h2>{project_title}</h2>
                                    </Button>
                                </Link>
                                </>
                            )}
                        {is_owner && <MoreDropdown
                        handleEditProject={handleEditProject}
                        handleDeleteProject={handleDeleteProject}
                        />}
                    </div>


                    <p className={styles.DescriptionFrame}>
                        {project_description}
                    </p>

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

                                <Button
                                className={styles.Button}
                                onClick={handleEditProject}
                                > 
                                Add documentation
                                </Button>
                            </div>
                        ) : currentUser && isProjDetail ? (
                            <div>

                                <div className={styles.Test}>
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
        </div>
    )
}

export default Project
