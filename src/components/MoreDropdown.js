import React from "react";
import styles from "../styles/MoreDropdown.module.css";
import {
    Dropdown,
} from "react-bootstrap";

// Following code referenced from React-bootstrap Dropdown Component
const ContextDots = React.forwardRef(({ onClick }, ref) => (
    <i
    className="fas fa-ellipsis-v"
    ref={ref}
    onClick={(e) => {
        e.preventDefault();
        onClick(e);
    }}
    />
));

export const MoreDropdown = ({handleEditProject, handleDeleteProject}) => {
    return (
        <Dropdown drop="left">
            <Dropdown.Toggle as={ContextDots} />

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
