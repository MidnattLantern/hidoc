import React, { useState } from "react";
//import styles from "../../styles/SignUpForm.module.css";
import {
    Form,
    Button,
  } from "react-bootstrap";

  const SignUpForm = () => {
    return (
        <div>
            <h1>Sign up</h1>
            <Form>

                <Form.Label>Username</Form.Label>
                <Form.Control
                type="text"
                placeholder=""
                name="Username"
                />

                <Form.Label>Password</Form.Label>
                <Form.Control
                type="password"
                placeholder=""
                name="password1"
                />

                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                type="password"
                placeholder=""
                name="password2"
                />

                <Button>
                    Sign in
                </Button>

            </Form>
        </div>
    )
};

export default SignUpForm;