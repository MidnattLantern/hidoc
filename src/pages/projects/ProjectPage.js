// singular project
import React, { useEffect, useState } from "react";
import Project from "./Project";
import { useParams } from "react-router"
import { axiosReq } from "../../api/axiosDefaults";
import { Link } from "react-router-dom";
import styles from "../../styles/ProjectPage.module.css";


function ProjectPage() {
    const { id } = useParams();
    const [project, setProject] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);

// useEffect tells Project.js what to render
    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: project }] = await Promise.all([
                    axiosReq.get(`/projects/${id}`),

                ]);
                setProject({ results: [project] });
                setHasLoaded(true);
                console.log(project);
            } catch (err) {
                console.log(err);
            }
        };

        handleMount();
    }, [id]);

    return (
        <div className={styles.ProjectPageCard}>
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



        </div>
    )
}

export default ProjectPage;
