import { useState } from "react";
import { Sparkles, Copy, RefreshCw, Wand2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const PromptGenerator = () => {
  const [formData, setFormData] = useState({
    tool: "",
    goal: "",
    context: "",
    constraints: "",
    tone: ""
  });
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!formData.tool || !formData.goal) {
      toast.error("Please fill in at least the tool and goal fields");
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-prompt', {
        body: { formData }
      });

      if (error) throw error;
      
      setGeneratedPrompt(data.prompt);
      toast.success("Prompt generated successfully!");
    } catch (error) {
      console.error('Error generating prompt:', error);
      toast.error("Failed to generate prompt. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt);
    toast.success("Prompt copied to clipboard!");
  };

  const handleReset = () => {
    setFormData({
      tool: "",
      goal: "",
      context: "",
      constraints: "",
      tone: ""
    });
    setGeneratedPrompt("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Wand2 className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                AI Prompt Generator
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transform your ideas into powerful AI prompts. Fill in the details below and let our AI craft the perfect prompt for you.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 animate-slide-up">
              {/* Input Form */}
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Prompt Details
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="tool">AI Tool / Platform *</Label>
                      <Input
                        id="tool"
                        placeholder="e.g., ChatGPT, Claude, Midjourney"
                        value={formData.tool}
                        onChange={(e) => setFormData({ ...formData, tool: e.target.value })}
                        className="mt-1.5"
                      />
                    </div>

                    <div>
                      <Label htmlFor="goal">Goal / Expected Result *</Label>
                      <Textarea
                        id="goal"
                        placeholder="What do you want to achieve with this prompt?"
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        rows={3}
                        className="mt-1.5 resize-none"
                      />
                    </div>

                    <div>
                      <Label htmlFor="context">Context / Background</Label>
                      <Textarea
                        id="context"
                        placeholder="Provide any relevant background information"
                        value={formData.context}
                        onChange={(e) => setFormData({ ...formData, context: e.target.value })}
                        rows={3}
                        className="mt-1.5 resize-none"
                      />
                    </div>

                    <div>
                      <Label htmlFor="constraints">Constraints / Requirements</Label>
                      <Input
                        id="constraints"
                        placeholder="e.g., word limit, specific format"
                        value={formData.constraints}
                        onChange={(e) => setFormData({ ...formData, constraints: e.target.value })}
                        className="mt-1.5"
                      />
                    </div>

                    <div>
                      <Label htmlFor="tone">Tone / Style</Label>
                      <Input
                        id="tone"
                        placeholder="e.g., professional, casual, creative"
                        value={formData.tone}
                        onChange={(e) => setFormData({ ...formData, tone: e.target.value })}
                        className="mt-1.5"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <Button 
                      onClick={handleGenerate} 
                      disabled={isLoading}
                      className="flex-1"
                      size="lg"
                    >
                      {isLoading ? (
                        <>
                          <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-4 w-4" />
                          Generate Prompt
                        </>
                      )}
                    </Button>
                    <Button 
                      onClick={handleReset} 
                      variant="outline"
                      size="lg"
                    >
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Generated Output */}
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">Generated Prompt</h2>
                    {generatedPrompt && (
                      <Button
                        onClick={handleCopy}
                        variant="ghost"
                        size="sm"
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                    )}
                  </div>
                  
                  <div className="flex-1 bg-background rounded-lg p-4 border border-border min-h-[400px]">
                    {generatedPrompt ? (
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">
                        {generatedPrompt}
                      </p>
                    ) : (
                      <div className="h-full flex items-center justify-center text-center">
                        <div className="space-y-3">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                            <Wand2 className="h-6 w-6 text-primary" />
                          </div>
                          <p className="text-muted-foreground">
                            Your generated prompt will appear here
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PromptGenerator;
