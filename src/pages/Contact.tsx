import { Mail, Github, Twitter, Send, Linkedin, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Let's Connect
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have questions, feedback, or just want to say hi? We're here to help and would love to hear from you.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12 animate-slide-up">
              {/* Contact Cards */}
              <a
                href="mailto:hello@instrompt.com"
                className="group p-6 rounded-lg border border-border bg-card hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Email Us</h3>
                <p className="text-sm text-muted-foreground">hello@instrompt.com</p>
              </a>

              <a
                href="https://github.com/instrompt"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-lg border border-border bg-card hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">GitHub</h3>
                <p className="text-sm text-muted-foreground">@promptity</p>
              </a>

              <a
                href="https://twitter.com/promptity"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-lg border border-border bg-card hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Twitter className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Twitter</h3>
                <p className="text-sm text-muted-foreground">@promptity</p>
              </a>
            </div>

            {/* Contact Form Section */}
            <div className="max-w-2xl mx-auto animate-fade-in">
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold">Send us a Message</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="bg-background resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold mb-1">Follow Us</h3>
                      <p className="text-sm text-muted-foreground">Stay updated with our latest prompts</p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="https://twitter.com/promptity"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                      <a
                        href="https://github.com/promptity"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      <a
                        href="https://linkedin.com/company/promptity"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
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

export default Contact;
