import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const PopularArtAccounts = () => {
    const [artistData, setArtistData] = useState({
        pageArtist: { results: [] },
        popularArtists: { results: [] },
    });
    const { popularArtists } = artistData;
    const currentUser = useCurrentUser();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const {data} = await axiosReq.get(
                    '/art-accounts/?ordering=-watchers_art_count'
                );
                setArtistData(prevState => ({
                    ...prevState,
                    popularArtists: data,
                }));
            } catch(err){
                console.log(err)
            }
        };

        handleMount()
    }, [currentUser]);

    return (
        <div>
            <h1>
                Search artists view
            </h1>
            <p>Filtered by most followed artists. Other filter options comming soon.</p>
        </div>
    )
}

export default PopularArtAccounts
