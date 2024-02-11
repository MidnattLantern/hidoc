import React from "react";
import styles from "../styles/MoreDropdown.module.css";
import {
    Dropdown,
} from "react-bootstrap";

// ContextDots referenced from React-bootstrap Dropdown Component
const ContextIcon = React.forwardRef(({ onClick }, ref) => (
    <i
    className="fas fa-sliders"
    ref={ref}
    onClick={(e) => {
        e.preventDefault();
        onClick(e);
    }}
    />
));

export const MoreDropdown = ({handleEditProject, handleDeleteProject}) => {
    return (
        <Dropdown className="ml-auto" drop="left">
            <Dropdown.Toggle as={ContextIcon} />

            <Dropdown.Menu>
                <Dropdown.Item
                className={styles.DropdownItem}
                onClick={handleEditProject}
                aria-label="edit"
                >
                    <i className="fas fa-edit" /> Edit</Dropdown.Item>
                <Dropdown.Item
                className={styles.DropdownItem}
                onClick={handleDeleteProject}
                aria-label="delete"
                >
                    <i className="fas fa-trash-alt" /> Delete</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};
