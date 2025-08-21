import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Zap, Shield, Smartphone, HeadphonesIcon, CreditCard } from "lucide-react";

export const FeaturePrioritization = () => {
  const features = [
    {
      name: "Basic Loan Application",
      userImpact: 10,
      businessValue: 9,
      effort: 3,
      priority: "P0",
      description: "Simple loan request form with basic KYC",
      icon: CreditCard,
      phase: "MVP"
    },
    {
      name: "Voice Interface",
      userImpact: 9,
      businessValue: 7,
      effort: 7,
      priority: "P0", 
      description: "Multi-language voice commands for navigation",
      icon: HeadphonesIcon,
      phase: "MVP"
    },
    {
      name: "AI Underwriting Engine",
      userImpact: 8,
      businessValue: 10,
      effort: 8,
      priority: "P0",
      description: "Automated risk assessment using mobile data",
      icon: Shield,
      phase: "MVP"
    },
    {
      name: "Offline Mode",
      userImpact: 9,
      businessValue: 6,
      effort: 6,
      priority: "P1",
      description: "Basic functionality without internet connection",
      icon: Smartphone,
      phase: "V1.1"
    },
    {
      name: "Digital Onboarding Assistant", 
      userImpact: 8,
      businessValue: 5,
      effort: 5,
      priority: "P1",
      description: "Step-by-step guided user journey",
      icon: Users,
      phase: "V1.1"
    },
    {
      name: "Instant Notifications",
      userImpact: 7,
      businessValue: 4,
      effort: 3,
      priority: "P2",
      description: "SMS and push notifications for loan status",
      icon: Zap,
      phase: "V1.2"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "P0": return "destructive";
      case "P1": return "secondary"; 
      case "P2": return "outline";
      default: return "secondary";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 8) return "text-success";
    if (score >= 6) return "text-accent";
    return "text-muted-foreground";
  };

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Feature Strategy</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Feature Prioritization Matrix
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic feature roadmap based on user impact, business value, and development effort
          </p>
        </div>

        {/* Prioritization Methodology */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              Scoring Methodology
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">User Impact (1-10)</h4>
                <p className="text-sm text-muted-foreground">How much does this feature improve user experience?</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Business Value (1-10)</h4>
                <p className="text-sm text-muted-foreground">Revenue impact, user acquisition, retention</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Development Effort (1-10)</h4>
                <p className="text-sm text-muted-foreground">Time, resources, and complexity required</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feature Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground">{feature.name}</h3>
                      <div className="flex gap-2">
                        <Badge variant={getPriorityColor(feature.priority)}>
                          {feature.priority}
                        </Badge>
                        <Badge variant="outline">{feature.phase}</Badge>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className={`text-lg font-bold ${getScoreColor(feature.userImpact)}`}>
                          {feature.userImpact}
                        </div>
                        <div className="text-xs text-muted-foreground">User Impact</div>
                      </div>
                      <div>
                        <div className={`text-lg font-bold ${getScoreColor(feature.businessValue)}`}>
                          {feature.businessValue}
                        </div>
                        <div className="text-xs text-muted-foreground">Business Value</div>
                      </div>
                      <div>
                        <div className={`text-lg font-bold ${feature.effort >= 7 ? 'text-destructive' : feature.effort >= 5 ? 'text-accent' : 'text-success'}`}>
                          {feature.effort}
                        </div>
                        <div className="text-xs text-muted-foreground">Effort</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Development Phases */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-destructive">
            <CardHeader>
              <CardTitle className="text-destructive">MVP Phase</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">Core functionality for market validation</p>
              <ul className="text-sm space-y-1">
                <li>• Basic Loan Application</li>
                <li>• Voice Interface</li>
                <li>• AI Underwriting</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-accent">
            <CardHeader>
              <CardTitle className="text-accent">Version 1.1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">Enhanced user experience</p>
              <ul className="text-sm space-y-1">
                <li>• Offline Mode</li>
                <li>• Digital Assistant</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-secondary-foreground">Version 1.2+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">Advanced features</p>
              <ul className="text-sm space-y-1">
                <li>• Instant Notifications</li>
                <li>• Analytics Dashboard</li>
                <li>• Credit Building Tools</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};