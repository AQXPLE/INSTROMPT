import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Ensure dark mode is applied by default
    if (!document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.add('dark');
    }
    setIsDark(true);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/prompts", label: "Prompts" },
    { to: "/generate", label: "Generate" },
    { to: "/docs", label: "Docs" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/40 backdrop-blur-2xl border-b border-border/30 shadow-2xl shadow-primary/10 z-50 before:absolute before:inset-0 before:bg-gradient-to-b before:from-background/60 before:to-transparent before:-z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-foreground hover:text-primary transition-colors">
            <img src="/logo.svg" alt="Instrompt Logo" className="w-8 h-8" />
            Instrompt
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.to}
                to={link.to} 
                className={`text-sm transition-colors ${
                  isActive(link.to) ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={`text-base transition-colors py-2 ${
                        isActive(link.to) 
                          ? 'text-primary font-medium border-l-2 border-primary pl-4' 
                          : 'text-muted-foreground hover:text-foreground pl-4'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
