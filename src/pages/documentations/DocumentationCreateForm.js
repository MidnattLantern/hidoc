import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../../styles/DocumentationCreateForm.module.css";
import { axiosRes } from "../../api/axiosDefaults";

function DocumentaitonCreateForm(props) {
    // consider renaming setDocumentations
    const {
        project,
        setProject,
        setDocumentations,
    } = props;
    const [documentaiton_paragraph, set_documentation_paragraph] = useState("");

    const handleUserInput = (event) => {
        set_documentation_paragraph(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axiosRes.post("/documentations/", {
                documentaiton_paragraph,
                project,
            });
            setDocumentations((prevDocumentations) => ({
                ...prevDocumentations,
                resuls: [data, ...prevDocumentations.reults],
            }));
            setDocumentations((prevDocumentations) => ({
                results: [
                    {
                        ...prevDocumentations.reults[0],
//                        documentations_count: prevDocumentations.results[0].documentations_count + 1,
                    },
                ],
            }));
            set_documentation_paragraph("");
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div className={styles.DocumentaitonCreateFormCard}>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <InputGroup>
                    <Form.Control
                    placeholder="paragraph"
                    as="textarea"
                    value={documentaiton_paragraph}
                    onChange={handleUserInput}
                    rows={7}
                    />
                    </InputGroup>
                </Form.Group>
                <button
                disabled={!documentaiton_paragraph.trim()}
                type="submit"
                >
                    Post
                </button>
            </Form>
        </div>

    );
}

export default DocumentaitonCreateForm;
