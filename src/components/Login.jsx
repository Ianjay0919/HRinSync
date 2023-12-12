import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from './Images/HRInSync Solutions.png'; 
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    const navigate = useNavigate();

    const validateEmail = (inputEmail) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(inputEmail);
    };

    const validatePassword = (inputPassword) => {
        // Add your password constraints here (e.g., minimum length)
        return inputPassword.length >= 6;
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setEmailError(null);
        setPasswordError(null);


        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address");
            return;
        }

        if (!validatePassword(password)) {
            setPasswordError("Password must be at least 6 characters long");
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            navigate("/dashboard");
        } catch (error) {
            alert("Email/password invalid.");
        }    
    }

  return (
    <div id='loginContainer'>
        <div className='col-12' id='linkContainer2'>
        <div id='linkContainer3'>
                <a href="/"><i class='bx bxs-home-alt-2'></i></a>            
            </div>          
            </div>
        <Form className='loginForm' onSubmit={handleSubmit}>
            <div id='logoContainer'>
                <img id='logoHRIS' src={logo} alt="logo" />
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label id='formInput'>Email</Form.Label>
                    <Form.Control 
                        id='formInput' 
                        type="email" 
                        placeholder="Enter email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                        <Form.Text id='errorMsg' className="text-muted">
                                {emailError && <span className="error">{emailError}</span>}
                        </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label id='formLabel'>Password</Form.Label>
                    <Form.Control 
                        id='formInput' 
                        type={showPassword ? "text" : "password"}
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                        <Form.Text className="text-muted">
                            {passwordError && <span id='errorMsg' className="error">{passwordError}</span>}
                        </Form.Text>
            </Form.Group>
                    <div>
                        <label for="check" className="checkBox">
                        <input type="checkbox" id="check" value={showPassword}
                    onChange={() =>
                        setShowPassword((prev) => !prev)
                    }/> Show password </label>
                    </div>
                   <Button id='submitBtn' type="submit">
                        Submit
                    </Button><br/><br/>
            <div id='linkContainer'>
                <Link id='resetPass' to={"/resetPassword"}> Forgot Password? </Link>            
            </div>
        </Form>    
    </div>
  )
}

export default Login;
