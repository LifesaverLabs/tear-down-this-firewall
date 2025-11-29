import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const storySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  region: z.string().trim().min(1, "Region is required").max(100, "Region must be less than 100 characters"),
  category: z.string().trim().min(1, "Category is required").max(100, "Category must be less than 100 characters"),
  story: z.string().trim().min(50, "Story must be at least 50 characters").max(5000, "Story must be less than 5000 characters"),
});

export const SubmitStory = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    region: "",
    category: "",
    story: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = storySchema.parse(formData);

      // Submit to database
      const { error } = await supabase
        .from('story_submissions')
        .insert([{
          name: validatedData.name,
          email: validatedData.email,
          region: validatedData.region,
          category: validatedData.category,
          story: validatedData.story,
        }]);

      if (error) throw error;

      toast({
        title: "Thank you for sharing",
        description: "Your story helps illuminate the impact of censorship worldwide. We'll review it soon.",
        duration: 5000,
      });

      // Clear form
      setFormData({
        name: "",
        email: "",
        region: "",
        category: "",
        story: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast({
          title: "Validation Error",
          description: "Please check the form for errors.",
          variant: "destructive",
        });
      } else {
        console.error('Error submitting story:', error);
        toast({
          title: "Submission Failed",
          description: "There was an error submitting your story. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
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
                disabled={isSubmitting}
              />
              {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
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
                disabled={isSubmitting}
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
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
                  disabled={isSubmitting}
                />
                {errors.region && <p className="text-sm text-destructive">{errors.region}</p>}
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
                  disabled={isSubmitting}
                />
                {errors.category && <p className="text-sm text-destructive">{errors.category}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="story">Your Story (minimum 50 characters)</Label>
              <Textarea
                id="story"
                name="story"
                value={formData.story}
                onChange={handleChange}
                placeholder="Tell us about the innovation, research, or work that was blocked. What was the impact? Who was affected?"
                rows={8}
                required
                className="bg-background resize-none"
                disabled={isSubmitting}
              />
              {errors.story && <p className="text-sm text-destructive">{errors.story}</p>}
              <p className="text-xs text-muted-foreground">
                {formData.story.length} / 5000 characters
              </p>
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-gradient-fire hover:shadow-glow transition-all duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Submit Story
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
