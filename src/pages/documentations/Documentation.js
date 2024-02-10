import React, { useState } from "react";
import DocumentationEditForm from "./DocumentationEditForm";
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
        documentaiton_paragraph,
        documentation_image,
        setProject,
        setDocumentations,
    } = props;

    const [showDocumentationForm, setShowDocumentationForm] = useState(false);
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/documentations/${id}`);
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
                results: prevDocumentations.results.filter((Documentation) => Documentation.id !== id),
            })));
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div className={styles.DocumentationCard}>
            {showDocumentationForm ? (
                <>
                <p>true</p>
                </>
            ) : (
                <>
                    <p>false</p>
                    <p>{documentaiton_paragraph}</p>
                </>
            )}

        </div>
    );
};

export default Documentation