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
    <div className="mt-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <h4 className="text-3xl font-bold text-gray-900 mb-4 font-sora">
        Insurance
      </h4>
      <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-8">
        Accelerate claims processing, enhance underwriting accuracy, and deliver exceptional customer service with AI-powered automation.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {solutions.slice(0, 3).map((solution, index) => (
          <SolutionCard key={index} icon={solution.icon} title={solution.title} description={solution.description} href={solution.href} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="md:col-start-1 md:col-end-2">
          <SolutionCard icon={solutions[3].icon} title={solutions[3].title} description={solutions[3].description} href={solutions[3].href} />
        </div>
        <div className="md:col-start-2 md:col-end-3">
          <SolutionCard icon={solutions[4].icon} title={solutions[4].title} description={solutions[4].description} href={solutions[4].href} />
        </div>
      </div>
    </div>
  );
}

