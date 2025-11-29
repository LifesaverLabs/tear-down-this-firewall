import { Shield, Globe, Users } from "lucide-react";

export const Mission = () => {
  const stats = [
    { icon: Shield, label: "Countries with Heavy Censorship", value: "50+" },
    { icon: Globe, label: "People Behind Firewalls", value: "2B+" },
    { icon: Users, label: "Blocked Innovators", value: "Countless" },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Why This <span className="text-primary">Matters</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Great Firewall of China and similar censorship systems worldwide create invisible barriers 
              that prevent the free exchange of ideas, knowledge, and lifesaving innovations. When researchers, 
              educators, and innovators cannot communicate freely, everyone loses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center space-y-4 p-6 rounded-lg bg-background/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              >
                <stat.icon className="w-12 h-12 mx-auto text-primary" />
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="prose prose-invert max-w-none space-y-6">
            <h3 className="text-2xl font-display font-bold text-foreground">The Impact of Censorship</h3>
            <p className="text-muted-foreground leading-relaxed">
              Projects like Lifesaver Labs Coalition's UnifySOS.org and countless other humanitarian initiatives 
              struggle to reach those who need them most. A "theory of change" (化学) cannot spread when digital 
              borders prevent communication. English for Humans, American for Humans, and emerging dialects of 
              human connection are stifled before they can take root.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              But this isn't just about one project or one country. Innovators worldwide face similar barriers—whether 
              it's medical research that could save lives, educational resources that could lift communities, or 
              technological breakthroughs that could solve global challenges. When firewalls block these exchanges, 
              they don't just limit information—they limit human potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
