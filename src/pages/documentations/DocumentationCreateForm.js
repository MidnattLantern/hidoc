import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { axiosRes } from "../../api/axiosDefaults";

function DocumentationCreateForm(props) {
//    const { project, setProject, setDocumentations, documentation_paragraph } = props;
    const { project, setProject, setDocumentations } = props;
    const [documentation_paragraph, setDocumentationParagraph] = useState("");

    const handleInput = (event) => {
        setDocumentationParagraph(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axiosRes.post('/documentations/', {
                documentation_paragraph,
                project,
            });
            setDocumentations((prevDocumentations) => ({
                ...prevDocumentations,
                results: [data, ...prevDocumentations.results],
            }));
            setProject((prevProject) => ({
                results: [
                    {
                        ...prevProject.results[0],
//                        documentations_count: prevProject.results[0].documentations_count + 1,
                    },
                ],
            }));
            setDocumentationParagraph("");
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <InputGroup>
                        <Form.Control
                        placeholder="paragraph"
                        as="textarea"
                        value={documentation_paragraph}
                        onChange={handleInput}
                        />
                    </InputGroup>
                </Form.Group>
                <button
                disabled={!documentation_paragraph.trim()}
                type="submit"
                >
                    submit
                </button>
            </Form>
        </div>
    )

}

export default DocumentationCreateForm
