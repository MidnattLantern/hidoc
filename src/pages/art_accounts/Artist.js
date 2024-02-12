import React from 'react';
import { Link } from "react-router-dom";

const Artist = (props) => {
    const {art_account} = props
    const {id, owner} = art_account

    return (
        <div>
            <Link to={`/artist-page/${id}`}>
                <p>{owner}</p>
            </Link>
        </div>
    )
}

export default Artist
