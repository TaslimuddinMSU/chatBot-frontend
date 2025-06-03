import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const validateEmail = (email) => {
        // exaple: user123@mail.com

        const regex =  /^[a-z0-9]+@[a-z0-9.]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        // Minimum 8 characters, at least 1 uppercase, 1 lowercase, 1 digit, and 1 special character eg: Strong@123
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return regex.test(password);
    };

    const handleNavigation = (e) => {
        e.preventDefault();

        if (!validateEmail(formData.email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (!validatePassword(formData.password)) {
            setError("Password must be at least 8 characters, with uppercase, lowercase, number, and special character.");
            return;
        }

        setError("");
        navigate("/chat-box");
    };

    return (
        <div
            className="relative min-h-screen bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/register-bg.jpg')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

            {/* Form Container */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <div className="flex items-center justify-center rounded-full mb-3">
                        <img
                            src="/chat-logo.jpg"
                            alt="ChatBot Logo"
                            className="w-[80px] h-[80px] object-cover rounded-full"
                        />
                    </div>
                    <h1 className="text-center text-2xl font-bold text-gray-900 mb-6">Login to SmartChat</h1>

                    <form className="space-y-4" onSubmit={handleNavigation}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={formData.email}
                            required
                            onChange={handleChange}
                            className="text-lg w-full px-4 py-2 border border-gray-300 rounded-md 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            required
                            onChange={handleChange}
                            placeholder="Password"
                            className="text-lg w-full px-4 py-2 border border-gray-300 rounded-md 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {error && (
                            <div className="text-sm font-semibold text-red-500">{error}</div>
                        )}

                        <button
                            type="submit"
                            className="text-lg w-full bg-blue-500 hover:bg-blue-600 text-white 
              font-semibold py-2 rounded-md transition duration-300"
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-center font-bold text-gray-600 mt-4">
                        Don’t have an account?{" "}
                        <Link to="/signup" className="text-blue-600 hover:underline text-lg font-bold">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
