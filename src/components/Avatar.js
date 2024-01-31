import React from "react"
import styles from "../styles/Avatar.module.css"

const Avatar = ({src, height = 45, text}) => {
    return (
        <div>
            <img
            className={styles.Avatar}
            src = {src}
            height = {height}
            width = {height}
            alt="failed to load avatar"
            />
            {text}
        </div>
    )
}

export default Avatar
