import React, { useState } from 'react';
import { Smile, Zap, Bookmark, ChevronDown } from 'lucide-react';
import useChatStore from '../../store/chatStore';
import { Menu } from '@headlessui/react';

const MessageComposer: React.FC = () => {
  const { messageInput, setMessageInput, sendMessage } = useChatStore();
  const [showToneOptions, setShowToneOptions] = useState(false);
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (messageInput.trim()) {
        sendMessage(messageInput);
      }
    }
  };

  const formatText = (format: string) => {
    const textarea = document.querySelector('textarea');
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = messageInput.substring(start, end);

    let formattedText = '';
    switch (format) {
      case 'B':
        formattedText = `**${selectedText}**`;
        break;
      case 'i':
        formattedText = `_${selectedText}_`;
        break;
      case 'code':
        formattedText = `\`${selectedText}\``;
        break;
      case 'H1':
        formattedText = `# ${selectedText}`;
        break;
      case 'H2':
        formattedText = `## ${selectedText}`;
        break;
    }

    const newText = messageInput.substring(0, start) + formattedText + messageInput.substring(end);
    setMessageInput(newText);
  };
  
  return (
    <div className="border-t border-gray-200 bg-white">
      <div className="flex items-center px-4 py-2 border-b border-gray-200">
        <Menu as="div" className="relative">
          <Menu.Button className="p-1.5 rounded hover:bg-gray-100 transition-colors flex items-center gap-1 text-gray-600">
            <span>Chat</span>
            <ChevronDown className="w-4 h-4" />
          </Menu.Button>
          <Menu.Items className="absolute bottom-full left-0 mb-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-10">
            <Menu.Item>
  {({ active }) => (
    <button className={`${active ? 'bg-gray-50' : ''} w-full text-left px-4 py-2 text-sm text-gray-700`}>
      Rephrase
    </button>
  )}
</Menu.Item>
<Menu.Item>
  {({ active }) => (
    <button className={`${active ? 'bg-gray-50' : ''} w-full text-left px-4 py-2 text-sm text-gray-700`}>
      My tone of voice
    </button>
  )}
</Menu.Item>
<Menu.Item>
  {({ active }) => (
    <button className={`${active ? 'bg-gray-50' : ''} w-full text-left px-4 py-2 text-sm text-gray-700`}>
      More friendly
    </button>
  )}
</Menu.Item>
<Menu.Item>
  {({ active }) => (
    <button className={`${active ? 'bg-gray-50' : ''} w-full text-left px-4 py-2 text-sm text-gray-700`}>
      More formal
    </button>
  )}
</Menu.Item>
<Menu.Item>
  {({ active }) => (
    <button className={`${active ? 'bg-gray-50' : ''} w-full text-left px-4 py-2 text-sm text-gray-700`}>
      Fix grammar & spelling
    </button>
  )}
</Menu.Item>
<Menu.Item>
  {({ active }) => (
    <button className={`${active ? 'bg-gray-50' : ''} w-full text-left px-4 py-2 text-sm text-gray-700`}>
      Translate...
    </button>
  )}
</Menu.Item>

          </Menu.Items>
        </Menu>
      </div>

      <div className="px-4 py-2 border-b border-gray-200 flex items-center space-x-2">
        <button onClick={() => formatText('B')} className="p-1.5 hover:bg-gray-100 rounded font-medium">B</button>
        <button onClick={() => formatText('i')} className="p-1.5 hover:bg-gray-100 rounded italic">i</button>
        <button onClick={() => formatText('code')} className="p-1.5 hover:bg-gray-100 rounded font-mono text-sm">{`</>`}</button>
        <button className="p-1.5 hover:bg-gray-100 rounded">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </button>
        <button onClick={() => formatText('H1')} className="p-1.5 hover:bg-gray-100 rounded font-medium">H1</button>
        <button onClick={() => formatText('H2')} className="p-1.5 hover:bg-gray-100 rounded font-medium">H2</button>
        <button className="p-1.5 hover:bg-gray-100 rounded">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
        </button>
      </div>

      {showToneOptions && (
        <div className="px-4 py-2 border-b border-gray-200">
          <div className="bg-gray-50 rounded-lg p-2 space-y-2">
            <button className="w-full text-left px-2 py-1.5 hover:bg-white rounded">My tone of voice</button>
            <button className="w-full text-left px-2 py-1.5 hover:bg-white rounded">More friendly</button>
            <button className="w-full text-left px-2 py-1.5 hover:bg-white rounded">More formal</button>
            <button className="w-full text-left px-2 py-1.5 hover:bg-white rounded">Fix grammar & spelling</button>
            <button className="w-full text-left px-2 py-1.5 hover:bg-white rounded">Translate...</button>
          </div>
        </div>
      )}
      
      <div className="px-4 py-3">
        <textarea
          className="w-full min-h-[100px] p-3 text-[15px] border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Type your message..."
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <button className="p-1.5 rounded hover:bg-gray-100 transition-colors">
              <Zap className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-1.5 rounded hover:bg-gray-100 transition-colors">
              <Bookmark className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-1.5 rounded hover:bg-gray-100 transition-colors">
              <Smile className="w-5 h-5 text-gray-600" />
            </button>
            <span className="text-xs text-gray-500 ml-2">
              Use <kbd className="px-1.5 py-0.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-300 rounded">⌘K</kbd> for shortcuts
            </span>
          </div>
          
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center px-3 py-1.5 text-sm font-medium text-black bg-white hover:bg-black hover:text-white transition-colors rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed">
              Send
              <ChevronDown className="w-4 h-4 ml-1" />
            </Menu.Button>
            <Menu.Items className="absolute bottom-full right-0 mb-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-10">
              <Menu.Item>
                {({ active }) => (
                  <button className={`${active ? 'bg-gray-50' : ''} w-full text-left px-4 py-2 text-sm text-gray-700`}>
                    Send and close
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button className={`${active ? 'bg-gray-50' : ''} w-full text-left px-4 py-2 text-sm text-gray-700`}>
                    Schedule send
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default MessageComposer;