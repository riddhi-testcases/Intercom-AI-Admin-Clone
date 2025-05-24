import React from 'react';
import { cn } from '../../lib/utils';
import Avatar from '../ui/Avatar';
import { truncateText } from '../../lib/utils';
import { Conversation } from '../../types';
import { CheckCircle2, Star } from 'lucide-react';

interface ConversationItemProps {
  conversation: Conversation;
  isActive?: boolean;
  onClick: () => void;
}

const ConversationItem: React.FC<ConversationItemProps> = ({
  conversation,
  isActive = false,
  onClick,
}) => {
  const { user, company, subject, message, timeAgo, unread, priority } = conversation;
  
  return (
    <div
      className={cn(
        'flex p-3 border-b border-ui-divider hover:bg-gray-50 cursor-pointer transition-colors',
        isActive && 'bg-primary-50',
        unread && 'bg-blue-50/30'
      )}
      onClick={onClick}
    >
      <div className="flex-shrink-0 mr-3">
        <Avatar 
          alt={user.name} 
          size="md"
          status={isActive ? 'online' : undefined}
        />
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-sm font-medium text-gray-900">
            <span>{user.name}</span>
            {company && (
              <>
                <span className="text-gray-500">·</span>
                <span className="text-gray-500">{company}</span>
              </>
            )}
          </div>
          
          <div className="flex items-center">
            {priority === 'high' && (
              <Star className="w-4 h-4 text-yellow-500 mr-1.5" />
            )}
            <span className="text-xs text-gray-500">{timeAgo}</span>
          </div>
        </div>
        
        {subject && (
          <div className="text-sm font-medium text-gray-800">
            {subject}
          </div>
        )}
        
        <p className={cn(
          'text-sm',
          unread ? 'font-medium text-gray-900' : 'text-gray-600'
        )}>
          {truncateText(message, 60)}
        </p>
      </div>
    </div>
  );
};

export default ConversationItem;