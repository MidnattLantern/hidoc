// Future feature
import React, { useEffect, useState } from "react";
import {
    Form,
} from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Artist from "./Artist";
import style from "../../styles/ProjectsPage.module.css";

const SearchArtAccounts = () => {


    const [ artAccountData, setArtAccountData ] = useState([]);

//    const { findArtAccounts } = useAccountData();
//    const [hasLoaded, setHasLoaded] = useState(false);
    const [ setHasLoaded] = useState(false);
    const currentUser = useCurrentUser();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const {data} = await axiosReq.get('/art-accounts/');
                setArtAccountData(prev => ({ ...prev, data}));
                setHasLoaded(true);
            } catch (err) {
//                console.log(err)
            }
        };

        handleMount();
    }, [currentUser, setHasLoaded]);

    return (
        <>
            <Form
            className={style.SearchBar}
            >
                <Form.Control
                type="text"
                placeholder="search artists"
                />
            </Form>



            {artAccountData.length ? (
                <>
                    {artAccountData?.map((art_account) => (
                        <>
                            <Artist key={art_account.id} art_account={art_account} mobile />
                        </>
                    ))}
                </>
            ) : (
                <>
                    <p>failed to load</p>
                </>
            ) }
        </>
    )
}

export default SearchArtAccounts
