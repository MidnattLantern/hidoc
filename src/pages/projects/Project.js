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
import axios from "axios";
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
            console.log('Received data from the API:', data);

            setProjects((prevProjects) => ({
                ...prevProjects,
                results: prevProjects.results.map((post) => {
//                results: prevProjects.map((post) => {
                    return post.id === id
                    ? {...post, watch_proj_count: post.watch_proj_count + 1, watch_proj_id: data.id}
                    : post;
                }),
            }));
        } catch(err){
            // Log any errors that occur during the API call
            console.error('Error during API call:', err);
        }
    };

    const handleUnwatchProject = async () => {
        try {
            await axiosRes.delete(`/watch-projects/${watch_proj_id}`);
            setProjects((prevProjects) => ({
                ...prevProjects,
//                results: prevProjects.results.map((post) => {
                results: prevProjects.map((post) => {
                    return post.id === id
                    ? {...post, watch_proj_count: post.watch_proj_count -1, watch_proj_id: null }
                    : post;
                }),
            }));
        } catch(err){
            console.log(err);
        }
    }

    return (
        <div className={styles.WindowCard}>
            <Row>
            <Col>
            <Container>
                <Card.Img
                className={styles.PosterFrame}
                src={feature_poster}
                />
            </Container>
            </Col>

            <Col>
            <Container>
            <h1>{owner}: <Link className={styles.Link} to={`/projects/${id}`}>{project_title}</Link></h1>

            <p className={styles.DescriptionFrame}>
                {project_description}
            </p>

            {is_owner && isProjDetail && <MoreDropdown
                handleEditProject={handleEditProject}
                handleDeleteProject={handleDeleteProject}
                />}
                <p>Latest update: {updated_at}</p>
            <div>
                {is_owner && isProjDetail ? (
                    <div>
                        <Button
                        className={styles.Button}
                        > 
                        Add documentation (comming soon)
                        </Button>
                    </div>
                ) : currentUser && isProjDetail ? (
                    <div onClick={handleWatchProject}>
                        <Button
                        className={styles.WatchButton}
                        >
                        <i className="fa-solid fa-eye" /> Watch project
                        </Button>
                    </div>
                ) : watch_proj_id && isProjDetail ? (
                    <div inClick={handleUnwatchProject}>
                        <p>
                        <i className="fa-solid fa-eye" /> unwatch project
                        </p>
                    </div>
                ) : isProjDetail && (
                    <div>
                        <p>
                        <i className="fa-solid fa-eye" /> Caught you interest? <Link
                        to={`/sign-in`}
                        className={styles.Link}
                        >
                        Sign In </Link> or <Link
                        to={`/sign-up`}
                        className={styles.Link}
                        >
                        Sign Up </Link>
                        to save this project in you watch list!
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
