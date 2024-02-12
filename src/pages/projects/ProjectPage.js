// singular project
import React, { useEffect, useState } from "react";
import Project from "./Project";
import { useParams } from "react-router"
import { axiosReq } from "../../api/axiosDefaults";
import { Link } from "react-router-dom";
import styles from "../../styles/ProjectPage.module.css";

import DocumentaitonCreateForm from "../documentations/DocumentationCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Documentation from "../documentations/Documentation";

function ProjectPage() {
    const { id } = useParams();
    const [project, setProject] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const [project404, setProject404] = useState(false);

    const currentUser = useCurrentUser();
    const [documentations, setDocumentations] = useState({ results: [] });

// useEffect tells Project.js what to render
    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: project }, { data: documentations }] = await Promise.all([
                    axiosReq.get(`/projects/${id}`),
                    axiosReq.get(`/documentations/?project=${id}`),

                ]);
                setProject({ results: [project] });
                setDocumentations(documentations);

                setHasLoaded(true);
            } catch (err) {
                // in case user ends up in a non existing project
                if (err.response && err.response.status === 404) {
                    console.log("404 error, this project does not exist.");
                    setProject404(true);
                }
//                console.log(err);
            }
        };

        handleMount();
    }, [id]);

    return (
        <div className={styles.ProjectPageCard}>

            {project404 === true ? (
                <>
                <p>this project does not exist</p>
                </>
            ) : (
                <>

                {hasLoaded ? (
                    <>

                        <Link className={styles.Link} to={`/`}>
                            <h2><i class="fa-solid fa-arrow-left"></i> Go back</h2>
                        </Link>
                        <div>
                        <Project {...project.results[0]} setProjects={setProject} ProjectPage />
                        </div>
                    </>
                ) : (
                    <>
                        <p>loading project...</p>
                    </>
                )}
                </>
            )}

            {documentations.results.length ? (
                documentations.results.map(documentations => (
                    <>
                        <Documentation
                        key={documentations.id}
                        {...documentations}
                        setProject={setProject}
                        setDocumentations={setDocumentations}
                        />
                    </>
                ))
            ) : (
                <></>
            )}



        </div>
    )
}
// Double Documentation snippet: after refresh/ revisit

export default ProjectPage;
