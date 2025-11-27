import { Check } from "lucide-react";
const benefits = ["Reduce operational costs by up to 60%", "Eliminate manual data entry and paperwork", "Improve customer satisfaction scores", "Scale operations without hiring more staff", "Real-time visibility across all facilities", "Seamless integration with existing systems"];
const Benefits = () => {
  return <section id="benefits" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Transform Your Operations with AI
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join hundreds of venues that have already modernized their operations 
              with Courtside AI. Our platform handles the complexity so you can focus 
              on delivering exceptional experiences.
            </p>
            <div className="space-y-4 pt-4">
              {benefits.map((benefit, index) => <div key={index} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <p className="text-foreground font-medium">{benefit}</p>
                </div>)}
            </div>
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
export default Benefits;