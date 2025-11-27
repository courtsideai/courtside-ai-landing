import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does setup take?",
      answer: "3-5 business days from contract signing to go-live.",
    },
    {
      question: "What does setup look like?",
      answer: "Setup takes about 72 hours. We meet with your team, collect your pricing, rules, and scripts, configure Maya, test her with real scenarios, make adjustments, and deploy your live voice agent.",
    },
    {
      question: "Can it integrate with my booking system?",
      answer: "Yes, we support most major schedulers for facilities and venues.",
    },
    {
      question: "Is the AI bilingual?",
      answer: "English is standard. Most languages are supported.",
    },
    {
      question: "What about data privacy?",
      answer: "Fully PIPEDA and SOC2 compliant with secure call storage and encryption.",
    },
  ];

  return (
    <section id="faqs" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about Courtside AI
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
