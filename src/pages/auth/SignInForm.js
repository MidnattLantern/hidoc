import React, { useContext, useState, } from "react";
import axios from 'axios';
//import styles from "../../styles/SignInForm.module.css";
import {
    Form,
    Button,
    Alert,
  } from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";
import { SetCurrentUserContext } from "../../App";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";

function SignInForm() {
    const setCurrentUser = useContext(SetCurrentUserContext);

  //const setCurrentUser = useSetCurrentUser();

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();
  const handleSubmit = async (user_input) => {
    user_input.preventDefault();
    try {
        const {data} = await axios.post("/dj-rest-auth/login/", signInData);
        setCurrentUser(data.user)
        history.push("/");
    } catch (err) {
        setErrors(err.response?.data);
    }
  };

  const handleInput = (user_input) => {
    setSignInData({
        ...signInData,
        [user_input.target.name]: user_input.target.value,
    });
  };

    return (
        <div>
            <h1>Sign in</h1>
            <Form onSubmit={handleSubmit}>

                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={handleInput}
                    />
                </Form.Group>
                {errors.username?.map((message, idx) => (
                    <Alert key={idx} variant="warning">
                        {message}
                    </Alert>
                ))}

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInput}
                    />
                </Form.Group>
                {errors.password?.map((message, idx) => (
                    <Alert key={idx} variant="warning">
                        {message}
                    </Alert>
                ))}

                <Button type="submit">
                    Sign in
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

export default SignInForm;