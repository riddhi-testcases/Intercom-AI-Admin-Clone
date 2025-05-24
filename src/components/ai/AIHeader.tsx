import React from 'react';
import Button from '../ui/Button';
import { cn } from '../../lib/utils';

interface AIHeaderProps {
  isActive: boolean;
  onToggle: () => void;
}

const AIHeader: React.FC<AIHeaderProps> = ({ isActive, onToggle }) => {
  return (
    <div className="border-b border-ui-divider">
      <div className="flex border-b">
        <button
          className={cn(
            'flex-1 py-3 text-center text-sm font-medium border-b-2 transition-colors',
            isActive 
              ? 'border-primary-600 text-primary-600' 
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          )}
          onClick={onToggle}
        >
          AI Copilot
        </button>
        
        <button
          className={cn(
            'flex-1 py-3 text-center text-sm font-medium border-b-2 transition-colors',
            !isActive 
              ? 'border-primary-600 text-primary-600' 
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          )}
          onClick={onToggle}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default AIHeader;