import { Settings2, PlugZap, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "1",
    title: "Customize Maya",
    description: "We configure Maya with your pricing, policies, rules, and customer workflows so she matches how your facility operates.",
    icon: Settings2,
  },
  {
    number: "2",
    title: "Connect Your Booking System",
    description: "We sync real-time schedule availability, court types, and booking rules so everything stays accurate.",
    icon: PlugZap,
  },
  {
    number: "3",
    title: "Go Live & Automate",
    description: "Maya instantly starts answering calls, booking courts, and handling customer requests 24/7.",
    icon: Rocket,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            A simple setup that gets your facility automated fast.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            
            return (
              <div key={step.number} className="relative">
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:-translate-y-1 hover:shadow-lg active:scale-[0.98] active:bg-accent/5 transition-all duration-300">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 min-w-[3.5rem] sm:min-w-[4rem] rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary transition-transform duration-300 hover:scale-110 hover:rotate-6" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-flex items-center justify-center w-10 h-10 min-w-[2.5rem] flex-shrink-0 rounded-full bg-primary text-primary-foreground text-base font-bold">
                            {step.number}
                          </span>
                          <h3 className="text-xl md:text-2xl font-semibold">
                            Step {step.number} — {step.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {!isLast && (
                  <div className="flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-border to-transparent" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
