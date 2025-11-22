import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Zap, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  const beliefs = [
    {
      icon: Target,
      title: "Purpose-Built for Sports",
      description: "We're not a generic AI solution. Every feature is designed specifically for sports facility operations.",
    },
    {
      icon: Zap,
      title: "Effortless Technology",
      description: "Technology should simplify operations, not complicate them. We make powerful AI accessible to everyone.",
    },
    {
      icon: Users,
      title: "Facility Owner First",
      description: "We're facility owners ourselves. We build solutions that we actually want to use.",
    },
  ];

  const team = [
    {
      name: "Shiv Sekhon",
      role: "Co-Founder, COO",
      initial: "S",
      bio: "Sports facility owner and automation strategist with 10+ years in facility management.",
    },
    {
      name: "Vi",
      role: "Co-Founder, CEO",
      initial: "V",
      bio: "Sports entrepreneur and AI visionary passionate about transforming facility operations.",
    },
    {
      name: "Dragan",
      role: "Co-Founder, CTO",
      initial: "D",
      bio: "Technical architect handling all automation systems. Previous experience building scalable solutions for complex operations.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-foreground">Built by Facility Owners,</span>
                <br />
                <span className="text-foreground">For </span>
                <span className="bg-gradient-primary bg-clip-text text-transparent">Facility Owners</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                We got tired of missing calls, losing bookings, and juggling admin work — so we built the solution we wished we had.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 md:p-12 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Story</h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every sports facility owner knows the pain: missed calls during peak hours, empty courts that should be booked, and staff spending hours on the phone instead of focusing on customer experience.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  As facility owners ourselves, we lived this reality every day. We tried hiring more staff, implementing booking systems, and optimizing schedules — but the fundamental problem remained: we couldn't be everywhere at once.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  That's when we realized AI could be the solution. Not complicated enterprise software that takes months to implement, but a simple, purpose-built assistant that works like having your best front-desk person available 24/7.
                </p>

                <p className="text-lg font-semibold text-foreground">
                  Courtside AI was born from this vision: technology that makes facility operations effortless, not complicated.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Believe */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What We Believe</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {beliefs.map((belief, index) => {
                  const Icon = belief.icon;
                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 text-center space-y-4"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                        <Icon className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{belief.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {belief.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Meet the Team</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 text-center space-y-4"
                  >
                    <Avatar className="w-24 h-24 mx-auto">
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground text-3xl font-bold">
                        {member.initial}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                      <p className="text-accent font-semibold mb-4">{member.role}</p>
                      <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist CTA */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="rounded-3xl bg-gradient-primary p-12 md:p-16 text-center space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">
                  Join the Waitlist
                </h2>
                <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                  Be among the first facility owners to experience effortless AI-powered operations
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                    Book a Demo
                  </Button>
                  <Button variant="secondary" size="lg" className="group" asChild>
                    <a href="#waitlist">
                      Get Early Access
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
