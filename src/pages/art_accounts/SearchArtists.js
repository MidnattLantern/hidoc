import React, { useEffect, useState } from "react";
import {
    Form,
//    Container,
} from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Asset from "../../components/Asset";
import Artist from "./Artist";
import { useAccountData } from "../../contexts/AccountDataContext";
import style from "../../styles/ProjectsPage.module.css"

//const PopularArtAccounts = () => {
const SearchArtists = () => {
    const { popularArtists } = useAccountData();

    return (
        <div>
            <Form
            className={style.SearchBar}
            >
                <Form.Control
                type="text"
                placeholder="search artists"
                />
            </Form>

            {popularArtists?.results?.length ? (
                <>
                    {popularArtists?.results?.map((art_account) => (
                        <>
                            <Artist key={art_account.id} art_account={art_account} mobile />
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

export default SearchArtists
