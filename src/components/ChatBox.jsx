import React, { useState } from 'react';
import NavBar from './NavBar';
import { Send } from 'lucide-react';

const ChatBox = () => {
  const [userMessage, setUserMessage] = useState('');
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    setUserMessage(inputMessage);
    setInputMessage('');
  };

  return (
    <div
      className="h-screen w-screen flex flex-col"
      style={{
        backgroundImage: "url('/chat-bg.svg')",
        backgroundRepeat: 'repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Fixed NavBar */}
      <div className="shrink-0">
        <NavBar />
      </div>

      {/* Scrollable messages area */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden flex justify-center">
        <div className="w-full sm:w-full md:w-[80%] lg:w-[70%] px-4 py-6 relative">
          <div className="absolute bottom-5 w-full px-4 space-y-4">
            {/* Left aligned message */}
            <div className="flex justify-start">
              <div className="bg-gray-100 px-4 py-2 rounded-md max-w-[75%]">
                <h2 className="text-xl font-semibold text-gray-800">Hi</h2>
              </div>
            </div>

            {/* Right aligned user message */}
            {userMessage && (
              <div className="flex justify-end">
                <div className="bg-blue-600 px-4 py-2 rounded-md max-w-[75%] mr-7">
                  <h2 className="text-xl font-semibold text-white">{userMessage}</h2>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Message input area */}
      <div className="shrink-0 w-full flex justify-center px-4 py-2 bg-white border-t border-gray-300">
        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-full md:w-[80%] lg:w-[70%] flex rounded-md justify-center items-center 
          border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-3"
        >
          <input
            type="text"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="w-full p-3 rounded-md border-none focus:outline-none"
          />
          <Send className="w-8 h-8 text-blue-600 cursor-pointer" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
