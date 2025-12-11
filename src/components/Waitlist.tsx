import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";

const waitlistSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  company: z.string().trim().max(100, { message: "Company name must be less than 100 characters" }).optional(),
  phone: z.string().trim().max(20, { message: "Phone number must be less than 20 characters" }).optional(),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

const Waitlist = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
    },
  });

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);
    
    const { error } = await supabase
      .from('courtside_waitlist')
      .insert({
        name: data.name,
        email: data.email,
        company: data.company || null,
        phone: data.phone || null,
      });

    setIsSubmitting(false);

    if (error) {
      toast.error("Failed to join waitlist", {
        description: "Please try again later.",
      });
      return;
    }

    toast.success("Successfully joined the waitlist!", {
      description: "We'll be in touch soon with early access details.",
    });
    form.reset();
  };

  return (
    <section id="waitlist" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Join the Waitlist
            </h2>
            <p className="text-lg text-muted-foreground">
              Be among the first to experience AI-powered facility automation. 
              Get early access and exclusive benefits.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-background/50 backdrop-blur-sm border border-border rounded-lg p-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company/Organization</FormLabel>
                    <FormControl>
                      <Input placeholder="Your company name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="+1 (555) 000-0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Joining..." : "Join Waitlist"}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                * Required fields
              </p>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
