import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export const SubmitStory = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    region: "",
    category: "",
    story: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Thank you for sharing",
      description: "Your story helps illuminate the impact of censorship worldwide. We'll review it soon.",
      duration: 5000,
    });

    setFormData({
      name: "",
      email: "",
      region: "",
      category: "",
      story: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="submit" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Share Your <span className="text-primary">Story</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Have you or your work been affected by internet censorship? Help us document the human cost of digital barriers.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-background/50 p-8 rounded-lg border border-border">
            <div className="space-y-2">
              <Label htmlFor="name">Name or Pseudonym</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="How should we refer to you?"
                required
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email (Private)</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="bg-background"
              />
              <p className="text-xs text-muted-foreground">
                Your email will never be published or shared
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="region">Region/Country</Label>
                <Input
                  id="region"
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  placeholder="Where did this occur?"
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="e.g., Education, Healthcare, Research"
                  required
                  className="bg-background"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="story">Your Story</Label>
              <Textarea
                id="story"
                name="story"
                value={formData.story}
                onChange={handleChange}
                placeholder="Tell us about the innovation, research, or work that was blocked. What was the impact? Who was affected?"
                rows={8}
                required
                className="bg-background resize-none"
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-gradient-fire hover:shadow-glow transition-all duration-300"
            >
              <Send className="mr-2 h-4 w-4" />
              Submit Story
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
