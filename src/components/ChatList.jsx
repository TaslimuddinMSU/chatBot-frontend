import { useState } from "react";
import { MoreVertical } from "lucide-react";

const chatData = [
  {
    id: 1,
    name: "Bhagwad Gita",
    message: "वापसी का बदला: गीता के ज्ञान की ओर",
    date: "29/05/25",
    image: "/chat-logo.jpg",
  },
  {
    id: 2,
    name: "Khabri Media",
    message: "sent you a message!",
    date: "29/05/25",
    image: "/chat-logo.jpg",
  },
  {
    id: 3,
    name: "Quick News",
    message: "Please click the button below to see more....",
    date: "29/05/25",
    image: "/chat-logo.jpg",
  },
  {
    id: 4,
    name: "Healthy Hive",
    message:
      "🧠 Are you ready to start? Choose an option below to let me know!",
    date: "02/10/24",
    image: "/chat-logo.jpg",
  },
  {
    id: 5,
    name: "Grammar Guru",
    message: "Please select a grammar topic to begin:",
    date: "02/10/24",
    image: "/chat-logo.jpg",
  },
  {
    id: 6,
    name: "English Comprehension",
    message: "What washes away the pains?",
    date: "02/10/24",
    image: "/chat-logo.jpg",
  },
  {
    id: 7,
    name: "Khabri Media Gujrat",
    message: "sent you a message!",
    date: "02/10/24",
    image: "/chat-logo.jpg",
  },
];

const ChatList = () =>{
  return (
    <div className="w-full max-w-2xl mx-auto border-r border-gray-200 h-screen">
      {/* Header */}
      <div className="w-full bg-blue-600 text-white px-4 py-3 flex items-center gap-3">
        <h1 className="text-lg font-semibold">Chat</h1>
      </div>

      {/* Chat Items */}
      <div className="divide-y divide-gray-200">
        {chatData.map((chat) => (
          <div
            key={chat.id}
            className="flex items-start justify-between p-4 hover:bg-gray-50"
          >
            <div className="flex gap-3">
              <img
                src={chat.image}
                alt={chat.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h2 className="font-semibold text-gray-800">{chat.name}</h2>
                <p className="text-sm text-gray-600">{chat.message}</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-sm text-gray-500">{chat.date}</span>
              <button className="text-gray-500 hover:text-gray-800">
                <MoreVertical size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatList
