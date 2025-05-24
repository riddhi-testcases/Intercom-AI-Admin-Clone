import React, { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import MessageComposer from './MessageComposer';
import ChatHeader from './ChatHeader';
import useChatStore from '../../store/chatStore';

const ChatArea: React.FC = () => {
  const { messages, activeConversation } = useChatStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  if (!activeConversation) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">Select a conversation to start chatting</p>
      </div>
    );
  }
  
  const conversationMessages = messages[activeConversation.id] || [];
  
  return (
    <div className="flex flex-col h-full flex-1 bg-white">
      <ChatHeader title={activeConversation.user.name} />
      
      <div className="flex-1 overflow-y-auto p-4">
        {conversationMessages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            isAgent={message.sender.isAgent}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <MessageComposer />
    </div>
  );
};

export default ChatArea;