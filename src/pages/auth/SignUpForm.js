import React, { useState } from "react";
//import { Link, useHistory } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
//import styles from "../../styles/SignUpForm.module.css";
import {
    Form,
    Button,
    //Image,
    //Col,
    //Row,
    //Container,
    Alert,
  } from "react-bootstrap";
  import axios from 'axios';
  import styles from "../../styles/SignUpForm.module.css";

  const SignUpForm = () => {
    const [signUpData, setSignUpData,] = useState({
        username: "",
        password1: "",
        password2: "",
    });
    const { username, password1, password2,} = signUpData;

    const [errors, setErrors] = useState({});
    
    const history = useHistory();

    const handleInput = (user_input) => {
        setSignUpData({
            ...signUpData,
            [user_input.target.name]: user_input.target.value,
        });
    };

    const handleSubmit = async (user_input) => {
        user_input.preventDefault();
        try {
            await axios.post('/dj-rest-auth/registration/', signUpData);
            history.push('/sign-in');
        } catch (err) {
            setErrors(err.response?.data);
        }
    };

    return (
        <div className={styles.SignUpCard}>
            <h1>Sign up</h1>
            <Form onSubmit={handleSubmit}
            className={styles.FormGroup}>

                <Form.Group
                controlId="username"
                className={styles.FormControl}
                >
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder=""
                    name="username"
                    value={username}
                    onChange={handleInput}
                    />
                </Form.Group>
                {errors.username?.map((message, idx) => (
                    <Alert
                    variant="warning"
                    key={idx}
                    className={styles.FormControl}
                    >
                        {message}
                    </Alert>
                ))}

                <Form.Group
                controlId="password1"
                className={styles.FormControl}
                >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder=""
                    name="password1"
                    value={password1}
                    onChange={handleInput}
                    />
                </Form.Group>
                {errors.password1?.map((message, idx) => (
                    <Alert
                    variant="warning"
                    key={idx}
                    className={styles.FormControl}
                    >
                        {message}
                    </Alert>
                ))}

                <Form.Group
                controlId="password2"
                className={styles.FormControl}
                >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder=""
                    name="password2"
                    value={password2}
                    onChange={handleInput}
                    />
                </Form.Group>
                {errors.password2?.map((message, idx) => (
                    <Alert
                    variant="warning"
                    key={idx}
                    className={styles.FormControl}
                    >
                        {message}
                    </Alert>
                ))}

                <Button
                type="submit"
                className={styles.Button}
                >
                    Sign up
                </Button>
                {errors.non_field_errors?.map((message, idx) => (
                    <Alert
                    key={idx}
                    variant="warning"
                    className={styles.FormControl}
                    >
                        {message}
                    </Alert>
                ))}

            </Form>
        </div>
    )
};

export default SignUpForm;