import React from "react";
import ChatMessage from "./ChatMessage";

function LiveChat() {
  return (
    <div className="w-full h-[500px] ml-4 mt-2 mr-20  bo bg-gray-200 rounded-lg">
      <div className="py-3 px-5 border-b border-gray-400">Live Chat</div>
      <ChatMessage />
    </div>
  );
}

export default LiveChat;
