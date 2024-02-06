import React from 'react';
import styles from '../../styles/Artist.module.css';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Link } from "react-router-dom";
import Avatar from '../../components/Avatar'

const Artist = (props) => {
    const {art_acc, mobile, imageSize=50} = props
    const {id, owner} = art_acc
    const currentUser = useCurrentUser
    // "username" might be wrong
    const is_owner = currentUser?.username === owner;

    return (
        <div>
            <Link to={`/artist-page/${id}`}>
                <p>{owner}</p>
            </Link>
        </div>
    )
}

export default Artist
