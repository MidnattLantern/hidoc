import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
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

  const SignUpForm = () => {
    const [signUpData, setSignUpData,] = useState({
        username: "",
        password: "",
        password_confirm: "",
    });
    const { username, password, password_confirm,} = signUpData;

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
            history.push('/signin');
        } catch (err) {
            setErrors(err.response?.data);
        }
    };

    return (
        <div>
            <h1>Sign up</h1>
            <Form OnSubmit={handleSubmit}>

                <Form.Group controlId="username">
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
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder=""
                    name="password"
                    value={password}
                    onChange={handleInput}
                    />
                </Form.Group>
                {errors.password?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}

                <Form.Group controlId="password_confirm">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder=""
                    name="password_confirm"
                    value={password_confirm}
                    onChange={handleInput}
                    />
                </Form.Group>
                {errors.password_confirm?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}

                <Button
                type="submit"
                >
                    Sign up
                </Button>
                {errors.non_field_errors?.map((message, idx) => (
                    <Alert key={idx} variant="warning">
                        {message}
                    </Alert>
                ))}

            </Form>
        </div>
    )
};

export default SignUpForm;