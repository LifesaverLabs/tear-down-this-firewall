import { ExternalLink } from "lucide-react";

export const Footer = () => {
  const resources = [
    {
      title: "Freedom House",
      url: "https://freedomhouse.org/",
      description: "Internet Freedom Reports"
    },
    {
      title: "Electronic Frontier Foundation",
      url: "https://www.eff.org/",
      description: "Digital Rights Advocacy"
    },
    {
      title: "Reporters Without Borders",
      url: "https://rsf.org/",
      description: "Press Freedom Index"
    },
    {
      title: "Access Now",
      url: "https://www.accessnow.org/",
      description: "Digital Rights Protection"
    },
  ];

  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h3 className="font-display text-2xl font-bold">
              Resources & Organizations
            </h3>
            <p className="text-muted-foreground">
              Learn more about internet freedom and censorship worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-2">
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      {resource.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {resource.description}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </div>
              </a>
            ))}
          </div>

          <div className="text-center pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Every voice matters. Every story counts. Together, we can build a more open internet.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
