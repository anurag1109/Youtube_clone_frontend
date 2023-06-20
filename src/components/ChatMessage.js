import React from "react";
import { FaUserCircle } from "react-icons/fa";

function ChatMessage() {
  return (
    <div className="px-4 py-3 flex gap-3 items-center">
      <FaUserCircle />
      <span>Anurag</span>
    </div>
  );
}

export default ChatMessage;
