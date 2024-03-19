import React from 'react';
import './AuthPage.css'; // Import CSS file for styling
import AuthForm from '../../../Components/AuthForm/AuthForm';

function AuthPage() {
    return (
        <div className="auth-page">
            <div className="container">
                <div className="flex-container">
                    {/* Left hand side */}
                    <div className="image-container">
                        <img src="/auth.png" alt="phone img" />
                    </div>
                    
                    {/* Right hand side login form */}
                    <div className="form-container">
                        <AuthForm />
                        <div className="get-app">
                            Get the app
                        </div>
                        <div className="store-logos">
                            <img src="/playstore.png" alt="playstore-logo" />
                            <img src="/microsoft.png" alt="microsoft-logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;
