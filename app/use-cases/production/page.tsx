"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import DetailCard from "@/components/detail-card";
import { RiTimeLine, RiBarChartLine, RiCheckboxCircleLine, RiFocus3Line, RiMoneyDollarCircleLine, RiArrowLeftLine } from "react-icons/ri";
import { getIndustryFromPath } from "@/lib/industry-mapping";

interface Metric {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

interface Solution {
  number: number;
  title: string;
  description: string;
  metrics: Metric[];
}

const solutions: Solution[] = [
  {
    number: 1,
    title: "AI-Powered Production Scheduling",
    description: "Reduce downtime by 25% and improve throughput by 20%",
    metrics: [
      { icon: RiTimeLine, text: "25% Reduction in downtime" },
      { icon: RiBarChartLine, text: "20% Improvement in throughput" }
    ]
  },
  {
    number: 2,
    title: "Process Optimization & Efficiency",
    description: "Improve efficiency by 30% with continuous optimization",
    metrics: [
      { icon: RiBarChartLine, text: "30% Efficiency improvement" },
      { icon: RiCheckboxCircleLine, text: "Reduced Waste" }
    ]
  },
  {
    number: 3,
    title: "Yield Improvement & Defect Reduction",
    description: "Reduce defect rate by 50% with predictive quality",
    metrics: [
      { icon: RiBarChartLine, text: "50% Reduction in defect rate" },
      { icon: RiMoneyDollarCircleLine, text: "$12M Annual scrap savings" }
    ]
  },
  {
    number: 4,
    title: "Downtime Reduction & OEE Improvement",
    description: "Reduce unplanned downtime by 60% and improve OEE to 90%",
    metrics: [
      { icon: RiBarChartLine, text: "60% Reduction in downtime" },
      { icon: RiFocus3Line, text: "90% OEE improvement" }
    ]
  },
  {
    number: 5,
    title: "Energy Efficiency & Cost Optimization",
    description: "Reduce energy costs by 25% with intelligent optimization",
    metrics: [
      { icon: RiBarChartLine, text: "25% Reduction in energy costs" },
      { icon: RiMoneyDollarCircleLine, text: "$3.75M Annual savings" }
    ]
  }
];

export default function ProductionPage() {
  const pathname = usePathname();
  const industry = getIndustryFromPath(pathname) || "banking";
  const backHref = `/use-cases?industry=${industry}`;

  return (
    <main>
      <section className="relative pt-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-20">
        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Back Button */}
          <Link 
            href={backHref}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6 text-sm font-medium"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            <RiArrowLeftLine className="w-4 h-4" />
            Back to Industries
          </Link>
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2 md:text-3xl" style={{ fontFamily: "var(--font-sora)" }}>
              Production
            </h1>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-manrope)" }}>
              Optimize production scheduling, improve yield, and reduce downtime with AI-powered production solutions.
            </p>
          </div>
          
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.slice(0, 3).map((solution) => (
              <DetailCard
                key={solution.number}
                number={solution.number}
                title={solution.title}
                description={solution.description}
                metrics={solution.metrics}
                href={`/use-cases/production/case-${solution.number}`}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="md:col-start-1">
              <DetailCard
                number={solutions[3].number}
                title={solutions[3].title}
                description={solutions[3].description}
                metrics={solutions[3].metrics}
                href={`/use-cases/production/case-${solutions[3].number}`}
              />
            </div>
            <div className="md:col-start-2">
              <DetailCard
                number={solutions[4].number}
                title={solutions[4].title}
                description={solutions[4].description}
                metrics={solutions[4].metrics}
                href={`/use-cases/production/case-${solutions[4].number}`}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

