import { Conversation, Message, User } from '../types';

export const currentUser: User = {
  id: 'agent-1',
  name: 'Sarah Miller',
  avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
  isAgent: true
};

export const conversations: Conversation[] = [
  {
    id: 'conv-1',
    user: {
      id: 'luis-1',
      name: 'Luis Easton',
    },
    company: 'Github',
    message: 'Hey! I have a question about my recent purchase.',
    time: '11:45 AM',
    timeAgo: '45m',
    unread: false,
    isActive: true
  },
  {
    id: 'conv-2',
    user: {
      id: 'ivan-1',
      name: 'Ivan',
    },
    company: 'Nike',
    message: 'Hi there, I have a question about my order.',
    time: '11:30 AM',
    timeAgo: '50m',
    unread: true,
    priority: 'high',
    status: 'open'
  },
  {
    id: 'conv-3',
    user: {
      id: 'lead-1',
      name: 'Lead from New York',
    },
    message: 'Good morning, let me know about your product.',
    time: '11:20 AM',
    timeAgo: '40m',
    unread: false
  },
  {
    id: 'conv-4',
    user: {
      id: 'bug-1',
      name: 'Luis',
    },
    company: 'Small Crafts',
    subject: 'Booking API problems',
    message: 'Bug report',
    time: '11:15 AM',
    timeAgo: '45m',
    unread: false
  },
  {
    id: 'conv-5',
    user: {
      id: 'miracle-1',
      name: 'Miracle',
    },
    company: 'Exemplary Bank',
    message: 'Hey there, I\'m here to inquire about...',
    time: '11:10 AM',
    timeAgo: '45m',
    unread: false
  }
];

export const activeConversation: Message[] = [
  {
    id: 'msg-1',
    sender: {
      id: 'luis-1',
      name: 'Luis Easton'
    },
    content: 'I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping you\'d be able to refund me, as it is un-opened.',
    timestamp: '1min',
    status: 'seen'
  },
  {
    id: 'msg-2',
    sender: currentUser,
    content: 'Let me just look into this for you, Luis.',
    timestamp: '1min',
    status: 'seen'
  }
];

export const aiSuggestions = [
  { id: 'sug-1', title: 'How do I get a refund?' }
];

export const formattingOptions = [
  { id: 'bold', label: 'Bold', icon: 'bold' },
  { id: 'italic', label: 'Italic', icon: 'italic' },
  { id: 'code', label: 'Code', icon: 'code' },
  { id: 'link', label: 'Link', icon: 'link' },
  { id: 'h1', label: 'Heading 1', icon: 'heading-1' },
  { id: 'h2', label: 'Heading 2', icon: 'heading-2' },
  { id: 'upload', label: 'Upload', icon: 'upload' }
];

export const toneOptions = [
  { id: 'tone', label: 'My tone of voice' },
  { id: 'friendly', label: 'More friendly' },
  { id: 'formal', label: 'More formal' },
  { id: 'grammar', label: 'Fix grammar & spelling' },
  { id: 'translate', label: 'Translate...' }
];

export const relevantSources = [
  { id: '1', title: 'Getting a refund', icon: 'file-text', count: 15 },
  { id: '2', title: 'Refund for an order placed by mistake', icon: 'package' },
  { id: '3', title: 'Refund for an unwanted gift', icon: 'gift' },
];