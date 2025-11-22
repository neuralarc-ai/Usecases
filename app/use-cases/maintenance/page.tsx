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
    title: "Predictive Maintenance & Failure Prevention",
    description: "Reduce unplanned downtime by 70% with predictive maintenance",
    metrics: [
      { icon: RiBarChartLine, text: "70% Reduction in downtime" },
      { icon: RiTimeLine, text: "Extended Equipment life" }
    ]
  },
  {
    number: 2,
    title: "Equipment Performance Monitoring",
    description: "Monitor equipment performance in real-time with AI analytics",
    metrics: [
      { icon: RiCheckboxCircleLine, text: "Real-time Monitoring" },
      { icon: RiBarChartLine, text: "90% Performance visibility" }
    ]
  },
  {
    number: 3,
    title: "Maintenance Scheduling & Optimization",
    description: "Optimize maintenance schedules to reduce costs by 40%",
    metrics: [
      { icon: RiTimeLine, text: "40% Reduction in maintenance costs" },
      { icon: RiCheckboxCircleLine, text: "Optimal Scheduling" }
    ]
  },
  {
    number: 4,
    title: "Spare Parts Management & Inventory",
    description: "Reduce spare parts inventory by 35% with intelligent management",
    metrics: [
      { icon: RiBarChartLine, text: "35% Reduction in inventory" },
      { icon: RiCheckboxCircleLine, text: "95% Parts availability" }
    ]
  },
  {
    number: 5,
    title: "Maintenance Analytics & Optimization",
    description: "Improve maintenance efficiency by 50% with data-driven insights",
    metrics: [
      { icon: RiBarChartLine, text: "50% Improvement in efficiency" },
      { icon: RiMoneyDollarCircleLine, text: "$4M Annual savings" }
    ]
  }
];

export default function MaintenancePage() {
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
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2 md:text-3xl" style={{ fontFamily: "var(--font-sora)" }}>
              Maintenance
            </h1>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "var(--font-manrope)" }}>
              Prevent failures, optimize maintenance schedules, and reduce downtime with AI-powered maintenance solutions.
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
                href={`/use-cases/maintenance/case-${solution.number}`}
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
                href={`/use-cases/maintenance/case-${solutions[3].number}`}
              />
            </div>
            <div className="md:col-start-2">
              <DetailCard
                number={solutions[4].number}
                title={solutions[4].title}
                description={solutions[4].description}
                metrics={solutions[4].metrics}
                href={`/use-cases/maintenance/case-${solutions[4].number}`}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

