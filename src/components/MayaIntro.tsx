import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import mayaAvatar from "@/assets/maya-avatar.jpg";

const MayaIntro = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    facilityName: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Request Received!",
        description: "Maya will call you shortly to demonstrate her capabilities.",
      });
      setFormData({ name: "", phone: "", email: "", facilityName: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Maya Flip Card */}
          <div className="group perspective h-full">
            <div className="relative preserve-3d transition-transform duration-700 group-hover:rotate-y-180 h-full">
              {/* Front of card */}
              <Card 
                className="absolute inset-0 backface-hidden border-border/50 shadow-lg overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(${mayaAvatar})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <CardContent className="flex flex-col items-center justify-center h-full min-h-[500px] p-8">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Sparkles className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-4xl font-bold text-foreground mb-4">Meet Maya</h3>
                  <p className="text-muted-foreground text-center text-lg">
                    Your AI-Powered Voice Assistant
                  </p>
                  <div className="mt-8 text-sm text-muted-foreground animate-pulse">
                    Hover to learn more
                  </div>
                </CardContent>
              </Card>

              {/* Back of card */}
              <Card className="absolute inset-0 backface-hidden rotate-y-180 border-border/50 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-3xl">Meet Maya</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Your AI-Powered Voice Assistant
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/80 leading-relaxed">
                    Maya is our intelligent voice agent designed specifically for sports facilities. 
                    She handles inquiries, schedules bookings, and provides information about your 
                    facility—all through natural conversation.
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">24/7 Availability</h4>
                        <p className="text-sm text-muted-foreground">
                          Maya never sleeps, ensuring your customers always get answers
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">Natural Conversations</h4>
                        <p className="text-sm text-muted-foreground">
                          Advanced AI that understands context and speaks naturally
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-border/50">
                    <p className="text-sm text-muted-foreground italic">
                      "Experience the future of customer service—request a demo call from Maya today."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <Card className="border-border/50 shadow-lg h-full">
            <CardHeader>
              <CardTitle className="text-2xl">Try Maya Now</CardTitle>
              <CardDescription>
                Fill out the form below and Maya will call you to demonstrate her capabilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="facilityName">Facility Name (Optional)</Label>
                  <Input
                    id="facilityName"
                    name="facilityName"
                    value={formData.facilityName}
                    onChange={handleChange}
                    placeholder="Your facility name"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Have Maya Call Me"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to receive a call from our AI assistant Maya
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MayaIntro;
