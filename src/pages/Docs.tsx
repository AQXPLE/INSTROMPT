import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Docs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Documentation
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Master the art of prompt engineering with our comprehensive guide
            </p>

            <div className="space-y-8">
              <Card className="p-8 border-border bg-card">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  What is Prompt Engineering?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Prompt engineering is the practice of designing and refining input prompts to get the best 
                  possible outputs from AI language models. It's both an art and a science that combines 
                  clarity, context, and creativity.
                </p>
                <p className="text-muted-foreground">
                  A well-crafted prompt can mean the difference between a generic response and an insightful, 
                  tailored solution that perfectly addresses your needs.
                </p>
              </Card>

              <Card className="p-8 border-border bg-card">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Tone Control
                </h2>
                <p className="text-muted-foreground mb-4">
                  The tone of your prompt influences the tone of the response. Be explicit about the desired tone:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong className="text-foreground">Professional:</strong> "Explain in a professional, business-oriented tone..."</li>
                  <li><strong className="text-foreground">Casual:</strong> "Explain in a friendly, conversational way..."</li>
                  <li><strong className="text-foreground">Technical:</strong> "Provide a detailed technical explanation with jargon..."</li>
                  <li><strong className="text-foreground">Educational:</strong> "Explain as if teaching a beginner..."</li>
                </ul>
              </Card>

              <Card className="p-8 border-border bg-card">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Instruction Hierarchy
                </h2>
                <p className="text-muted-foreground mb-4">
                  Structure your prompts with clear hierarchy to guide the AI's focus:
                </p>
                <div className="bg-muted p-6 rounded-md mb-4">
                  <p className="text-sm font-mono text-foreground mb-4">
                    1. <strong>Primary Objective</strong> (What you want)<br/>
                    2. <strong>Context</strong> (Background information)<br/>
                    3. <strong>Constraints</strong> (Limitations or requirements)<br/>
                    4. <strong>Format</strong> (How you want it delivered)<br/>
                    5. <strong>Examples</strong> (Optional: Show desired output)
                  </p>
                </div>
                <p className="text-muted-foreground">
                  This hierarchy ensures the AI understands priorities and delivers results that match your expectations.
                </p>
              </Card>

              <Card className="p-8 border-border bg-card">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  AI Role Framing
                </h2>
                <p className="text-muted-foreground mb-4">
                  Assign the AI a specific role or expertise to shape its responses:
                </p>
                <div className="space-y-3 text-muted-foreground">
                  <div className="bg-muted p-4 rounded-md">
                    <p className="text-sm font-mono text-foreground">
                      "Act as a senior software architect..."
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="text-sm font-mono text-foreground">
                      "You are an experienced marketing strategist..."
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="text-sm font-mono text-foreground">
                      "Respond as if you're a patient teacher explaining to a student..."
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4">
                  Role framing helps the AI adopt the appropriate perspective, knowledge base, and communication style.
                </p>
              </Card>

              <Card className="p-8 border-border bg-card">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Common Patterns & Templates
                </h2>
                <p className="text-muted-foreground mb-4">
                  Use these proven patterns to structure effective prompts:
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">The Analysis Pattern</h3>
                    <div className="bg-muted p-4 rounded-md">
                      <p className="text-sm font-mono text-foreground">
                        Analyze [topic] considering:<br/>
                        1) [Aspect 1]<br/>
                        2) [Aspect 2]<br/>
                        3) [Aspect 3]<br/>
                        Provide insights and recommendations.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">The Problem-Solution Pattern</h3>
                    <div className="bg-muted p-4 rounded-md">
                      <p className="text-sm font-mono text-foreground">
                        Problem: [Describe issue]<br/>
                        Context: [Background]<br/>
                        Constraints: [Limitations]<br/>
                        Provide 3 solutions with pros/cons for each.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">The Iteration Pattern</h3>
                    <div className="bg-muted p-4 rounded-md">
                      <p className="text-sm font-mono text-foreground">
                        Create [output].<br/>
                        Then, improve it by [criterion].<br/>
                        Finally, optimize for [goal].
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-border bg-card">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Best Practices
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">•</span>
                    <span><strong className="text-foreground">Be specific:</strong> Vague prompts yield vague results. The more specific you are, the better.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">•</span>
                    <span><strong className="text-foreground">Use examples:</strong> Show the AI what good output looks like when possible.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">•</span>
                    <span><strong className="text-foreground">Iterate:</strong> Don't expect perfection on the first try. Refine your prompts based on results.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">•</span>
                    <span><strong className="text-foreground">Set constraints:</strong> Define length, format, style, and other parameters explicitly.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">•</span>
                    <span><strong className="text-foreground">Test variations:</strong> Try different phrasings to find what works best for your use case.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">•</span>
                    <span><strong className="text-foreground">Break down complex tasks:</strong> Split large requests into smaller, manageable steps.</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Docs;
