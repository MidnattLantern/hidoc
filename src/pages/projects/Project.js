import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";

// most from the api: https://hidoc-api-80e680483d64.herokuapp.com/ across multiple sub-sections
const Project = (props) => {
    const {
        id,
        owner,
        project_title,
        project_description,
        feature_poster,
        updated_at,
        setProjects,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner

    const handleWatchProject = async () => {
        try {
            const {data} = await axiosRes.post('/watch-projects/', {post:id})
            setProjects((prevProjects) => ({
                ...prevProjects,
                results: prevProjects.results.map((post) => {
                    return post.id === id
                    ? {...post, watch_proj_count: post.watch_proj_count +1, watch_proj_id: data.id}
                    : post;
                }),
            }));
        } catch(err){
            console.log(err);
        }
    };

    return (
        <Card>
            <h1>Project: {project_title}</h1>
            <Link to={`/artist-page/${id}`}>Artist: {owner}</Link>
            <p>Latest update: {updated_at}</p>
            <Card.Body>
                <Card.Img src={feature_poster}/>
            </Card.Body>
            <p>{project_description}</p>

            <div>
                {is_owner ? (
                    <div>
                        <p> Document paragraph (comming soon) </p>
                        <p> Document image (comming soon )</p>
                    </div>
                ) : currentUser ? (
                    <div onClick={handleWatchProject}>
                        <p>
                        <i className="fa-solid fa-eye" /> Watch project
                        </p>
                        <p>
                            Comment
                        </p>
                    </div>
                ) : (
                    <div>
                        <p>
                        <i className="fa-solid fa-eye" /> Caught you interest? <Link to={`/sign-in`}>Sign In</Link> or <Link to={`/sign-up`}>Sign Up</Link> to save this project in you watch list!
                        </p>
                    </div>
                )}
            </div>
        </Card>
    )
}

export default Project
