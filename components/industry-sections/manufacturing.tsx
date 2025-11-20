import SolutionCard from "@/components/solution-card";
import { RiBuilding2Line, RiCheckboxCircleLine, RiTruckLine, RiToolsLine, RiShieldLine } from "react-icons/ri";

interface Solution {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href?: string;
}

const solutions: Solution[] = [
  {
    icon: RiBuilding2Line,
    title: "Production",
    description: "5 solutions for scheduling, yield improvement, and downtime reduction",
    href: "/use-cases/production"
  },
  {
    icon: RiCheckboxCircleLine,
    title: "Quality Control",
    description: "5 solutions for computer vision inspection, defect detection, and analysis",
    href: "/use-cases/quality-control"
  },
  {
    icon: RiTruckLine,
    title: "Supply Chain",
    description: "5 solutions for network optimization, supplier management, and logistics",
    href: "/use-cases/supply-chain-manufacturing"
  },
  {
    icon: RiToolsLine,
    title: "Maintenance",
    description: "5 solutions for predictive maintenance, equipment monitoring, and scheduling",
    href: "/use-cases/maintenance"
  },
  {
    icon: RiShieldLine,
    title: "Safety & Compliance",
    description: "5 solutions for incident prediction, safety monitoring, and training",
    href: "/use-cases/safety-compliance"
  }
];

export default function ManufacturingSection() {
  return (
    <div className="mt-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <h4 className="text-3xl font-bold text-gray-900 mb-4 font-sora">
        Manufacturing
      </h4>
      <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-8">
        Optimize production, enhance quality control, and reduce downtime with AI-powered manufacturing solutions.
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

