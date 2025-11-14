import { Link } from "react-router-dom";
import { Github, Mail, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer role="contentinfo" className="bg-card/50 backdrop-blur-lg border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-primary">Promptity</h3>
            <p className="text-muted-foreground text-sm">
              A space for better words and sharper thoughts.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/prompts" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Prompts
              </Link>
              <Link to="/generate" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Generate
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">Resources</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/docs" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Documentation
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Visit our GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="mailto:contact@promptity.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email us"
                title="Email"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Promptity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
