import { Check, X, Phone, Brain, Calendar, DollarSign, Zap, BarChart3, Users, Clock } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Comparison = () => {
  const comparisonData = [
    {
      icon: Phone,
      feature: "24/7 Availability",
      courtside: true,
      otherAI: "Limited",
      answeringService: true,
    },
    {
      icon: Brain,
      feature: "AI-Powered Intelligence",
      courtside: true,
      otherAI: "Basic",
      answeringService: false,
    },
    {
      icon: Calendar,
      feature: "Automated Booking",
      courtside: true,
      otherAI: false,
      answeringService: false,
    },
    {
      icon: DollarSign,
      feature: "Cost per Call",
      courtside: "$0.50",
      otherAI: "$2-5",
      answeringService: "$5-15",
    },
    {
      icon: Zap,
      feature: "Instant Response",
      courtside: true,
      otherAI: "Varies",
      answeringService: false,
    },
    {
      icon: BarChart3,
      feature: "Analytics Dashboard",
      courtside: true,
      otherAI: "Limited",
      answeringService: false,
    },
    {
      icon: Users,
      feature: "Natural Conversations",
      courtside: true,
      otherAI: "Robotic",
      answeringService: true,
    },
    {
      icon: Clock,
      feature: "Setup Time",
      courtside: "48 hours",
      otherAI: "1-2 weeks",
      answeringService: "1-2 weeks",
    },
  ];

  const renderValue = (value: boolean | string) => {
    if (value === true) {
      return <Check className="h-5 w-5 text-accent mx-auto" />;
    }
    if (value === false) {
      return <X className="h-5 w-5 text-muted-foreground mx-auto" />;
    }
    return <span className="text-sm text-foreground">{value}</span>;
  };

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Why Choose Courtside AI?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how we compare to traditional answering services and other AI solutions
            </p>
          </div>

          <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-medium overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent border-b border-border/50">
                    <TableHead className="w-[250px] font-bold text-foreground">Feature</TableHead>
                    <TableHead className="text-center font-bold bg-primary/5 text-foreground">
                      Courtside AI
                    </TableHead>
                    <TableHead className="text-center font-bold text-foreground">
                      Other AI Services
                    </TableHead>
                    <TableHead className="text-center font-bold text-foreground">
                      Answering Services
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((row, index) => {
                    const Icon = row.icon;
                    return (
                      <TableRow
                        key={index}
                        className="border-b border-border/30 hover:bg-muted/30 transition-colors"
                      >
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <Icon className="h-5 w-5 text-primary" />
                            <span className="text-sm md:text-base">{row.feature}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-center bg-primary/5">
                          {renderValue(row.courtside)}
                        </TableCell>
                        <TableCell className="text-center">
                          {renderValue(row.otherAI)}
                        </TableCell>
                        <TableCell className="text-center">
                          {renderValue(row.answeringService)}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
