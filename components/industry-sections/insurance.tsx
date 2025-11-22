import SolutionCard from "@/components/solution-card";
import { RiFileCheckLine, RiFileTextLine, RiCustomerService2Line, RiShieldCheckLine, RiBarChartLine } from "react-icons/ri";

interface Solution {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href?: string;
}

const solutions: Solution[] = [
  {
    icon: RiFileCheckLine,
    title: "Claims Processing",
    description: "5 solutions for automated triage, damage assessment, and fraud detection",
    href: "/use-cases/claims-processing"
  },
  {
    icon: RiFileTextLine,
    title: "Underwriting",
    description: "5 solutions for risk assessment, quote generation, and portfolio optimization",
    href: "/use-cases/underwriting"
  },
  {
    icon: RiCustomerService2Line,
    title: "Customer Service",
    description: "5 solutions for 24/7 support, policy inquiries, and retention",
    href: "/use-cases/customer-service"
  },
  {
    icon: RiShieldCheckLine,
    title: "Compliance & Audit",
    description: "5 solutions for regulatory monitoring, audit trails, and reporting",
    href: "/use-cases/compliance-audit"
  },
  {
    icon: RiBarChartLine,
    title: "Sales & Distribution",
    description: "5 solutions for lead scoring, cross-sell, and agent performance",
    href: "/use-cases/sales-distribution"
  }
];

export default function InsuranceSection() {
  return (
    <div className="mt-8">
      <div className="text-center mb-8">
        <h4 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-sora)" }}>
          Insurance
        </h4>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Accelerate claims processing, enhance underwriting accuracy, and deliver exceptional customer service with AI-powered automation.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {solutions.slice(0, 3).map((solution, index) => (
          <SolutionCard key={index} icon={solution.icon} title={solution.title} description={solution.description} href={solution.href} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {solutions.slice(3, 5).map((solution, index) => (
          <SolutionCard key={index} icon={solution.icon} title={solution.title} description={solution.description} href={solution.href} />
        ))}
      </div>
    </div>
  );
}

