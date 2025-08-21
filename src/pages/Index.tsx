import { HeroSection } from "@/components/HeroSection";
import { ProblemSolution } from "@/components/ProblemSolution";
import { FeaturePrioritization } from "@/components/FeaturePrioritization";
import { LLMFeatures } from "@/components/LLMFeatures";
import { UXConsiderations } from "@/components/UXConsiderations";
import { UserFlows } from "@/components/UserFlows";
import { Wireframes } from "@/components/Wireframes";
import { TechnicalArchitecture } from "@/components/TechnicalArchitecture";
import { SuccessMetrics } from "@/components/SuccessMetrics";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSolution />
      <FeaturePrioritization />
      <LLMFeatures />
      <UXConsiderations />
      <UserFlows />
      <Wireframes />
      <TechnicalArchitecture />
      <SuccessMetrics />
    </main>
  );
};

export default Index;
