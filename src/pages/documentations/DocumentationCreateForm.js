// Future feature
import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../../styles/DocumentationCreateForm.module.css"

import { axiosRes } from "../../api/axiosDefaults";

function DocumentationCreateForm(props) {
    const { project, setProject, setDocumentations } = props;
    const [documentation_paragraph, setDocumentationParagraph] = useState("");
    // null is compatible with image
    const [documentation_image, setDocumentationImage] = useState(null);


    const handleParagraphInput = (event) => {
        setDocumentationParagraph(event.target.value);
    };

    const handleImageInput = (event) => {
        const selectedImage = event.target.files[0];
      
        if (selectedImage) {
          const cleanDocumentationImage = JSON.parse(
            JSON.stringify(setDocumentationImage, (key, value) => {
              if (key === 'documentation_image') {
                return undefined;
              }
              return value;
            })
          );
      
          // Set the new documentationImage, including the selected image
          setDocumentationImage({
            ...cleanDocumentationImage,
            documentation_image: URL.createObjectURL(selectedImage),
          });
        }
      };

    const handleSubmit = async (userInput) => {
        userInput.preventDefault();
        try {
            const { data } = await axiosRes.post('/documentations/', {
                documentation_paragraph,
//future feature                documentation_image,
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
                    },
                ],
            }));
            setDocumentationParagraph("");
        } catch (err) {
//            console.log(err)
        }
    };

    const isDocumentationEmpty = !documentation_paragraph.trim();

    return (
        <div className={styles.DocumentationCreateFormCard}>
            <p>Add documentation</p>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <InputGroup>
                        <Form.Control
                        placeholder="paragraph"
                        as="textarea"
                        value={documentation_paragraph}
                        onChange={handleParagraphInput}
                        />
                    </InputGroup>
                </Form.Group>

                <Button
                className={`${styles.Button} ${isDocumentationEmpty ? styles.Button : ''}`}
                disabled={isDocumentationEmpty}
                type="submit"
                >
                    Submit
                </Button>
            </Form>
        </div>
    )

}

export default DocumentationCreateForm
