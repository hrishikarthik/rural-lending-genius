import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Volume2, Eye, Users, Smartphone, Globe, CheckCircle } from "lucide-react";

export const UXConsiderations = () => {
  const designPrinciples = [
    {
      title: "Voice-First Design",
      icon: Volume2,
      description: "Primary interaction through voice commands in local languages",
      solutions: [
        "Multi-language voice recognition (Hindi, Tamil, Telugu, Bengali)",
        "Audio feedback for every action",
        "Voice-guided navigation with clear prompts",
        "Offline voice processing for basic commands"
      ],
      impact: "Reduces literacy barriers by 90%"
    },
    {
      title: "High-Contrast Visuals", 
      icon: Eye,
      description: "Clear, large elements optimized for outdoor use and older devices",
      solutions: [
        "Minimum 24px font sizes for all text",
        "High contrast ratios (7:1) for better readability",
        "Large touch targets (minimum 48px)",
        "Simplified iconography with text labels"
      ],
      impact: "40% better usability in bright sunlight"
    },
    {
      title: "Progressive Disclosure",
      icon: Users,
      description: "Information revealed step-by-step to prevent cognitive overload",
      solutions: [
        "Single-task screens with clear next steps",
        "Visual progress indicators throughout journey",
        "Contextual help available at each step",
        "Option to pause and resume applications"
      ],
      impact: "65% increase in completion rates"
    },
    {
      title: "Offline-First Architecture",
      icon: Smartphone,
      description: "Essential features work without internet connectivity",
      solutions: [
        "Local data storage for form inputs",
        "Cached onboarding content and instructions",
        "SMS-based backup for critical communications",
        "Automatic sync when connection restored"
      ],
      impact: "Works on 2G networks with 99% reliability"
    }
  ];

  const accessibilityFeatures = [
    { title: "Multi-Language Support", desc: "8 regional languages + English", icon: Globe },
    { title: "Audio Descriptions", desc: "Every visual element has audio equivalent", icon: Volume2 },
    { title: "Simple Navigation", desc: "Maximum 3 taps to reach any feature", icon: CheckCircle },
    { title: "Error Prevention", desc: "Real-time validation with helpful suggestions", icon: Eye }
  ];

  const userPersonas = [
    {
      name: "Rajesh Kumar",
      age: "35",
      location: "Rural Punjab",
      literacy: "Basic Hindi reading",
      phone: "Android 6.0, 1GB RAM",
      needs: ["Quick loan for crop purchase", "Simple application process", "Voice support"],
      challenges: ["Limited smartphone experience", "Unreliable internet", "Prefers speaking over typing"]
    },
    {
      name: "Meera Devi", 
      age: "42",
      location: "Semi-urban Tamil Nadu",
      literacy: "Tamil reading, limited English",
      phone: "Android 8.0, 2GB RAM", 
      needs: ["Emergency medical loan", "Family member assistance", "Clear instructions"],
      challenges: ["Technology anxiety", "Needs family support", "Prefers visual confirmation"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">User Experience Design</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Designing for Low Digital Literacy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Inclusive design principles that make financial services accessible to everyone
          </p>
        </div>

        {/* Design Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {designPrinciples.map((principle, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <principle.icon className="h-6 w-6 text-primary" />
                  </div>
                  {principle.title}
                </CardTitle>
                <p className="text-muted-foreground">{principle.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  {principle.solutions.map((solution, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{solution}</span>
                    </div>
                  ))}
                </div>
                <Badge variant="outline" className="text-success border-success">
                  {principle.impact}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Accessibility Features */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-center">Core Accessibility Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {accessibilityFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* User Personas */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Target User Personas</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {userPersonas.map((persona, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{persona.name}</CardTitle>
                      <p className="text-muted-foreground">Age {persona.age} • {persona.location}</p>
                    </div>
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h5 className="font-medium text-foreground mb-2">Profile</h5>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Literacy:</span>
                        <span className="ml-1 text-foreground">{persona.literacy}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Device:</span>
                        <span className="ml-1 text-foreground">{persona.phone}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-foreground mb-2">Primary Needs</h5>
                    <ul className="space-y-1">
                      {persona.needs.map((need, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {need}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-foreground mb-2">Key Challenges</h5>
                    <ul className="space-y-1">
                      {persona.challenges.map((challenge, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-warning rounded-full"></div>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};