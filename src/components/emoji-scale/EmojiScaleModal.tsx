
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EmojiScale, { MoodOption } from './EmojiScale';

export interface EmojiScaleModalProps {
  options?: MoodOption[];
  onSelection?: (value: string) => void;
  title?: string;
  question?: string;
  submitLabel?: string;
  triggerLabel?: string;
}

const EmojiScaleModal: React.FC<EmojiScaleModalProps> = ({
  options,
  onSelection,
  title,
  question,
  submitLabel,
  triggerLabel = "Open Wellbeing Check-in"
}) => {
  const [open, setOpen] = useState(false);

  const handleSelection = (value: string) => {
    if (onSelection) {
      onSelection(value);
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-purple-600 hover:bg-purple-700">
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] md:max-w-[700px] p-0">
        <EmojiScale
          options={options}
          onSelection={handleSelection}
          title={title}
          question={question}
          submitLabel={submitLabel}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EmojiScaleModal;
