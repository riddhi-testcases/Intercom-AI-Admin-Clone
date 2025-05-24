import React from 'react';
import Button from '../ui/Button';
import { cn } from '../../lib/utils';
import { AIResponse } from '../../types';
import useChatStore from '../../store/chatStore';

interface AIResponseProps {
  response: AIResponse;
}

const AIResponseComponent: React.FC<AIResponseProps> = ({ response }) => {
  const { addToComposer } = useChatStore();
  
  return (
    <div className="bg-white rounded-lg mb-4 overflow-hidden animate-fade-in">
      <div className="bg-gradient-to-br from-[#e5e9ff] to-[#efceff] p-4">
        <p className="text-sm whitespace-pre-wrap mb-4">{response.content}</p>
        
        {response.sources && response.sources.length > 0 && (
          <div className="mt-4">
            <p className="text-xs text-gray-600 mb-2">
              {response.sources.length} relevant sources found
            </p>
            
            <div className="space-y-2">
              {response.sources.slice(0, 3).map((source) => (
                <div 
                  key={source.id} 
                  className="flex items-center text-sm bg-white/50 p-2 rounded-lg hover:bg-white/70 transition-colors cursor-pointer"
                >
                  <span className={cn(
                    'inline-flex items-center justify-center w-8 h-8 mr-2 rounded',
                    source.icon === 'file-text' ? 'bg-blue-100 text-blue-700' : 
                    source.icon === 'package' ? 'bg-purple-100 text-purple-700' : 
                    'bg-green-100 text-green-700'
                  )}>
                    {source.icon === 'file-text' && '📄'}
                    {source.icon === 'package' && '📦'}
                    {source.icon === 'gift' && '🎁'}
                    {source.icon === 'truck' && '🚚'}
                    {source.icon === 'globe' && '🌍'}
                    {source.icon === 'box' && '📦'}
                    {source.icon === 'book' && '📚'}
                    {source.icon === 'heart' && '❤️'}
                    {source.icon === 'user' && '👤'}
                    {source.icon === 'shield' && '🛡️'}
                    {source.icon === 'lock' && '🔒'}
                    {source.icon === 'help-circle' && '❓'}
                    {source.icon === 'mail' && '✉️'}
                  </span>
                  <div>
                    <span className="text-gray-900 font-medium">{source.title}</span>
                    {source.count && (
                      <span className="text-xs text-gray-500 ml-2">({source.count} articles)</span>
                    )}
                  </div>
                </div>
              ))}
              
              {response.sources.length > 3 && (
                <button className="text-sm text-[#006CFF] hover:text-[#0055cc] mt-1 transition-colors">
                  See all sources →
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      
      <div className="bg-white px-4 py-2 border-t border-gray-100 flex justify-end">
        <Button
          variant="secondary"
          size="sm"
          className="text-[#006CFF] hover:bg-[#006CFF]/10 transition-colors"
          onClick={() => addToComposer(response.content)}
        >
          Add to composer
        </Button>
      </div>
    </div>
  );
};

export default AIResponseComponent;