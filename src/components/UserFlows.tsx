import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowRight, CheckCircle, Users, Smartphone, Shield } from "lucide-react";

export const UserFlows = () => {
  const loanApplicationFlow = [
    {
      step: "1",
      title: "Voice Welcome",
      description: "User opens app, greeted in local language with voice prompt",
      actions: ["Voice says 'Namaste, loan chahiye?' (Hindi)", "Shows large 'Loan' button with speaker icon"],
      duration: "5 seconds"
    },
    {
      step: "2", 
      title: "Loan Amount",
      description: "User specifies loan amount through voice or simple input",
      actions: ["Voice: 'Kitna paisa chahiye?'", "Shows amount selector with voice input", "Confirms amount with audio feedback"],
      duration: "15 seconds"
    },
    {
      step: "3",
      title: "Basic Information",
      description: "Collect essential details with guided assistance",
      actions: ["Voice prompts for name, phone, location", "Photo capture for KYC", "SMS verification"],
      duration: "45 seconds"
    },
    {
      step: "4",
      title: "AI Assessment",
      description: "Background risk evaluation using behavioral data",
      actions: ["Analyze app usage patterns", "Check transaction history", "Voice-based risk interview"],
      duration: "30 seconds"
    },
    {
      step: "5",
      title: "Instant Decision",
      description: "Real-time loan approval with clear communication", 
      actions: ["Audio announcement of decision", "Show approval amount", "Next steps explained"],
      duration: "10 seconds"
    }
  ];

  const flowFeatures = [
    {
      title: "Voice-First Navigation",
      icon: Users,
      description: "Every step accessible through voice commands in 8 regional languages"
    },
    {
      title: "Progress Indicators",
      icon: Smartphone,
      description: "Clear visual and audio progress updates throughout the journey"
    },
    {
      title: "Error Recovery",
      icon: Shield,
      description: "Smart error detection with helpful voice-guided corrections"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">User Journey Design</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Complete User Flow Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Step-by-step journey optimized for rural users with low digital literacy
          </p>
        </div>

        {/* Flow Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {flowFeatures.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main User Flow */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-primary text-white">
            <CardTitle className="text-2xl text-center">Loan Application Flow</CardTitle>
            <p className="text-white/90 text-center">Complete journey from app open to loan approval</p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="relative">
              {loanApplicationFlow.map((step, index) => (
                <div key={index} className="flex items-start gap-6 mb-8 last:mb-0">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    {index < loanApplicationFlow.length - 1 && (
                      <div className="w-0.5 bg-border h-16 ml-6 mt-4"></div>
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                      <Badge variant="outline">{step.duration}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    
                    {/* Actions */}
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-medium text-foreground mb-2">Key Actions:</h4>
                      <ul className="space-y-1">
                        {step.actions.map((action, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Flow Summary */}
            <div className="mt-12 p-6 bg-success/10 rounded-lg border border-success/20">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="h-6 w-6 text-success" />
                <h3 className="text-lg font-semibold text-foreground">Total Journey Time</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-success">105</div>
                  <div className="text-sm text-muted-foreground">Seconds Total</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-success">85%</div>
                  <div className="text-sm text-muted-foreground">Completion Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-success">3</div>
                  <div className="text-sm text-muted-foreground">Taps Maximum</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};