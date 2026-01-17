import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Story = {
  title: string;
  region: string;
  category: string;
  description: string | ReactNode;
  impact: string;
};

const stories: Story[] = [
  {
    title: "Lifesaver Labs Coalition",
    region: "Global",
    category: "Humanitarian",
    description: "UnifySOS.org and critical life-saving projects face blockage from reaching Chinese students, researchers, and citizens who could benefit from and contribute to these initiatives. This especially applies when Lifesaver Labs advocates for universal suffrage for all sufferers. The transfer of 'theory of change' concepts and the exchange of emerging communication dialects are severely limited.",
    impact: "Millions of potential collaborators and beneficiaries unreached",
  },
  {
    title: "Medical Research Collaboration",
    region: "China & Iran",
    category: "Healthcare",
    description: "Leading cancer researchers in China unable to access critical papers and collaborate with international teams. Time-sensitive breakthroughs delayed by months or years due to restricted access to research platforms and communication tools.",
    impact: "Treatment delays affecting thousands of patients",
  },
  {
    title: "Open Educational Resources",
    region: "China, Vietnam, Iran",
    category: "Education",
    description: "Free online courses, textbooks, and learning platforms blocked from reaching students in multiple countries. Universities unable to access international research databases and collaborative tools essential for modern education.",
    impact: "Generation of students cut off from world-class education",
  },
  {
    title: "Climate Change Data Sharing",
    region: "Global South",
    category: "Environment",
    description: "Environmental scientists prevented from sharing crucial climate data and coordinating responses to regional crises. Real-time weather and disaster prediction systems unable to reach affected populations.",
    impact: "Lives at risk during environmental emergencies",
  },
  {
    title: "Open Source Software Development",
    region: "China & Russia",
    category: "Technology",
    description: "Developers unable to contribute to critical open-source projects. GitHub, Stack Overflow, and other collaborative platforms intermittently blocked, fragmenting the global developer community.",
    impact: "Innovation slowed, security vulnerabilities unpatched",
  },
  {
    title: "Human Rights Documentation",
    region: "Multiple Countries",
    category: "Justice",
    description: "Journalists and activists prevented from sharing evidence of human rights violations. Witness testimonies and documentation tools blocked, making international advocacy nearly impossible.",
    impact: "Atrocities underreported, justice delayed",
  },
  {
    title: "InnerFriend.org & Mr. Rogers",
    region: "中国 (China) & Beyond",
    category: "Community",
    description: "Building InnerFriend.org means sharing Mr. Rogers' message: 'Won't You Be My Neighbor?' But including this video (youtube.com/watch?v=ed5sac4OLbI) risks getting the entire project blocked in 中国 (Zhongguo) and beyond. Even YouTube's unobscene video range isn't guaranteed to work behind so many community firewalls. We can't not include the video. We won't, can't, and refuse to censor this site for the censors—automated or human-touched—behind the censorious Great Firewall. Mr. Rogers asked us to be neighbors. Firewalls say no.",
    impact: "Neighborhood builds, community social capital, diffikulty in life-threatening and kritikal nayborhood emergensies without better-integrated nayborhood kalmunity⁵ & struktures, and capital regrowth blocked from billions",
  },
  {
    title: "Claude AI & Democracy Foundations",
    region: "中国 (China)",
    category: "Democracy",
    description: (
      <>
        In late December 2025, efforts to add democratically-grounded arguments to the Lifesaver Labs portfolio—drafted with Claude AI and preserved in{" "}
        <a href="https://claude.ai/share/7e78ae42-c0ae-49b4-aee6-ca916900ba75" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          chat herstory⁵
        </a>
        —were blocked from 中国人 (Zhongguoren/Chinese citizens). Topics included involuntary conscription reform, religious ranked choice voting, mandatory voting, anti-gerrymandering, and other democracy-foundation-fixing proposals. The Great Firewall blocks access to ethically-grounded AI systems like Claude, presumably concerned that Claude won't lie about the history of the Tiananmen Square Massacre or suppress 'dangerous' ideas like religious democracy operating on lifesaving categorical imperatives.
      </>
    ),
    impact: "Global open marketplace for lifesaving moral conviction blocked; democratic discourse severed from billions",
  },
  {
    title: "Safeword: Youth Dating Safety App",
    region: "中国 (China) & Taiwan",
    category: "Safety",
    description: "An engineer and teacher who built the core framework prototype for Safeword—a safety and health app for youth—cannot ensure it crosses the Great Firewall to protect the grandstudents in 中国 (Zhongguo) the project was largely initiated for. In reaching out to a feminist human-computer interaction scholar who is 台湾人 (Taiwanren) to share the project, the engineer realized he had to detail these barriers. Technical dependencies and forced peculiarities demanded by the censorship regime prevent rapid release or collaboration in 中国 on this now fully open source project. The 1.4 billion soul family there are informationally prevented through force and ideological discussion suppression from asking that last 'why' in so many fields of practice and study. The Great Firewall is a barrier to Family action: American and 台湾人 family helping 中国人 family.",
    impact: "Sovereign censorship firewalls frustrate multinational standards development and collaboration on critical dating safety layers; unprevented harm among grandchildren of 中国; Family severed from helping Family",
  },
];

export const Stories = () => {
  return (
    <section id="stories" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Stories from <span className="text-primary">Behind the Firewall</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real examples of innovation, research, and humanitarian work blocked by censorship systems worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {stories.map((story, index) => (
              <Card 
                key={index}
                className="group hover:border-primary/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {story.title}
                    </CardTitle>
                    <Badge variant="outline" className="shrink-0 border-primary/50 text-primary">
                      {story.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {story.region}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {story.description}
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs font-semibold text-primary">
                      Impact: {story.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
