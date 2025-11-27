import { Card } from "@/components/ui/card";
import { ClipboardCheck, MessageSquare, Phone, BarChart3, Check } from "lucide-react";
const features = [{
  icon: Phone,
  title: "24/7 Voice Agent",
  description: "Answers, books, and provides information instantly — never miss a call again."
}, {
  icon: ClipboardCheck,
  title: "Task Automation",
  description: "Assign and track tasks automatically so nothing slips through the cracks."
}, {
  icon: MessageSquare,
  title: "Automated Communication",
  description: "Handle follow-ups, reminders, and last-minute bookings — all without lifting a finger."
}, {
  icon: BarChart3,
  title: "Analytics & Insights",
  description: "Get actionable insights on usage patterns, revenue, and operational efficiency."
}];
const benefits = ["Reduce operational costs by up to 60%", "Eliminate manual data entry and paperwork", "Improve customer satisfaction scores", "Scale operations without hiring more staff", "Real-time visibility across all facilities", "Seamless integration with existing systems"];

const Features = () => {
  return <section id="features" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Operate Smarter with Courtside AI
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful automation tools designed specifically for venue and facility management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {features.map((feature, index) => <Card key={index} className="p-6 hover:shadow-medium transition-smooth border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="flex flex-col items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-card-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>)}
        </div>

        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-16 items-start max-w-7xl mx-auto">
          <div className="space-y-5">
            {benefits.map((benefit, index) => <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent/5 transition-colors">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 mt-0.5">
                  <Check className="h-4 w-4 text-accent" />
                </div>
                <p className="text-foreground font-medium text-lg leading-relaxed">{benefit}</p>
              </div>)}
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-primary opacity-10 blur-3xl absolute inset-0"></div>
            <div className="relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 shadow-medium">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Average Results</div>
                  <div className="text-5xl font-bold text-foreground">80%</div>
                  <div className="text-sm text-muted-foreground">Time savings in first month</div>
                </div>
                <div className="h-px bg-border"></div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Implementation</div>
                  <div className="text-5xl font-bold text-foreground">72hrs</div>
                  <div className="text-sm text-muted-foreground">Average setup time</div>
                </div>
                <div className="h-px bg-border"></div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                  <div className="text-5xl font-bold text-foreground">4.9</div>
                  <div className="text-sm text-muted-foreground">Out of 5.0 rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Features;