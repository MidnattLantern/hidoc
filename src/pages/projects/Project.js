import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

// most from the api: https://hidoc-api-80e680483d64.herokuapp.com/ across multiple sub-sections
const Project = (props) => {
    const {
        id,
        owner,
        artaccount_id,
        artaccount_image,
        //user_comments_count,
        watch_proj_id,
        watch_proj_count,
        project_title,
        project_description,
        feature_poster,
        updated_at,
        projectPage,
        setProjects,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner

    return (
        <Card>
            <h1>Hello walrus(Project.js)</h1>
            <p>owner: {owner}</p>
                <Card.Body>
                    <Avatar src={artaccount_image}/>
                    <Card.Img src={feature_poster}/>
                </Card.Body>
        </Card>
    )
}

export default Project
