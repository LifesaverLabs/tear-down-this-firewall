import { AlertCircle } from "lucide-react";
import warAndPeaceParody from "@/assets/war-and-peace-parody.png";

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

        <div className="bg-card/50 border border-border rounded-lg p-6 md:p-8 backdrop-blur-sm animate-fade-in mt-8" style={{ animationDelay: '0.6s' }}>
          <div className="mb-4">
            <h3 className="text-2xl font-display font-bold mb-2 text-foreground">
              Mr. Xi, Tear Down this Firewall
            </h3>
            <p className="text-sm text-muted-foreground">
              House Select Committee on the CCP • July 22, 2024
            </p>
          </div>
          
          <div className="space-y-4">
            <p className="text-muted-foreground italic">
              "When General Secretary Xi Jinping was in San Francisco last fall, he declared that America and China 'must not erect barriers' between one another. He can be true to his word by tearing down the Chinese Communist Party's (CCP) Great Firewall."
            </p>
            
            <p className="text-muted-foreground">
              "The Great Firewall is a dystopian censorship regime designed to advance near-total societal control over the Chinese people. With an army of censors boosted by artificial intelligence and the assistance of cutting-edge technology, it monitors all information and expression within China, enabling the CCP to rapidly stamp out unapproved speech, while referring violations to the police."
            </p>

            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mt-6">
              <p className="text-sm text-foreground font-semibold mb-2">
                Even if you as a firewalled citizen feel the tone is too harsh and unfounded, you should have the absolute right to read it and study all the data this opinion was founded on.
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                It's important for peace. Not just on your borders, or across the Taiwan Strait, but across the world in places like Russia and Ukraine, where the war can't ever be called what it is, a war. It's a euphemistic "специальная военная операция", a "Special Military Operation" instead. Imagine if Tolstoy's great work was called "Специальная военная операция и мир", "Special Military Operation and Peace". <a href="https://search.worldcat.org/title/1528795551" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors font-semibold underline">Welcome to 1984.</a>
              </p>

              <div className="flex justify-center my-6">
                <a 
                  href="https://search.worldcat.org/title/1528795551" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block max-w-xs hover:opacity-80 transition-opacity"
                >
                  <img 
                    src={warAndPeaceParody} 
                    alt="Satirical book cover: Special Military Operation and Peace" 
                    className="w-full h-auto rounded-lg shadow-intense"
                  />
                </a>
              </div>

              <div className="bg-background/50 border border-accent/20 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground mb-3">
                  George Orwell's <em>1984</em> would be public domain today as of January 1, 2025 worldwide if it weren't for the <a href="https://web.law.duke.edu/cspd/publicdomainday/2025/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors underline">"Mickey Mouse" copyright extension</a> preventing all creative copyright works from becoming freely available worldwide 75 years after author death. Now, without a release of copyright by the royalty rights holders, we have to wait another 20 years until January 1, 2045 for <em>1984</em> to be free to all firewalled citizens struggling under Ministries of Truth.
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  Disney's interests in Mickey Mouse do not outweigh the interest in getting <em>1984</em> into the hands of all Russian and Chinese citizens for the very small cost of one-time translation. The US Congress can help: if the Select Committee on the CCP could push to reform US copyright law to help control the length of global copyright creativity paywalls and, in getting <em>1984</em> and other works translated into the public domain and over the creative fence of the Great Firewalls almost costlessly, they would advance the Tear Down This Firewall Initiative.
                </p>
              </div>

              <a 
                href="https://www.newsweek.com/mr-xi-tear-down-this-firewall-opinion-1927362"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors text-sm font-semibold underline"
              >
                Read the full editorial from Chairman Moolenaar →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
