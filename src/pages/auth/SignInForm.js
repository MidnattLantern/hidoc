import React, { useState, } from "react";
import axios from 'axios';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import { useHistory } from "react-router-dom";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/SignInForm.module.css";
import { useRedirect } from "../../hooks/useRedirect";
import { setTokenTimeStamp } from "../../utils/utils";

function SignInForm() {
  const setCurrentUser = useSetCurrentUser();
  useRedirect('loggedIn')

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      setTokenTimeStamp(data);
      history.goBack();
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const handleInput = (userInput) => {
    setSignInData({
        ...signInData,
        [userInput.target.name]: userInput.target.value,
    });
  };

    return (
        <div className={styles.SignInCard}>
            <h1>Sign in</h1>
            <Form onSubmit={handleSubmit}
            className={styles.FormGroup}>

                <Form.Group controlId="username"
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

                <Form.Group controlId="password"
                className={styles.FormControl}
                >
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
                    <Alert
                    key={idx}
                    variant="warning"
                    className={styles.FormControl}
                    >
                        {message}
                    </Alert>
                ))}

                <Button
                type="submit"
                className={styles.Button}
                >
                    Sign in
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

export default SignInForm;