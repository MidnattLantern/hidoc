import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
//import styles from "../../styles/SignUpForm.module.css";
import {
    Form,
    Button,
    //Image,
    Col,
    //Row,
    //Container,
    Alert,
  } from "react-bootstrap";
  import axios from 'axios';

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
        <div>
            <Col md={6}>
            <h1>Sign up</h1>
            <Form onSubmit={handleSubmit}>

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

                <Form.Group controlId="password1">
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
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}

                <Form.Group controlId="password2">
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
            </Col>
        </div>
    )
};

export default SignUpForm;