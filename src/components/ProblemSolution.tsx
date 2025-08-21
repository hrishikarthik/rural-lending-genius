import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, Target, Users, Zap } from "lucide-react";

export const ProblemSolution = () => {
  const problems = [
    {
      title: "Limited Financial Access",
      description: "Only 35% of rural population has access to formal credit",
      impact: "High Priority",
      icon: Users
    },
    {
      title: "Complex Application Process", 
      description: "Traditional lending requires extensive paperwork and documentation",
      impact: "High Priority",
      icon: AlertTriangle
    },
    {
      title: "Low Digital Literacy",
      description: "Many users struggle with complex digital interfaces",
      impact: "Critical",
      icon: Target
    },
    {
      title: "Slow Approval Times",
      description: "Traditional banks take 7-14 days for loan approval",
      impact: "Medium Priority",
      icon: Zap
    }
  ];

  const solutions = [
    {
      title: "Voice-First Interface",
      description: "Multi-language voice commands reduce dependency on reading/typing",
      benefit: "90% reduction in user friction"
    },
    {
      title: "Offline-First Architecture", 
      description: "App functions with limited connectivity, syncs when online",
      benefit: "Works on 2G networks"
    },
    {
      title: "AI-Powered Underwriting",
      description: "Uses mobile data patterns, transaction history, and behavioral analysis",
      benefit: "60% faster approvals"
    },
    {
      title: "Progressive Onboarding",
      description: "Step-by-step guidance with visual cues and local language support",
      benefit: "85% completion rate"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Problem & Solution Analysis</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Addressing Rural Lending Challenges
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Identifying key pain points and designing targeted solutions for India's underserved rural market
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Problems */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              <h3 className="text-2xl font-bold text-foreground">Key Problems</h3>
            </div>
            
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <Card key={index} className="border-l-4 border-l-destructive">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <problem.icon className="h-5 w-5 text-destructive mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-foreground">{problem.title}</h4>
                          <Badge variant={problem.impact === "Critical" ? "destructive" : "secondary"}>
                            {problem.impact}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">{problem.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle className="h-6 w-6 text-success" />
              <h3 className="text-2xl font-bold text-foreground">Our Solutions</h3>
            </div>
            
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <Card key={index} className="border-l-4 border-l-success">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-5 w-5 text-success mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-foreground">{solution.title}</h4>
                          <Badge variant="outline" className="border-success text-success">
                            {solution.benefit}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">{solution.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};