import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Lightbulb, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Build <span className="text-primary">Smarter</span> Prompts,
              <br />
              Not Longer Ones
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your professional prompt library with categorized collections for developers, 
              researchers, designers, and more.
            </p>
            <Link to="/prompts">
              <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground">
                Browse Prompts
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
              Why Promptity?
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Everything you need to master AI prompts in one place
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 animate-scale-in">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Curated Library</h3>
                <p className="text-sm text-muted-foreground">
                  Professionally crafted prompts tested by experts across industries
                </p>
              </div>

              <div className="text-center p-6 animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">One-Click Copy</h3>
                <p className="text-sm text-muted-foreground">
                  Instant access - copy any prompt and use it immediately
                </p>
              </div>

              <div className="text-center p-6 animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Organized by Role</h3>
                <p className="text-sm text-muted-foreground">
                  Find prompts tailored to your profession and use case
                </p>
              </div>

              <div className="text-center p-6 animate-scale-in" style={{ animationDelay: "0.3s" }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📖</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Learn Best Practices</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive docs to level up your prompt engineering skills
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Steps Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-card/30 border-y border-border">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
              3 Steps to Build a Great Prompt
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Master the art of prompt engineering with these fundamental principles
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 animate-slide-up">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">1. Detail</h3>
                <p className="text-muted-foreground">
                  Describe the context and background clearly. The more specific details you provide, 
                  the better the AI can understand your needs.
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">2. Clarity</h3>
                <p className="text-muted-foreground">
                  Be concise, specific, and structured. Avoid ambiguity and use clear language 
                  to communicate your expectations.
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">3. Goal</h3>
                <p className="text-muted-foreground">
                  State what you want to achieve or expect as a result. Define success criteria 
                  to guide the AI toward your desired outcome.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
              Who Uses Promptity?
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Professionals across industries rely on Promptity to work smarter with AI
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all">
                <h3 className="text-xl font-semibold text-foreground mb-3">👨‍💻 Tech Professionals</h3>
                <p className="text-muted-foreground mb-4">
                  Developers, designers, and product managers use our prompts to debug code, design systems, 
                  plan features, and optimize workflows.
                </p>
                <p className="text-sm text-primary">Code reviews • API design • UX critique • Sprint planning</p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all">
                <h3 className="text-xl font-semibold text-foreground mb-3">🎓 Academics & Researchers</h3>
                <p className="text-muted-foreground mb-4">
                  Scholars and students leverage our research prompts for literature reviews, methodology design, 
                  data analysis, and academic writing.
                </p>
                <p className="text-sm text-primary">Literature review • Data analysis • Paper writing • Research methods</p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all">
                <h3 className="text-xl font-semibold text-foreground mb-3">📝 Content Creators</h3>
                <p className="text-muted-foreground mb-4">
                  Writers, marketers, and educators craft compelling content with prompts for storytelling, 
                  SEO optimization, campaign strategy, and engagement.
                </p>
                <p className="text-sm text-primary">Story development • SEO content • Marketing copy • Course design</p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all">
                <h3 className="text-xl font-semibold text-foreground mb-3">💼 Business Leaders</h3>
                <p className="text-muted-foreground mb-4">
                  Executives and consultants use strategic prompts for analysis, decision-making, 
                  presentations, and business planning.
                </p>
                <p className="text-sm text-primary">Market analysis • Strategy • Presentations • Business plans</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-background to-card/50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Level Up Your AI Game?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join professionals who've already discovered the power of better prompts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/prompts">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Explore Prompt Library
                </Button>
              </Link>
              <Link to="/docs">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
                  Read Documentation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
