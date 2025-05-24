import { create } from 'zustand';
import { conversations } from '../data/mockData';
import { AIResponse, Conversation, Message } from '../types';
import { generateAIResponse, getRelevantSources } from '../lib/utils';

interface ChatState {
  conversations: Conversation[];
  activeConversation: Conversation | null;
  messages: { [key: string]: Message[] };
  aiResponses: AIResponse[];
  messageInput: string;
  isTyping: boolean;
  aiSuggestion: string | null;
  isAICopilotVisible: boolean;
  
  setActiveConversation: (id: string) => void;
  setMessageInput: (input: string) => void;
  sendMessage: (content: string) => void;
  generateAIResponse: (query: string) => void;
  addToComposer: (content: string) => void;
  toggleAICopilot: () => void;
  askAIQuestion: (question: string) => void;
}

const useChatStore = create<ChatState>((set, get) => ({
  conversations,
  activeConversation: conversations[0],
  messages: {
    'conv-1': [
      {
        id: 'msg-1',
        sender: { id: 'luis-1', name: 'Luis Easton' },
        content: 'Hey! I have a question about my recent purchase.',
        timestamp: '1min',
        status: 'seen'
      }
    ],
    'conv-2': [
      {
        id: 'msg-2',
        sender: { id: 'ivan-1', name: 'Ivan' },
        content: 'Hi there, I have a question about my order.',
        timestamp: '2min',
        status: 'seen'
      }
    ],
    'conv-3': [
      {
        id: 'msg-3',
        sender: { id: 'lead-1', name: 'Lead from New York' },
        content: 'Good morning, let me know about your product.',
        timestamp: '3min',
        status: 'seen'
      }
    ],
    'conv-4': [
      {
        id: 'msg-4',
        sender: { id: 'bug-1', name: 'Luis' },
        content: 'Bug report',
        timestamp: '4min',
        status: 'seen'
      }
    ],
    'conv-5': [
      {
        id: 'msg-5',
        sender: { id: 'miracle-1', name: 'Miracle' },
        content: "Hey there, I'm here to inquire about...",
        timestamp: '5min',
        status: 'seen'
      }
    ]
  },
  aiResponses: [],
  messageInput: '',
  isTyping: false,
  aiSuggestion: null,
  isAICopilotVisible: true,
  
  setActiveConversation: (id: string) => {
    const conversation = conversations.find(c => c.id === id);
    if (conversation) {
      set({ activeConversation: conversation });
    }
  },
  
  setMessageInput: (input: string) => {
    set({ messageInput: input });
  },
  
  sendMessage: (content: string) => {
    if (!content.trim() || !get().activeConversation) return;
    
    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      sender: {
        id: 'agent-1',
        name: 'Sarah Miller',
        isAgent: true
      },
      content,
      timestamp: 'just now',
      status: 'sent'
    };
    
    const conversationId = get().activeConversation.id;
    const currentMessages = get().messages[conversationId] || [];
    
    set(state => ({
      messages: {
        ...state.messages,
        [conversationId]: [...currentMessages, newMessage]
      },
      messageInput: ''
    }));
  },
  
  generateAIResponse: (query: string) => {
    const responseContent = generateAIResponse(query);
    const sources = getRelevantSources(query);
    
    const aiResponse: AIResponse = {
      id: `ai-${Date.now()}`,
      content: responseContent,
      sources
    };
    
    set(state => ({ 
      aiResponses: [aiResponse, ...state.aiResponses]
    }));
  },
  
  addToComposer: (content: string) => {
    set({ messageInput: content });
  },
  
  toggleAICopilot: () => {
    set(state => ({ isAICopilotVisible: !state.isAICopilotVisible }));
  },
  
  askAIQuestion: (question: string) => {
    set({ aiSuggestion: question });
    get().generateAIResponse(question);
  }
}));

export default useChatStore;