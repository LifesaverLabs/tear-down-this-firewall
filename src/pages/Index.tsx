import { Hero } from "@/components/Hero";
import { VideoLitmusTest } from "@/components/VideoLitmusTest";
import { Mission } from "@/components/Mission";
import { Stories } from "@/components/Stories";
import { SubmitStory } from "@/components/SubmitStory";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <VideoLitmusTest />
      <Mission />
      <Stories />
      <SubmitStory />
      <Footer />
    </main>
  );
};

export default Index;
