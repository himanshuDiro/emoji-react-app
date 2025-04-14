
import React, { useState } from 'react';
import EmojiOption from './EmojiOption';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export interface MoodOption {
  emoji: string;
  label: string;
  color: string;
  value: string;
}

export interface EmojiScaleProps {
  options?: MoodOption[];
  onSelection?: (value: string) => void;
  title?: string;
  question?: string;
  submitLabel?: string;
}

const defaultOptions: MoodOption[] = [
  { emoji: "😢", label: "Terrible", color: "#E76D6D", value: "terrible" },
  { emoji: "😔", label: "Bad", color: "#F5A95E", value: "bad" },
  { emoji: "😐", label: "Alright", color: "#8B94FF", value: "alright" },
  { emoji: "🙂", label: "Pretty Good", color: "#7CD8F7", value: "pretty_good" },
  { emoji: "😁", label: "Fantastic", color: "#7CAF9E", value: "fantastic" }
];

const EmojiScale: React.FC<EmojiScaleProps> = ({
  options = defaultOptions,
  onSelection,
  title = "Wellbeing Check-in",
  question = "Hello! How are you feeling today?",
  submitLabel = "Continue"
}) => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const { toast } = useToast();

  const handleMoodSelect = (value: string) => {
    setSelectedMood(value);
  };

  const handleSubmit = () => {
    if (selectedMood) {
      if (onSelection) {
        onSelection(selectedMood);
      }
      
      toast({
        title: "Mood Recorded",
        description: `Your mood "${options.find(o => o.value === selectedMood)?.label}" has been recorded.`,
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl mx-auto overflow-hidden animate-scale-in">
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <button 
            className="text-gray-400 hover:text-gray-600"
            aria-label="Go back"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left">
              <path d="m12 19-7-7 7-7"/>
              <path d="M19 12H5"/>
            </svg>
          </button>
          <h2 className="text-2xl font-bold text-center flex-1">{title}</h2>
          <button 
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center mb-10">
          <p className="text-xl text-gray-700 mb-10">{question}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {options.map((option, index) => (
              <EmojiOption
                key={option.value}
                emoji={option.emoji}
                label={option.label}
                color={option.color}
                selected={selectedMood === option.value}
                onClick={() => handleMoodSelect(option.value)}
                testId={`emoji-option-${option.value}`}
              />
            ))}
          </div>
        </div>

        <Button 
          onClick={handleSubmit}
          disabled={!selectedMood}
          className="w-full py-6 text-lg bg-blue-400 hover:bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          data-testid="emoji-scale-submit"
        >
          {submitLabel}
        </Button>
      </div>
    </div>
  );
};

export default EmojiScale;
