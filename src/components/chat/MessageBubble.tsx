import React from 'react';
import { cn } from '../../lib/utils';
import Avatar from '../ui/Avatar';
import { Message } from '../../types';

interface MessageBubbleProps {
  message: Message;
  isAgent?: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ 
  message,
  isAgent = false 
}) => {
  const { sender, content, timestamp, status } = message;
  
  return (
    <div className={cn(
      'flex w-full mb-4',
      isAgent ? 'justify-end' : 'justify-start'
    )}>
      {!isAgent && (
        <div className="flex-shrink-0 mr-3">
          <Avatar 
            alt={sender.name} 
            size="md" 
          />
        </div>
      )}
      
      <div className={cn(
        'max-w-[80%]',
        isAgent && 'order-1'
      )}>
        <div className={cn(
          'rounded-lg px-4 py-2 inline-block',
          isAgent 
            ? 'bg-[#e5e9ff] text-gray-800 rounded-br-none' 
            : 'bg-gray-100 text-gray-800 rounded-bl-none'
        )}>
          <p className="whitespace-pre-wrap text-[15px]">{content}</p>
        </div>
        
        <div className={cn(
          'flex items-center text-xs text-gray-500 mt-1',
          isAgent ? 'justify-end' : 'justify-start'
        )}>
          {status && isAgent && (
            <span className="mr-1.5">
              {status === 'seen' ? 'Seen · ' : ''}
            </span>
          )}
          <span>{timestamp}</span>
          
          {isAgent && (
            <div className="flex-shrink-0 ml-3">
              <Avatar 
                alt={sender.name} 
                size="sm" 
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;