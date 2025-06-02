import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/chat-box")
    }
    return (
        <div
            className="relative min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/register-bg.jpg')" }}
        >
            {/* Overlay */}
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

                    <form className="space-y-4">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="text-lg w-full px-4 py-2 border border-gray-300 rounded-md 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="text-lg w-full px-4 py-2 border border-gray-300 rounded-md 
                            focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <button
                            type="submit"
                            className="text-lg w-full bg-blue-500 hover:bg-blue-600 text-white 
                            font-semibold py-2 rounded-md transition duration-300"
                            onClick={handleNavigation}
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-center font-bold text-gray-600 mt-4">
                        Don’t have an account?{" "}
                        <a href="/signup" className="text-blue-600 hover:underline text-lg font-bold">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
