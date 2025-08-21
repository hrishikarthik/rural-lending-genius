import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Users, Zap, Shield } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Smartphone className="h-4 w-4 text-white" />
            <span className="text-white text-sm font-medium">Product Design Case Study</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Rural<span className="text-primary-glow">Lend</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            AI-Powered Lending Solutions for Rural & Semi-Urban India
          </p>
          
          <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto">
            Comprehensive product strategy for instant personal loans with intelligent underwriting, 
            designed for low-spec smartphones and users with limited digital literacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Zap, title: "Instant Loans", desc: "Quick approvals" },
            { icon: Shield, title: "AI Underwriting", desc: "Smart risk assessment" },
            { icon: Users, title: "Rural Focus", desc: "Low digital literacy" },
            { icon: Smartphone, title: "Offline Ready", desc: "Low bandwidth support" }
          ].map((feature, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-center hover:bg-white/20 transition-all duration-300">
              <feature.icon className="h-8 w-8 text-white mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/80 text-sm">{feature.desc}</p>
            </Card>
          ))}
        </div>

        <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg px-8 py-3 text-lg">
          Explore the Solution
        </Button>
      </div>
    </section>
  );
};