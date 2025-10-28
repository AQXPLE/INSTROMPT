import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PromptCard from "@/components/PromptCard";
import { categories } from "@/data/prompts";

const CategoryPrompts = () => {
  const { categoryId } = useParams();
  const category = categories.find(cat => cat.id === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Category not found</h1>
          <Link to="/prompts">
            <Button variant="outline">Back to Categories</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <Link to="/prompts">
            <Button variant="ghost" className="mb-6 group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Categories
            </Button>
          </Link>

          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              {category.name}
            </h1>
            <p className="text-lg text-muted-foreground">
              {category.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {category.prompts.map((prompt) => (
              <PromptCard
                key={prompt.id}
                title={prompt.title}
                description={prompt.description}
                prompt={prompt.prompt}
              />
            ))}
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPrompts;
