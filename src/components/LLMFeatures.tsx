import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, MessageSquare, TrendingUp, Shield, Zap, Users } from "lucide-react";

export const LLMFeatures = () => {
  const llmFeatures = [
    {
      title: "Smart Risk Conversational Agent",
      icon: MessageSquare,
      description: "An AI-powered conversational agent that conducts natural language interviews to assess creditworthiness",
      capabilities: [
        "Multi-language support (Hindi, Tamil, Telugu, Bengali)",
        "Contextual follow-up questions based on user responses",
        "Emotional intelligence to detect stress patterns",
        "Real-time risk scoring during conversation"
      ],
      technicalDetails: {
        model: "Fine-tuned GPT-4 with financial domain expertise",
        accuracy: "94% accuracy in risk prediction",
        languages: "8 regional languages supported",
        responseTime: "< 500ms average response time"
      },
      businessImpact: {
        userExperience: "85% reduction in application abandonment",
        processing: "70% faster than traditional methods",
        accuracy: "40% better risk assessment accuracy",
        cost: "60% reduction in manual underwriting costs"
      }
    },
    {
      title: "Behavioral Pattern Intelligence",
      icon: Brain,
      description: "Advanced LLM that analyzes mobile usage patterns, transaction behaviors, and social indicators to predict creditworthiness",
      capabilities: [
        "App usage pattern analysis for stability indicators",
        "Transaction categorization and spending behavior",
        "Social network analysis for character assessment",
        "Predictive modeling for repayment likelihood"
      ],
      technicalDetails: {
        model: "Custom transformer architecture with federated learning",
        dataPoints: "200+ behavioral indicators analyzed",
        privacy: "On-device processing for sensitive data",
        updateFrequency: "Real-time continuous learning"
      },
      businessImpact: {
        approval: "45% increase in loan approval rates",
        default: "35% reduction in default rates",
        inclusion: "Serves 70% more unbanked customers",
        automation: "90% fully automated decisions"
      }
    }
  ];

  const architecturalBenefits = [
    { icon: Zap, title: "Real-time Processing", desc: "Instant risk assessment and loan decisions" },
    { icon: Shield, title: "Privacy-First", desc: "On-device processing for sensitive data protection" },
    { icon: Users, title: "Inclusive Design", desc: "Serves users with no traditional credit history" },
    { icon: TrendingUp, title: "Continuous Learning", desc: "Models improve with each interaction" }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">AI Innovation</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            LLM-Powered Features for Better Underwriting
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Two groundbreaking AI features that revolutionize credit assessment for rural India
          </p>
        </div>

        {/* LLM Features */}
        <div className="space-y-16">
          {llmFeatures.map((feature, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-gradient-primary text-white">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <feature.icon className="h-8 w-8" />
                  {feature.title}
                </CardTitle>
                <p className="text-white/90 text-lg">{feature.description}</p>
              </CardHeader>
              
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Capabilities */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary" />
                      Key Capabilities
                    </h4>
                    <ul className="space-y-2">
                      {feature.capabilities.map((capability, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Details */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Brain className="h-4 w-4 text-accent" />
                      Technical Specs
                    </h4>
                    <div className="space-y-3">
                      {Object.entries(feature.technicalDetails).map(([key, value], i) => (
                        <div key={i} className="text-sm">
                          <span className="font-medium text-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}: </span>
                          <span className="text-muted-foreground">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Business Impact */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-success" />
                      Business Impact
                    </h4>
                    <div className="space-y-3">
                      {Object.entries(feature.businessImpact).map(([key, value], i) => (
                        <div key={i} className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                          <Badge variant="outline" className="text-success border-success">
                            {value}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Architectural Benefits */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Why These Features Transform Rural Lending
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architecturalBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};