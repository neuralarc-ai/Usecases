import SolutionCard from "@/components/solution-card";
import { RiBox3Line, RiHeartLine, RiMegaphoneLine, RiTruckLine, RiBarChartBoxLine } from "react-icons/ri";

interface Solution {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href?: string;
}

const solutions: Solution[] = [
  {
    icon: RiBox3Line,
    title: "Inventory Management",
    description: "5 solutions for demand forecasting, automated reordering, and optimization",
    href: "/use-cases/inventory-management"
  },
  {
    icon: RiHeartLine,
    title: "Customer Experience",
    description: "5 solutions for personalization, virtual assistants, and omnichannel",
    href: "/use-cases/customer-experience"
  },
  {
    icon: RiMegaphoneLine,
    title: "Marketing & Sales",
    description: "5 solutions for content generation, pricing optimization, and attribution",
    href: "/use-cases/marketing-sales"
  },
  {
    icon: RiTruckLine,
    title: "Supply Chain",
    description: "5 solutions for logistics, supplier management, and route optimization",
    href: "/use-cases/supply-chain"
  },
  {
    icon: RiBarChartBoxLine,
    title: "Analytics & Insights",
    description: "5 solutions for real-time dashboards, predictive analytics, and reporting",
    href: "/use-cases/analytics-insights"
  }
];

export default function RetailSection() {
  return (
    <div className="mt-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <h4 className="text-3xl font-bold text-gray-900 mb-4 font-sora">
        Retail
      </h4>
      <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-8">
        Optimize inventory, personalize customer experiences, and drive sales with AI-powered retail solutions.
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

