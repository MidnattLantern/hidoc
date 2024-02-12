import React from "react";
import styles from "../styles/Avatar.module.css";

const Avatar = ({src, size = 60, text}) => {
    return (
        <div>
            <img
            className={styles.Avatar}
            src = {src}
            height = {size}
            width = {size}
            alt="failed to load avatar"
            />
            {text}
        </div>
    )
}

export default Avatar
