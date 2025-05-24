import React from 'react';
import ConversationList from './components/inbox/ConversationList';
import ChatArea from './components/chat/ChatArea';
import AICopilot from './components/ai/AICopilot';
import Footer from './components/Footer';
import useChatStore from './store/chatStore';
import { Menu } from '@headlessui/react';

function App() {
  const { isAICopilotVisible } = useChatStore();
  
  return (
    <Menu as="div">
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 bg-primary-100/30 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl flex h-[80vh] w-full max-w-7xl overflow-hidden">
            <div className="w-72 flex-shrink-0">
              <ConversationList />
            </div>
            
            <ChatArea />
            
            {isAICopilotVisible && (
              <AICopilot />
            )}
          </div>
        </div>
        <Footer />
      </div>
    </Menu>
  );
}

export default App;