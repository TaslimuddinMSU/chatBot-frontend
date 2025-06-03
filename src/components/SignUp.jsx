import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const SignUpForm = () => {
    const navigate = useNavigate();
    const [formData, setformData] = useState({
        email: "",
        password: "",
        repeatPassword: ""
    });

    const [error, setError] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData((prev) => ({
            ...prev, [name]: value
        }));
    }

    console.log("SignUp data", formData);

    const validateEmail = (email) => {
        // exaple: user123@mail.com
        const regex =  /^[a-z0-9]+@[a-z0-9.]+\.[a-zA-Z]{2,}$/; 
        return regex.test(email);
    };

    const validatePassword = (password) => {
        // Minimum 8 characters, at least 1 uppercase, 1 lowercase, 1 digit, and 1 special character
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return regex.test(password);
    };

    const handleAllBots = (e) => {
        e.preventDefault();

        if (!validateEmail(formData.email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (!validatePassword(formData.password)) {
            setError(
                "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
            );
            return;
        }

        if (formData.password !== formData.repeatPassword) {
            setError("Passwords do not match.");
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

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <div className="flex items-center justify-center rounded-full mb-3">
                        <img
                            src="/chat-logo.jpg"
                            alt="ChatBot Logo"
                            className="w-[80px] h-[80px] object-cover rounded-full"
                        />
                    </div>
                    <h1 className="text-center text-2xl font-bold text-gray-900 mb-6">Sign Up to SmartChat</h1>
                    <form className="space-y-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="text-lg w-full px-4 py-2 border border-gray-300 
              rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="text-lg w-full px-4 py-2 border border-gray-300 
              rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="password"
                            name="repeatPassword"
                            placeholder="Repeat password"
                            value={formData.repeatPassword}
                            onChange={handleChange}
                            required
                            className="text-lg w-full px-4 py-2 border border-gray-300 
              rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {error && <div className="text-sm font-semibold text-red-500">{error}</div>}

                        <button
                            type="submit"
                            className="text-lg w-full bg-blue-500 hover:bg-blue-600 
              text-white font-semibold py-2 rounded-md transition duration-300"
                            onClick={handleAllBots}
                        >
                            Sign up
                        </button>
                    </form>

                    <p className="text-center font-bold text-gray-600 mt-4">
                        Already have an account?{" "}
                        <Link href="/login" className="text-blue-600 hover:underline text-lg font-bold">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;
