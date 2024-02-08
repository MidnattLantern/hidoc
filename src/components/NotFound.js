import React from "react";
import NotFoundImage from "../../src/assets/HiDoc-notfound.png";
import styles from "../../src/styles/NotFound.module.css";
import Image from "react-bootstrap/Image";

function NotFound() {

    return (
        <div
        className={styles.NotFoundCard}
        >
            <Image
            src={NotFoundImage}
            className={styles.NotFoundImage}
            />
        </div>
    )
}

export default NotFound
