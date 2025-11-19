import SolutionCard from "@/components/solution-card";
import { RiTeamLine, RiScalesLine, RiMoneyDollarCircleLine, RiSettings3Line, RiErrorWarningLine } from "react-icons/ri";

interface Solution {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href?: string;
}

const solutions: Solution[] = [
  {
    icon: RiTeamLine,
    title: "Human Resources",
    description: "5 AI-powered solutions for talent management, onboarding, and compliance",
    href: "/use-cases/human-resources"
  },
  {
    icon: RiScalesLine,
    title: "Legal & Compliance",
    description: "5 solutions for regulatory monitoring, contract review, and risk assessment",
    href: "/use-cases/legal-compliance"
  },
  {
    icon: RiMoneyDollarCircleLine,
    title: "Finance Operations",
    description: "5 solutions for invoice processing, fraud detection, and forecasting",
    href: "/use-cases/finance-operations"
  },
  {
    icon: RiSettings3Line,
    title: "Operations",
    description: "5 solutions for trade reconciliation, customer onboarding, and optimization",
    href: "/use-cases/operations"
  },
  {
    icon: RiErrorWarningLine,
    title: "Risk Management",
    description: "5 solutions for market risk, credit portfolio, and operational risk",
    href: "/use-cases/risk-management"
  }
];

export default function BankingFinanceSection() {
  return (
    <div className="mt-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <h4 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-sora)" }}>
        Banking & Finance
      </h4>
      <p className="text-lg text-white/80 leading-relaxed max-w-3xl mb-8" style={{ fontFamily: "var(--font-manrope)" }}>
        Transform financial operations with AI-powered automation, risk management, and compliance solutions that scale across your entire organization.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {solutions.slice(0, 3).map((solution, index) => (
          <SolutionCard 
            key={index} 
            icon={solution.icon} 
            title={solution.title} 
            description={solution.description}
            href={solution.href}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="md:col-start-1 md:col-end-2">
          <SolutionCard 
            icon={solutions[3].icon} 
            title={solutions[3].title} 
            description={solutions[3].description}
            href={solutions[3].href}
          />
        </div>
        <div className="md:col-start-2 md:col-end-3">
          <SolutionCard 
            icon={solutions[4].icon} 
            title={solutions[4].title} 
            description={solutions[4].description}
            href={solutions[4].href}
          />
        </div>
      </div>
    </div>
  );
}

