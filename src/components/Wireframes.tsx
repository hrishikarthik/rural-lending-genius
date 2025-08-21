import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Volume2, User, CreditCard } from "lucide-react";

export const Wireframes = () => {
  const wireframes = [
    {
      title: "Welcome Screen",
      description: "Voice-first onboarding with large touch targets",
      features: ["Multi-language voice greeting", "Single prominent action button", "Speaker icon indicates voice support", "High contrast design for outdoor use"]
    },
    {
      title: "Loan Request",
      description: "Simple amount selection with voice input",
      features: ["Voice prompt in local language", "Large number buttons", "Audio confirmation", "Progress indicator at top"]
    },
    {
      title: "KYC Collection", 
      description: "Guided information collection process",
      features: ["Step-by-step voice guidance", "Photo capture with instructions", "Form auto-fill where possible", "Clear error messages"]
    },
    {
      title: "Approval Screen",
      description: "Clear loan decision with next steps",
      features: ["Audio announcement", "Large approval amount display", "Simple next action button", "Contact support option"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Mobile Interface Design</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Low-Literacy Optimized Wireframes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mobile app screens designed for users with limited smartphone experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {wireframes.map((wireframe, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Smartphone className="h-6 w-6 text-primary" />
                  {wireframe.title}
                </CardTitle>
                <p className="text-muted-foreground">{wireframe.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Mobile Mockup */}
                <div className="mx-auto w-64 h-96 bg-foreground rounded-2xl p-2 shadow-lg">
                  <div className="w-full h-full bg-background rounded-xl overflow-hidden">
                    {/* Status Bar */}
                    <div className="h-6 bg-muted flex items-center justify-between px-4 text-xs">
                      <span>9:41</span>
                      <span>100%</span>
                    </div>
                    
                    {/* App Content */}
                    <div className="p-4 h-full">
                      {index === 0 && (
                        <div className="text-center space-y-6 pt-8">
                          <Volume2 className="h-12 w-12 text-primary mx-auto" />
                          <h3 className="text-lg font-bold">नमस्ते!</h3>
                          <p className="text-sm text-muted-foreground">ऋण के लिए बात करें</p>
                          <div className="w-full h-12 bg-primary rounded-lg flex items-center justify-center">
                            <span className="text-white font-medium">ऋण चाहिए</span>
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <Volume2 className="h-4 w-4 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">आवाज़ सुनें</span>
                          </div>
                        </div>
                      )}
                      
                      {index === 1 && (
                        <div className="space-y-4 pt-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-1 bg-primary rounded"></div>
                            <div className="w-8 h-1 bg-muted rounded"></div>
                            <div className="w-8 h-1 bg-muted rounded"></div>
                          </div>
                          <h3 className="text-lg font-bold">कितना पैसा चाहिए?</h3>
                          <div className="grid grid-cols-3 gap-2 mt-6">
                            {['5,000', '10,000', '25,000', '50,000', '1,00,000', 'अन्य'].map((amount, i) => (
                              <div key={i} className="h-12 bg-muted rounded flex items-center justify-center text-sm">
                                ₹{amount}
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 p-3 bg-accent/10 rounded-lg text-center">
                            <Volume2 className="h-4 w-4 mx-auto mb-1 text-accent" />
                            <span className="text-xs text-muted-foreground">राशि बोलें</span>
                          </div>
                        </div>
                      )}
                      
                      {index === 2 && (
                        <div className="space-y-4 pt-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-1 bg-primary rounded"></div>
                            <div className="w-8 h-1 bg-primary rounded"></div>
                            <div className="w-8 h-1 bg-muted rounded"></div>
                          </div>
                          <h3 className="text-lg font-bold">आपकी जानकारी</h3>
                          <div className="space-y-3">
                            <div className="h-10 bg-muted rounded px-3 flex items-center text-sm">
                              नाम बताएं
                            </div>
                            <div className="h-10 bg-muted rounded px-3 flex items-center text-sm">
                              फोन नंबर
                            </div>
                            <div className="h-16 bg-muted rounded flex items-center justify-center">
                              <User className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <p className="text-xs text-center text-muted-foreground">फोटो खींचें</p>
                          </div>
                        </div>
                      )}
                      
                      {index === 3 && (
                        <div className="text-center space-y-6 pt-8">
                          <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto">
                            <span className="text-2xl">✓</span>
                          </div>
                          <h3 className="text-lg font-bold text-success">स्वीकृत!</h3>
                          <div className="text-2xl font-bold">₹25,000</div>
                          <p className="text-sm text-muted-foreground">आपका ऋण स्वीकृत हो गया है</p>
                          <div className="w-full h-12 bg-success rounded-lg flex items-center justify-center">
                            <span className="text-white font-medium">आगे बढ़ें</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground mb-3">Key Features:</h4>
                  {wireframe.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Design Principles Summary */}
        <Card className="mt-16">
          <CardHeader>
            <CardTitle className="text-center">Design Principles Applied</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Volume2 className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Voice-First</h4>
                <p className="text-sm text-muted-foreground">Every interaction can be completed using voice commands</p>
              </div>
              <div className="text-center">
                <CreditCard className="h-8 w-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Single Purpose</h4>
                <p className="text-sm text-muted-foreground">Each screen focuses on one primary task</p>
              </div>
              <div className="text-center">
                <User className="h-8 w-8 text-success mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Error Prevention</h4>
                <p className="text-sm text-muted-foreground">Smart defaults and validation prevent user mistakes</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};