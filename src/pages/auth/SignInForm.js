import React, { useState } from "react";
//import axios from 'axios';
//import styles from "../../styles/SignInForm.module.css";
import {
    Form,
    Button,
  } from "react-bootstrap";

function SignInForm() {
  

    return (
        <div>
            <h1>Sign in</h1>
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
                name="password"
                />

                <Button>
                    Sign in
                </Button>

            </Form>
        </div>
    )
};

export default SignInForm;