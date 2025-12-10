import { Card } from "@/components/ui/card";
import { Calendar, Phone, MessageSquare, ClipboardCheck, BarChart3, DollarSign } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "24/7 Facility Booking",
    description: "Clients can book and reschedule reservations anytime, even outside office hours."
  },
  {
    icon: Phone,
    title: "Intelligent Phone Assistant",
    description: "Handle incoming calls with natural conversation and route to appropriate staff when needed."
  },
  {
    icon: MessageSquare,
    title: "Automated Communication",
    description: "Send automated reminders, follow-ups, and answer common customer questions instantly."
  },
  {
    icon: ClipboardCheck,
    title: "Task Automation",
    description: "Assign and track tasks automatically so nothing slips through the cracks."
  },
  {
    icon: BarChart3,
    title: "Analytics and Insights",
    description: "Get actionable insights on usage patterns, revenue, and operational efficiency."
  },
  {
    icon: DollarSign,
    title: "Cost Savings",
    description: "Scale operations effectively while reducing costs and eliminating manual data entry."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Operate Smarter with Courtside AI
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful automation tools designed specifically for venue and facility management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-medium transition-smooth border-border/50 bg-card/50 backdrop-blur-sm">
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
