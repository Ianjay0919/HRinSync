import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(null);
    const auth = getAuth();

    const validateEmail = (inputEmail) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(inputEmail);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEmailError(null);

        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address");
            return;
        }
        
        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Password reset sent to email");
            // ..
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;            
        });

    }

    return (
        <div id='resetPassContainer'>
            <Form id='forgotPassForm' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <h3>Forgot Password</h3>
                    <Form.Label><h6>Enter your email address</h6></Form.Label><br/><br/>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                        <Form.Text id='errorMsg' className="text-muted">
                                {emailError && <span className="error">{emailError}</span>}
                        </Form.Text>
                </Form.Group>

                <Button id="resetPassBtn" type="submit">
                    Submit
                </Button><br/><br/>
                <Link id='backTologin' to={"/login"}>Back to login</Link>
            </Form>
        </div>
    )
}

export default ResetPassword;
