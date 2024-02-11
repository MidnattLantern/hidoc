import React, { useState, useRef, useEffect } from "react";
import {
    Form,
    Button,
    Row,
    Col,
    Container,
    Image,
} from "react-bootstrap";
//import Upload from "../../assets/upload.png";
//import Asset from "../../components/Asset";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import { useParams } from "react-router";
import Alert from "react-bootstrap/Alert";

import styles from "../../styles/ProjectEdit.module.css";

function ProjectEditForm() {
    const [errors, setErrors] = useState({});
//    const [setErrors] = useState({});
    const [projectData, setProjectData] = useState({
        project_title: "",
        project_description: "",
        feature_poster: "",
        deployed_link: "",
    });
    const { project_title, project_description, feature_poster, deployed_link } = projectData;
    const posterInput = useRef(null);
    const history = useHistory();
    const {id} = useParams();
     useEffect(() => {
        const handleMount = async () => {
            try {
                const {data} = await axiosReq.get(`/projects/${id}/`)
                // here, the edit form won't be blank
                const {project_title, project_description, feature_poster, deployed_link, is_owner,} = data;
                // here, the edit form is visible if is_owner is true
                is_owner ? setProjectData({project_title, project_description, feature_poster, deployed_link}) : history.push('/')
            } catch(err) {
                console.log(err);
            }
        };

        handleMount();
     }, [history, id]);

    const handleInput = (userInput) => {
        setProjectData({
            ...projectData,
            [userInput.target.name]: userInput.target.value,
        });
    };

    const handleChangePoster = (userInput) => {
        if (userInput.target.files.length){
            URL.revokeObjectURL(feature_poster);
            setProjectData({
                ...projectData,
                feature_poster: URL.createObjectURL(userInput.target.files[0]),
            })
        }
    };


    const handleSubmit = async (userInput) => {
        userInput.preventDefault()
        const formData = new FormData();

        formData.append('project_title', project_title)
        formData.append('project_description', project_description)

        // unlike create, this additional code will prevent error message
        if (posterInput?.current?.files[0]) {
           formData.append('feature_poster', posterInput.current.files[0])
        }

        formData.append('deployed_link', deployed_link)

        if (userInput?.current?.files[0]){
            formData.append('feature_poster', posterInput.current.files[0])
        }

        try {
            await axiosReq.put(`/projects/${id}/`, formData);
            history.push(`/projects/${id}`)
        } catch(err){
            console.log(err)
            if (err.response?.status !== 401) {
                setErrors(err.response?.data)
            }
        }
    }

    const textFields = (
        <div>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                type="title"
                placeholder=""
                name="project_title"
                value={project_title}
                onChange={handleInput}
                />
            </Form.Group>
            {errors?.project_title?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                as="textarea"
                placeholder=""
                rows={8}
                name="project_description"
                value={project_description}
                onChange={handleInput}
                />
            </Form.Group>
            {errors?.project_description?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Deployed link</Form.Label>
                <Form.Control
                as="textarea"
                placeholder="Optional, this can be changed at any time"
                rows={1}
                name="deployed_link"
                value={deployed_link}
                onChange={handleInput}
                />
            </Form.Group>
            {errors?.deployed_link?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Button
            className={styles.DiscardButton}
            onClick={() => history.goBack()}
            >
                    Discard
            </Button>
            <Button
            className={styles.Button}
            type="submit"
            >
                Save changes
            </Button>
        </div>
    );

    return (
            <Form onSubmit={handleSubmit}>
                <Row className={styles.WindowCard}>
                    <Col>
                        <Container>
                            <Form.Group >
                                {feature_poster ? (
                                    <>
                                        <figure>
                                            <Image
                                            className={styles.UploadBorder}
                                            src={feature_poster} />
                                        </figure>
                                    </>
                                ) : (
                                    <></>
                                )}

                                <Form.File
                                id="image-upload"
                                accept="image/*"
                                onChange={handleChangePoster}
                                ref={posterInput}
                                />

                            </Form.Group>
                            {errors?.feature_poster?.map((message, idx) => (
                                <Alert variant="warning" key={idx}>
                                    {message}
                                </Alert>
                            ))}


                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <div>
                                {textFields}
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Form>
    );
}
// Note about `<div className="d-md-none">`: this is the 'invisible duplicate'
// <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">

export default ProjectEditForm;
