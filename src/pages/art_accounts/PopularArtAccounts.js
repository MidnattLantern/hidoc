import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Asset from "../../components/Asset";
import Artist from "./Artist";
import { useAccountData } from "../../contexts/AccountDataContext";

const PopularArtAccounts = () => {
    const { popularArtists } = useAccountData();

    return (
        <div>
            <h1>
                Search artists view
            </h1>

            {popularArtists.results.length ? (
                <>
                    {popularArtists.results.map((art_acc) => (
                        <>
                            <Artist key={art_acc.id} art_acc={art_acc} mobile />
                        </>
                    ))}
                </>
            ) : (
                <>
                    <p>loading...</p>
                </>
            ) }



        </div>
    )
}

export default PopularArtAccounts
