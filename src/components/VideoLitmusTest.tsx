import { AlertCircle } from "lucide-react";

export const VideoLitmusTest = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-card">
      <div className="container max-auto max-w-4xl">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-fire bg-clip-text text-transparent">
            A Moment of History
          </h2>
          <p className="text-lg text-muted-foreground">
            June 12, 1987 - President Ronald Reagan at the Brandenburg Gate
          </p>
        </div>

        <div className="aspect-video w-full rounded-lg overflow-hidden shadow-intense mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/WX00QkvK-mQ"
            title="Reagan: Tear down this wall"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

        <div className="bg-card/50 border border-border rounded-lg p-6 md:p-8 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-start gap-4 mb-4">
            <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-display font-bold mb-3 text-foreground">
                Your Internet Freedom Litmus Test
              </h3>
              <p className="text-muted-foreground mb-4">
                Your ability to see this video on this site is a single, very small litmus test of your internet freedom. If you can watch it, you have passed one test—but you need a larger battery of tests.
              </p>
              <p className="text-muted-foreground mb-4">
                Censors are clever and will sometimes let a few things through to present the appearance of internet and press freedom. Selective access creates the illusion of openness while critical information remains blocked.
              </p>
              <p className="text-sm text-accent font-semibold">
                Please note: We have no reason to believe this site can even be seen behind the Great Firewalls, at least not for any more than an instant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
