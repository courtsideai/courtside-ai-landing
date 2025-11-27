import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Zap, Users, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
const About = () => {
  const beliefs = [{
    icon: Target,
    title: "Purpose-Built for Sports",
    description: "We're not a generic AI solution. Every feature is designed specifically for sports facility operations."
  }, {
    icon: Zap,
    title: "Effortless Technology",
    description: "Technology should simplify operations, not complicate them. We make powerful AI accessible to everyone."
  }, {
    icon: Users,
    title: "Facility Owner First",
    description: "We're facility owners ourselves. We build solutions that we actually want to use."
  }];
  const team = [{
    name: "Shiv Sekhon",
    role: "Co-Founder, COO",
    initial: "S",
    bio: "Sports facility owner and automation strategist with 10+ years in facility management."
  }, {
    name: "Vi",
    role: "Co-Founder, CEO",
    initial: "V",
    bio: "Sports entrepreneur and AI visionary passionate about transforming facility operations."
  }, {
    name: "Dragan",
    role: "Co-Founder, CTO",
    initial: "D",
    bio: "Technical architect handling all automation systems. Previous experience building scalable solutions for complex operations."
  }];
  return <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-28 bg-gradient-subtle relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <Badge variant="outline" className="bg-background/50 backdrop-blur-sm border-primary/20 text-foreground px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2 text-accent" />
                Our Story
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-foreground">Built by Facility Owners,</span>
                <br />
                <span className="text-foreground">For </span>
                <span className="bg-gradient-primary bg-clip-text text-transparent">Facility Owners</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We got tired of missing calls, losing bookings, and juggling admin work — so we built the solution we wished we had.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 md:py-28 bg-background relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-primary opacity-5 blur-3xl rounded-3xl" />
                <div className="relative rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm p-10 md:p-16 space-y-8 shadow-elegant hover:shadow-glow transition-smooth">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">Our Story</h2>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-foreground first-letter:mr-1 first-letter:float-left">
                    Every sports facility owner knows the pain: missed calls during peak hours, empty courts that should be booked, and staff spending hours on the phone instead of focusing on customer experience.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    As facility owners ourselves, we lived this reality every day. We tried hiring more staff, implementing booking systems, and optimizing schedules — but the fundamental problem remained: we couldn't be everywhere at once.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    That's when we realized AI could be the solution. Not complicated enterprise software that takes months to implement, but a simple, purpose-built assistant that works like having your best front-desk person available 24/7.
                  </p>

                  <div className="relative pl-6 border-l-4 border-primary/50 bg-primary/5 rounded-r-lg py-4 pr-6">
                    <p className="text-xl font-semibold text-foreground leading-relaxed">
                      Courtside AI was born from this vision: technology that makes facility operations effortless, not complicated.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Believe */}
        <section className="py-20 md:py-28 bg-gradient-subtle relative overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 animate-fade-in">What We Believe</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {beliefs.map((belief, index) => {
                const Icon = belief.icon;
                return <div key={index} className="group rounded-3xl border border-border/30 bg-card/60 backdrop-blur-sm p-10 text-center space-y-6 hover:border-primary/30 hover:-translate-y-2 hover:shadow-glow transition-smooth">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary/10 group-hover:bg-gradient-primary/20 transition-smooth ring-1 ring-primary/20 group-hover:ring-primary/40">
                        <Icon className="h-10 w-10 text-accent group-hover:scale-110 transition-smooth" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">{belief.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {belief.description}
                      </p>
                    </div>;
              })}
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-20 md:py-28 bg-background relative">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 animate-fade-in">Meet the Team</h2>
              
              <div className="grid md:grid-cols-3 gap-10">
                {team.map((member, index) => <div key={index} className="group rounded-3xl border border-border/30 bg-card/60 backdrop-blur-sm p-10 text-center space-y-6 hover:border-primary/30 hover:-translate-y-2 hover:shadow-glow transition-smooth">
                    <div className="relative inline-block">
                      <div className="absolute -inset-2 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-20 blur transition-smooth" />
                      <Avatar className="w-28 h-28 mx-auto ring-4 ring-primary/20 group-hover:ring-primary/40 transition-smooth relative">
                        <AvatarFallback className="bg-gradient-primary text-primary-foreground text-4xl font-bold">
                          {member.initial}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">{member.name}</h3>
                      <p className="text-accent font-semibold text-base">{member.role}</p>
                      <p className="text-muted-foreground leading-relaxed text-base pt-2">{member.bio}</p>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist CTA */}
        <section className="py-20 md:py-28 bg-gradient-subtle relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-accent/5 pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-primary opacity-20 blur-3xl rounded-3xl" />
                <div className="relative rounded-3xl bg-gradient-primary p-16 md:p-20 text-center space-y-10 shadow-glow">
                  <div className="flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-primary-foreground animate-pulse" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
                    Join the Waitlist
                  </h2>
                  <p className="text-xl md:text-2xl text-primary-foreground/95 max-w-3xl mx-auto leading-relaxed">
                    Be among the first facility owners to experience effortless AI-powered operations
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
                    <Button variant="outline" size="lg" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover:scale-105 transition-smooth px-8">
                      Book a Demo
                    </Button>
                    <Button variant="secondary" size="lg" className="group hover:scale-105 transition-smooth px-8" asChild>
                      <a href="#waitlist">
                        Get Early Access
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default About;