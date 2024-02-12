// Future feature
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import styles from "../../styles/Documentation.module.css";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";

const Documentation = (props) => {
    // setProject and setDocumentation prevent appearing on all projects
    const {
        id,
        owner,
        documentation_paragraph,
//future feature        documentation_image,
        setProject,
        setDocumentations,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const handleDeleteDocumentation = async () => {
        try {
            await axiosRes.delete(`/documentations/${id}/`);
            setProject((prevProject) => ({
                results: [
                    {
                        ...prevProject.results[0],
                    },
                ],
            }));

            // after deletion, the array is updated
            setDocumentations((prevDocumentations => ({
                ...prevDocumentations,
                results: prevDocumentations.results.filter((documentation) => documentation.id !== id),
            })));
        } catch (err) {
//            console.log(err)
        }
    };

    return (
        <div className={styles.DocumentationCard}>
            <p>content: {documentation_paragraph}</p>

            {is_owner ? (
                <>
                    <Button
                onClick={handleDeleteDocumentation}>
                Owner's Delete
            </Button>
                </>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Documentation