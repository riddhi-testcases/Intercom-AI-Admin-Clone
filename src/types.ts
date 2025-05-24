export interface Conversation {
  id: string;
  user: User;
  company?: string;
  subject?: string;
  message: string;
  time: string;
  timeAgo: string;
  unread: boolean;
  status?: 'open' | 'closed';
  priority?: 'high' | 'medium' | 'low';
  tags?: string[];
  isActive?: boolean;
}

export interface User {
  id: string;
  name: string;
  avatar?: string;
  isAgent?: boolean;
}

export interface Message {
  id: string;
  sender: User;
  content: string;
  timestamp: string;
  status?: 'sent' | 'delivered' | 'seen';
  attachments?: any[];
}

export interface AIResponse {
  id: string;
  content: string;
  sources?: AISource[];
}

export interface AISource {
  id: string;
  title: string;
  icon: string;
  count?: number;
}

export interface FormattingOption {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
}

export interface ToneOption {
  id: string;
  label: string;
}