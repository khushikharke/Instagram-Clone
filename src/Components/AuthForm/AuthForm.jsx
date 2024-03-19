import React, { useState } from 'react';
import './Auth.css'

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    function handleAuth() {
        if (!inputs.email || !inputs.password) {
            alert("Please fill the required fields");
            return;
        }
        // Redirect to homepage
        window.location.href = '/';
    }

    return (
        <>
            <div className="auth-container">
                <div className="auth-box">
                    <img src='/logo.png' alt="insta-logo" className="logo" />
                    <input
                        type="email"
                        placeholder="Email"
                        value={inputs.email}
                        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                        className="input-field"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={inputs.password}
                        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        className="input-field"
                    />
                    {!isLogin && (
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                            className="input-field"
                        />
                    )}
                    <button className="auth-button" onClick={handleAuth}>
                        {isLogin ? "Log in" : "Sign up"}
                    </button>

                    <div className="or-separator">
                        <span className="or-text">OR</span>
                    </div>

                    <div className="social-login">
                        <img src='/google.png' alt='googlelogo' className="google-logo" />
                        <span className="google-text">Log in with Google</span>
                    </div>

                </div>
                <div className="toggle-box">
                    <span>{isLogin ? "Don't have an account?" : "Already have an account?"}</span>
                    <span className="toggle-text" onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? "Sign up" : "Log in"}
                    </span>
                </div>

            </div>
        </>
    )
}

export default AuthForm;
