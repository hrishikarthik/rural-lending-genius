import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Shield, DollarSign, Target, AlertTriangle } from "lucide-react";

export const SuccessMetrics = () => {
  const kpis = [
    {
      category: "User Acquisition & Retention",
      icon: Users,
      color: "primary",
      metrics: [
        { name: "Monthly Active Users", target: "100K+", timeline: "12 months" },
        { name: "User Retention (30-day)", target: ">75%", timeline: "Ongoing" },
        { name: "App Store Rating", target: ">4.5", timeline: "6 months" },
        { name: "Onboarding Completion", target: ">85%", timeline: "3 months" }
      ]
    },
    {
      category: "Business Performance",
      icon: DollarSign,
      color: "success",
      metrics: [
        { name: "Loan Origination Volume", target: "₹50Cr/month", timeline: "18 months" },
        { name: "Average Loan Size", target: "₹25,000", timeline: "12 months" },
        { name: "Customer Acquisition Cost", target: "<₹500", timeline: "6 months" },
        { name: "Revenue per User", target: "₹2,000", timeline: "12 months" }
      ]
    },
    {
      category: "AI & Underwriting",
      icon: Shield,
      color: "accent",
      metrics: [
        { name: "Default Rate", target: "<5%", timeline: "Ongoing" },
        { name: "AI Model Accuracy", target: ">90%", timeline: "6 months" },
        { name: "Loan Approval Time", target: "<2 minutes", timeline: "3 months" },
        { name: "Automated Decisions", target: ">80%", timeline: "9 months" }
      ]
    },
    {
      category: "Technical Performance",
      icon: TrendingUp,
      color: "destructive",
      metrics: [
        { name: "App Load Time", target: "<3 seconds", timeline: "Ongoing" },
        { name: "API Response Time", target: "<500ms", timeline: "Ongoing" },
        { name: "Offline Success Rate", target: ">95%", timeline: "6 months" },
        { name: "Crash Rate", target: "<0.1%", timeline: "Ongoing" }
      ]
    }
  ];

  const securityMeasures = [
    {
      title: "Data Protection",
      measures: [
        "End-to-end encryption for all sensitive data transmission",
        "AES-256 encryption for data at rest",
        "PCI DSS Level 1 compliance for payment data",
        "GDPR-compliant data handling and user consent"
      ]
    },
    {
      title: "Authentication & Access Control",
      measures: [
        "Multi-factor authentication with SMS and biometric options",
        "Role-based access control (RBAC) for admin functions",
        "OAuth 2.0 with JWT tokens for API authentication",
        "Session management with automatic timeout"
      ]
    },
    {
      title: "AI Model Security",
      measures: [
        "Federated learning to keep user data on-device",
        "Differential privacy for ML training datasets",
        "Model versioning and rollback capabilities",
        "Adversarial attack detection and mitigation"
      ]
    },
    {
      title: "Compliance & Audit",
      measures: [
        "RBI guidelines compliance for digital lending",
        "Regular security penetration testing",
        "Comprehensive audit logging and monitoring",
        "Data residency compliance (India-specific)"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Success Framework</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Success Metrics & Security
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive KPIs and security measures to ensure sustainable growth and user trust
          </p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {kpis.map((category, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`bg-${category.color}/10 p-2 rounded-lg`}>
                    <category.icon className={`h-6 w-6 text-${category.color}`} />
                  </div>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-foreground text-sm">{metric.name}</h4>
                        <p className="text-xs text-muted-foreground">{metric.timeline}</p>
                      </div>
                      <Badge variant="outline" className={`text-${category.color} border-${category.color}/30`}>
                        {metric.target}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Measurement Framework */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Target className="h-6 w-6 text-primary" />
              Success Measurement Framework
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-primary/5 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">Short-term (0-6 months)</h3>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• MVP launch with core features</li>
                  <li>• 10K+ user registrations</li>
                  <li>• Basic AI model deployment</li>
                  <li>• User feedback collection</li>
                </ul>
              </div>
              <div className="text-center p-6 bg-accent/5 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">Medium-term (6-12 months)</h3>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• 50K+ active users</li>
                  <li>• ₹10Cr+ loan disbursals</li>
                  <li>• Advanced AI features live</li>
                  <li>• Break-even on unit economics</li>
                </ul>
              </div>
              <div className="text-center p-6 bg-success/5 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">Long-term (12+ months)</h3>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• 100K+ active users</li>
                  <li>• Market leadership in rural lending</li>
                  <li>• Expansion to new geographies</li>
                  <li>• Profitability and growth</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Considerations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              Security & Compliance Framework
            </CardTitle>
            <p className="text-muted-foreground">Comprehensive security measures to protect user data and ensure regulatory compliance</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {securityMeasures.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="font-semibold text-foreground border-b border-border pb-2">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.measures.map((measure, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <Shield className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{measure}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Risk Mitigation */}
        <div className="mt-12 p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            Key Risk Mitigation Strategies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium text-foreground mb-2">Technical Risks</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Multi-region deployments for high availability</li>
                <li>• Gradual rollout of AI model updates</li>
                <li>• Comprehensive monitoring and alerting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Business Risks</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Diversified user acquisition channels</li>
                <li>• Conservative credit policies initially</li>
                <li>• Regulatory compliance monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};