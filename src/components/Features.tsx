import { Card } from "@/components/ui/card";
import { Calendar, MessageSquare, Zap, BarChart3, Phone } from "lucide-react";
const features = [{
  icon: Calendar,
  title: "Smart Scheduling",
  description: "Automatically manage bookings, reservations, and resource allocation with intelligent AI algorithms."
}, {
  icon: MessageSquare,
  title: "Automated Communication",
  description: "Handle customer inquiries, confirmations, and updates instantly with AI-powered messaging."
}, {
  icon: Zap,
  title: "24/7 Voice Agent",
  description: "Answers, books, and provides information instantly — never miss a call again."
}, {
  icon: BarChart3,
  title: "Analytics & Insights",
  description: "Get actionable insights on usage patterns, revenue, and operational efficiency."
}];
const Features = () => {
  return <section id="features" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Everything You Need to Operate Smarter
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful automation tools designed specifically for venue and facility management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
      </div>
    </section>;
};
export default Features;