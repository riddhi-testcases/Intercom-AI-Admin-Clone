import React from 'react';
import { MoreHorizontal, Clock, Phone, Archive as Archive2, X } from 'lucide-react';
import useChatStore from '../../store/chatStore';

interface ChatHeaderProps {
  title: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ title }) => {
  const { toggleAICopilot } = useChatStore();
  
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-white">
      <div className="flex items-center space-x-3">
        <h2 className="text-base font-medium text-gray-900">{title}</h2>
        <button 
          className="p-1.5 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="More options"
        >
          <MoreHorizontal className="w-4 h-4 text-gray-600" />
        </button>
        <button 
          className="p-1.5 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Archive"
        >
          <Archive2 className="w-4 h-4 text-gray-600" />
        </button>
      </div>
      
      <div className="flex items-center space-x-2">
        <button 
          className="flex items-center px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
          aria-label="Call"
        >
          <Phone className="w-4 h-4" />
        </button>
        <button 
          className="flex items-center px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
          aria-label="Snooze"
        >
          <Clock className="w-4 h-4" />
        </button>
        <button 
          className="px-3 py-1.5 text-sm font-medium text-white bg-black rounded-md hover:bg-black/90 transition-colors flex items-center gap-1"
        >
          <X className="w-4 h-4" />
          Close
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;