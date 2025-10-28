import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "sonner";

interface PromptCardProps {
  title: string;
  description: string;
  prompt: string;
}

const PromptCard = ({ title, description, prompt }: PromptCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    toast.success("Prompt copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-border bg-card">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleCopy}
          className="hover:bg-primary/10"
        >
          {copied ? (
            <Check className="h-4 w-4 text-primary" />
          ) : (
            <Copy className="h-4 w-4 text-muted-foreground" />
          )}
        </Button>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <div className="bg-muted p-4 rounded-md">
        <p className="text-sm text-foreground font-mono leading-relaxed">{prompt}</p>
      </div>
    </Card>
  );
};

export default PromptCard;
