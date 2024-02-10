import React, { useState } from "react";
import Button from "react-bootstrap/Button";
//import DocumentationEditForm from "./DocumentationEditForm";
import styles from "../../styles/Documentation.module.css";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";

const Documentation = (props) => {
    // mainly retrieved from API /documentations/
    const {
        id,
        owner,
        updated_at,
        documentation_title,
        documentation_paragraph,
        documentation_image,
        setProject,
        setDocumentations,
    } = props;

//    const [showEditDocumentationForm, setShowEditDocumentationForm] = useState(false);
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/documentations/${id}/`);
            setProject((prevProject) => ({
                results: [
                    {
                        ...prevProject.results[0],
//                        documentations_count: prevProject.results[0].documentations_count -1,
                    },
                ],
            }));

            setDocumentations((prevDocumentations => ({
                ...prevDocumentations,
                results: prevDocumentations.results.filter((documentation) => documentation.id !== id),
            })));
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div className={styles.DocumentationCard}>
            <p>title: {documentation_title}</p>
            <p>content: {documentation_paragraph}</p>
            <img src={documentation_image}/>
            <Button
            onClick={handleDelete}
            >
                Delete
            </Button>
        </div>
    );
};

export default Documentation