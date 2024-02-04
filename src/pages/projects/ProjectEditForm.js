import React, { useState, useRef, useEffect } from "react";
import {
    Form,
    Button,
    Row,
    Col,
    Container,
    Image,
} from "react-bootstrap";
import Upload from "../../assets/upload.png";
import Asset from "../../components/Asset";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import { useParams } from "react-router";

import styles from "../../styles/ProjectCRUD.module.css";

function ProjectEditForm() {
    const [errors, setErrors] = useState({});
    const [projectData, setProjectData] = useState({
        project_title: "",
        project_description: "",
        feature_poster: "",
    });
    const { project_title, project_description, feature_poster } = projectData;
    const posterInput = useRef(null);
    const history = useHistory();
    const {id} = useParams();
     useEffect(() => {
        const handleMount = async () => {
            try {
                const {data} = await axiosReq.get(`/projects/${id}/`)
                const {project_title, project_description, feature_poster, is_owner,} = data;
                // edit form is visible if is_owner is true
                is_owner ? setProjectData({project_title, project_description, feature_poster}) : history.push('/')
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

    const handleChangeImage = (userInput) => {
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
                type="text"
                name="project_title"
                value={project_title}
                onChange={handleInput}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                as="textarea"
                rows={8}
                name="project_description"
                value={project_description}
                onChange={handleInput}
                />
            </Form.Group>
            <Button
            onClick={() => history.goBack()}
            >
                    Discard
            </Button>
            <Button
            type="submit"
            >
                Save changes
            </Button>
        </div>
    );

    return (
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Container>
                            <Form.Group className={styles.borderTest} >
                                {feature_poster ? (
                                    <>
                                        <figure>
                                            <Image src={feature_poster} />
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
                                    >
                                        <Asset
                                        src={Upload}
                                        message="Upload JPG or PNG" />
                                    </Form.Label>
                                )}
                                <Form.File
                                id="image-upload"
                                accept="image/*"
                                onChange={handleChangeImage}
                                ref={posterInput}
                                />
                            </Form.Group>
                            <div className="d-md-none">
                                {textFields}
                            </div>
                        </Container>
                    </Col>
                    <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                        <Container>{textFields}</Container>
                    </Col>
                </Row>
            </Form>
    );
}

export default ProjectEditForm;
