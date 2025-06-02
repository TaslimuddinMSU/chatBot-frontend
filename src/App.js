import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./components/Login";
import SignUpForm from "./components/SignUp";
import ChatList from "./components/ChatList";
import ChatBox from "./components/ChatBox";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/all-bots" element={<ChatList />} />
        <Route path="/chat-box" element={<ChatBox /> }/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
