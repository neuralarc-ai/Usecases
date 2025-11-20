import SolutionCard from "@/components/solution-card";
import { RiSearchLine, RiRocketLine, RiBookOpenLine, RiFileListLine, RiCalendarLine } from "react-icons/ri";

interface Solution {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href?: string;
}

const solutions: Solution[] = [
  {
    icon: RiSearchLine,
    title: "Research & Analysis",
    description: "5 solutions for market research, competitive intelligence, and insights",
    href: "/use-cases/research-analysis"
  },
  {
    icon: RiRocketLine,
    title: "Client Delivery",
    description: "5 solutions for project management, deliverable creation, and quality",
    href: "/use-cases/client-delivery"
  },
  {
    icon: RiBookOpenLine,
    title: "Knowledge Management",
    description: "5 solutions for document organization, expertise location, and content",
    href: "/use-cases/knowledge-management"
  },
  {
    icon: RiFileListLine,
    title: "Proposal Development",
    description: "5 solutions for RFP analysis, proposal generation, and pricing",
    href: "/use-cases/proposal-development"
  },
  {
    icon: RiCalendarLine,
    title: "Resource Planning",
    description: "5 solutions for capacity planning, skill matching, and allocation",
    href: "/use-cases/resource-planning"
  }
];

export default function ConsultingSection() {
  return (
    <div className="mt-8">
      <h4 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-sora)" }}>
        Consulting
      </h4>
      <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-8" style={{ fontFamily: "var(--font-manrope)" }}>
        Accelerate research, enhance client delivery, and scale knowledge management with AI-powered consulting solutions.
      </p>
      
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

