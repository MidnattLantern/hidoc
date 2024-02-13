import React, { useState, useRef } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Upload from "../../assets/upload.png";
import Asset from "../../components/Asset";
import Alert from "react-bootstrap/Alert";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

import styles from "../../styles/ProjectCreate.module.css";

function ProjectCreateForm() {
    useRedirect("loggedOut");
    const [errors, setErrors] = useState({});
    const [projectData, setProjectData] = useState({
        project_title: "",
        project_description: "",
        feature_poster: "",
        deployed_link: "",
    });
    const { project_title, project_description, feature_poster, deployed_link } = projectData;
    const posterInput = useRef(null);
    const history = useHistory();

    const handleInput = (userInput) => {
        setProjectData({
            ...projectData,
            [userInput.target.name]: userInput.target.value,
        });
    };

    // rename to handleChangePoster
    const handleChangeImage = (userInput) => {
        if (userInput.target.files.length){
            URL.revokeObjectURL(feature_poster);
            setProjectData({
                ...projectData,
                feature_poster: URL.createObjectURL(userInput.target.files[0]),
            });
        }
    };

    const handleSubmit = async (userInput) => {
        userInput.preventDefault();
        const formData = new FormData();

        formData.append('project_title', project_title);
        formData.append('project_description', project_description);
        formData.append('feature_poster', posterInput.current.files[0]);
        formData.append('deployed_link', deployed_link);

        try {
            const {data} = await axiosReq.post('/projects/', formData);
            history.push(`/projects/${data.id}`);
        } catch(err){
//            console.log(err)
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

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
                placeholder="This can be changed at any time"
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
                Create project
            </Button>
        </div>
    );

    return (
            <Form onSubmit={handleSubmit}>
                <Row className={styles.ProjectCreateFormCard}>
                    <Col>
                        <Container>
                            <Form.Group>
                                {feature_poster ? (
                                    <>
                                        <figure>
                                            <Image
                                            className={styles.UploadBorder}
                                            src={feature_poster} />
                                        </figure>
                                        <div>
                                            <Form.Label
                                            htmlFor="image-upload"
                                            >
                                                Change Poster
                                            </Form.Label>
                                        </div>
                                    </>
                                ) : (
                                    <Form.Label
                                    htmlFor="image-upload"
                                    className={styles.UploadBorder}
                                    >
                                        <Asset
                                        src={Upload}
                                        message="JPG or PNG, max 1 MB" />
                                    </Form.Label>
                                )}
                                <Form.File
                                id="image-upload"
                                accept="image/*"
                                onChange={handleChangeImage}
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

export default ProjectCreateForm;
