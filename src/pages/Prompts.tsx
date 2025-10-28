import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Code, GraduationCap, PenTool, TrendingUp, Palette, BookOpen, BarChart, Layers, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories } from "@/data/prompts";

const iconMap = {
  Code: Code,
  GraduationCap: GraduationCap,
  PenTool: PenTool,
  TrendingUp: TrendingUp,
  Palette: Palette,
  BookOpen: BookOpen,
  BarChart: BarChart,
  Layers: Layers,
  Briefcase: Briefcase,
};

const Prompts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Prompt Library
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore curated prompts organized by profession and use case
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map((category) => {
              const Icon = iconMap[category.icon as keyof typeof iconMap];
              return (
                <Link key={category.id} to={`/prompts/${category.id}`}>
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-primary border-border bg-card cursor-pointer">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {category.description}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      {category.prompts.length} prompts →
                    </p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Prompts;
