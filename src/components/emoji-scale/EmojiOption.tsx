
import React from 'react';
import { cn } from '@/lib/utils';

export interface EmojiOptionProps {
  emoji: string;
  label: string;
  color: string;
  selected: boolean;
  onClick: () => void;
  testId?: string;
}

const EmojiOption: React.FC<EmojiOptionProps> = ({
  emoji,
  label,
  color,
  selected,
  onClick,
  testId
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center p-4 rounded-xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2",
        selected ? "animate-bounce-scale" : ""
      )}
      data-testid={testId}
      aria-label={`Select ${label} mood`}
      aria-pressed={selected}
    >
      <div 
        className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center mb-2 transition-all",
          selected ? "ring-4 ring-offset-2" : ""
        )}
        style={{ backgroundColor: color }}
      >
        <span className="text-3xl" role="img" aria-label={label}>
          {emoji}
        </span>
      </div>
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};

export default EmojiOption;
