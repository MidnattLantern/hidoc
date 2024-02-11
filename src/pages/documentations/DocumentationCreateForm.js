import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
//import Image from "react-bootstrap/Image";

import { axiosRes } from "../../api/axiosDefaults";

function DocumentationCreateForm(props) {
//    const { project, setProject, setDocumentations, documentation_paragraph } = props;
    const { project, setProject, setDocumentations } = props;
    const [documentation_paragraph, setDocumentationParagraph] = useState("");
    //test null is compatible with image
    const [documentation_image, setDocumentationImage] = useState(null);


    const handleParagraphInput = (event) => {
        setDocumentationParagraph(event.target.value);
    };

    // test
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
                        onChange={handleParagraphInput}
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